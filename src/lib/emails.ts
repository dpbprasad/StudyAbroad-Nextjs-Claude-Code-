import { BUSINESS } from './site';

/** Data used to build the lead emails (mirrors the /api/leads payload). */
export type LeadEmailData = {
  formType: 'consultation' | 'contact';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  levelOfStudy?: string;
  currentQualification?: string;
  preferredCountry?: string;
  message?: string;
  source?: string;
};

type Built = { subject: string; html: string; text: string };

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const BRAND = '#1e40af';

function row(label: string, value?: string): string {
  if (!value) return '';
  return `<tr>
    <td style="padding:6px 14px 6px 0;color:#64748b;font-size:14px;white-space:nowrap;vertical-align:top">${label}</td>
    <td style="padding:6px 0;color:#0f172a;font-size:14px">${esc(value)}</td>
  </tr>`;
}

function textRow(label: string, value?: string): string {
  return value ? `${label}: ${value}\n` : '';
}

function shell(inner: string): string {
  return `<div style="background:#f1f5f9;padding:24px 0;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0">
      <div style="background:${BRAND};padding:18px 24px">
        <div style="color:#ffffff;font-size:16px;font-weight:700">Study Abroad (Pvt) Ltd</div>
      </div>
      <div style="padding:24px">${inner}</div>
      <div style="padding:16px 24px;border-top:1px solid #f1f5f9;color:#94a3b8;font-size:12px">
        Study Abroad (Pvt) Ltd · ${esc(BUSINESS.address.street)}, ${esc(BUSINESS.address.locality)} · ${esc(BUSINESS.phoneDisplay)} · ${esc(BUSINESS.email)}
      </div>
    </div>
  </div>`;
}

/** Internal notification to the company for a new enquiry. Reply-to = applicant. */
export function buildLeadNotification(d: LeadEmailData): Built {
  const name = `${d.firstName} ${d.lastName}`.trim();
  const kind = d.formType === 'contact' ? 'Contact enquiry' : 'Consultation request';

  const inner = `
    <h1 style="margin:0 0 4px;font-size:18px;color:#0f172a">New ${kind.toLowerCase()}</h1>
    <p style="margin:0 0 18px;color:#64748b;font-size:14px">Submitted via the website${d.source ? ` (${esc(d.source)})` : ''}.</p>
    <table style="border-collapse:collapse;width:100%">
      ${row('Name', name)}
      ${row('Email', d.email)}
      ${row('Phone', d.phone)}
      ${row('Level of study', d.levelOfStudy)}
      ${row('Current qualification', d.currentQualification)}
      ${row('Preferred country', d.preferredCountry)}
      ${row('Message', d.message)}
    </table>
    <p style="margin:18px 0 0;color:#64748b;font-size:13px">Reply to this email to respond directly to ${esc(d.firstName)}.</p>
  `;

  const text =
    `New ${kind.toLowerCase()}\n\n` +
    textRow('Name', name) +
    textRow('Email', d.email) +
    textRow('Phone', d.phone) +
    textRow('Level of study', d.levelOfStudy) +
    textRow('Current qualification', d.currentQualification) +
    textRow('Preferred country', d.preferredCountry) +
    textRow('Message', d.message) +
    textRow('Source', d.source);

  return { subject: `New ${kind.toLowerCase()} — ${name}`, html: shell(inner), text };
}

/** Auto-reply confirmation to the person who submitted the form. */
export function buildLeadAutoReply(d: LeadEmailData): Built {
  const inner = `
    <h1 style="margin:0 0 12px;font-size:18px;color:#0f172a">Thank you, ${esc(d.firstName)}!</h1>
    <p style="margin:0 0 14px;color:#334155;font-size:15px;line-height:1.6">
      We&rsquo;ve received your enquiry and a member of our team will be in touch with you shortly to
      help plan your international education journey.
    </p>
    <p style="margin:0 0 14px;color:#334155;font-size:15px;line-height:1.6">
      If your enquiry is urgent, you can reach us directly on
      <a href="tel:${esc(BUSINESS.phone)}" style="color:${BRAND}">${esc(BUSINESS.phoneDisplay)}</a>
      or reply to this email.
    </p>
    <p style="margin:0;color:#334155;font-size:15px;line-height:1.6">
      Warm regards,<br /><strong>The Study Abroad Team</strong>
    </p>
  `;

  const text =
    `Thank you, ${d.firstName}!\n\n` +
    `We've received your enquiry and a member of our team will be in touch with you shortly.\n\n` +
    `If urgent, call us on ${BUSINESS.phoneDisplay} or reply to this email.\n\n` +
    `Warm regards,\nThe Study Abroad Team\n` +
    `Study Abroad (Pvt) Ltd · ${BUSINESS.email}`;

  return { subject: `We've received your enquiry — Study Abroad (Pvt) Ltd`, html: shell(inner), text };
}
