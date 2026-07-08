# Deployment Guide — Study Abroad

The site is a **Next.js 15** app (marketing pages + an `/admin` dashboard + form
APIs) deployed to **Netlify**, backed by a **Neon Postgres** database.

Netlify auto-detects Next.js and runs its Next Runtime, so SSR pages, API routes
(`/api/leads`, `/api/subscribe`), middleware (the `/admin` gate), and static
pages all work with no extra setup beyond the steps below.

---

## 1. Environment variables

Set these in **Netlify → Site settings → Environment variables** (never commit them).
They mirror `.env.example`; real local values live in `.env.local` (gitignored).

| Variable        | Required | What it is                                                                 |
| --------------- | -------- | -------------------------------------------------------------------------- |
| `DATABASE_URL`  | ✅ Yes   | Neon Postgres connection string (Neon dashboard → Connection Details → **pooled**). |
| `AUTH_SECRET`   | ✅ Yes   | Secret that signs admin login sessions. **Generate a fresh one for prod** (below). |
| `ZOHO_*`        | Later    | Zoho Web-to-Lead endpoint/fields — add when the client provides them.        |
| `NEXT_PUBLIC_GA_ID` | Later | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`), when provided.          |

Generate a production `AUTH_SECRET`:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

## 2. Deploy to Netlify

1. **Connect the repo:** Netlify → *Add new site* → *Import an existing project* →
   pick the GitHub repo.
2. **Branch to deploy:** `main` (production). Netlify also builds deploy previews
   for PRs automatically.
3. **Build settings:** auto-detected from `netlify.toml`
   (command `npm run build`, Node 20). No changes needed.
4. **Add the environment variables** from section 1.
5. **Deploy.** First build takes a few minutes.

---

## 3. Database (Neon)

- The app just needs `DATABASE_URL` — Neon is host-agnostic.
- **Schema** is already applied (tables `leads`, `newsletter_subscribers`,
  `users`). To re-apply after schema changes: `npm run db:push`.
- **Same DB for dev + prod (current setup).** Simple, fine for launch. If you later
  want isolation, create a **Neon branch** for staging and point `.env.local` at it,
  keeping the primary branch for production.
- **Before go-live:** remove any test rows (e.g. the sample "Test Lead" and test
  subscriber) via the admin dashboard or the Neon SQL editor.

---

## 4. Admin access

- Admin users live in the `users` table. Create/reset one with:
  ```bash
  node scripts/create-admin.mjs <email> <password> "Full Name" admin
  ```
  (roles: `admin` or `editor`). It connects using `DATABASE_URL` from `.env.local`.
- **Change the temporary password** created during development before handover.
- The dashboard is at **`/admin`** (e.g. `https://www.studyabroad.lk/admin`), gated
  by login — not linked from the public site and excluded from search engines.

---

## 5. Custom domain & go-live

1. Netlify → *Domain management* → add `studyabroad.lk` + `www.studyabroad.lk`.
2. Point DNS to Netlify (Netlify shows the exact records). `www` is the canonical
   host (see SEO config).
3. Netlify provisions HTTPS automatically.
4. **Cutover from Vercel:** the site currently deploys to Vercel from `main`. Once
   Netlify is verified on a Netlify URL, switch DNS to Netlify, then retire the
   Vercel deployment.

---

## 6. Post-deploy smoke test

- Visit the site → submit the **consultation form** and the **newsletter banner**.
- Log in at `/admin` → confirm the new lead and subscriber appear.
- (Once Zoho is wired) confirm the lead also reaches Zoho.
