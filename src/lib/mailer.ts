import 'server-only';
import nodemailer, { type Transporter } from 'nodemailer';

/**
 * Provider-agnostic SMTP mailer. Configure via env vars (works with Zoho Mail,
 * Gmail, SendGrid/Resend SMTP, etc.):
 *   SMTP_HOST, SMTP_PORT (default 587), SMTP_SECURE ("true" for 465),
 *   SMTP_USER, SMTP_PASS, MAIL_FROM (e.g. "Study Abroad <info@studyabroad.lk>")
 *
 * If SMTP isn't configured, sendMail is a safe no-op — the caller decides how to
 * degrade (e.g. still store the lead). Runs on the Node runtime only.
 */

let cached: Transporter | null | undefined;

function getTransport(): Transporter | null {
  if (cached !== undefined) return cached;
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    cached = null;
    return null;
  }
  const port = Number(process.env.SMTP_PORT ?? 587);
  cached = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true' || port === 465,
    auth: { user, pass },
  });
  return cached;
}

export function isMailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

type MailInput = { to: string; subject: string; html: string; text: string; replyTo?: string };

export async function sendMail(input: MailInput): Promise<{ ok: boolean; error?: string }> {
  const transport = getTransport();
  if (!transport) return { ok: false, error: 'SMTP not configured' };

  const from = process.env.MAIL_FROM || process.env.SMTP_USER!;
  try {
    const info = await transport.sendMail({ from, ...input });
    // Non-empty only for test accounts (e.g. Ethereal) — handy while verifying.
    const preview = nodemailer.getTestMessageUrl(info);
    if (preview) console.log('[mailer] preview URL:', preview);
    return { ok: true };
  } catch (e) {
    console.error('[mailer] send failed:', e);
    return { ok: false, error: e instanceof Error ? e.message : 'send failed' };
  }
}
