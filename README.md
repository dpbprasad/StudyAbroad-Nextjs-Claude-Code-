# Study Abroad (Pvt) Ltd — Website

Marketing website for **Study Abroad (Pvt) Ltd**, Sri Lanka's international education and
student-visa consultancy (est. 2007). Built as a clean, modern, lead-generation site for
prospective students (18–30) and their parents.

**Live:** https://www.studyabroad.lk

---

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v3** (design tokens in `tailwind.config.js`)
- **next/font** (Inter)
- Deployed on **Vercel**

## Getting started

```bash
# 1. Clone
git clone https://github.com/dpbprasad/StudyAbroad-Nextjs-Claude-Code-.git
cd StudyAbroad-Nextjs-Claude-Code-

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

> **Note:** if you switch a page between client/server components and see a stale
> "use client" error, stop the dev server, delete `.next`, and restart.

## Project structure

```
src/
  app/                 # App Router routes (one folder per page) + metadata routes
    layout.tsx         # Root layout, site-wide metadata, JSON-LD
    page.tsx           # Home page
    icon.svg           # Favicon (temporary "SA" monogram)
    robots.ts          # /robots.txt
    sitemap.ts         # /sitemap.xml
  components/          # Section + UI components
    ui/                # Reusable primitives (Button, Card, Section, Reveal, ...)
    seo/               # Structured-data (JSON-LD) components
  lib/
    site.ts            # Single source of truth: domain + business details
  styles/              # Global CSS + design tokens
public/                # Static assets (images, manifest)
design.md              # Design system & section plan (source of truth)
IMAGE-SPEC.md          # Photography + favicon brief for the designer
```

## Design system

`design.md` is the source of truth for the visual direction (colours, typography,
motion, section plan). Brand anchor: blue `#135ABE` on slate neutrals, Inter for all
type, subtle/unified motion via the shared `ease-smooth` curve.

## Deployment

Pushes to `main` auto-deploy on Vercel. The production canonical domain is
`https://www.studyabroad.lk` (set in `src/lib/site.ts`); the apex domain
301-redirects to `www`.

## Status / pending

- **Imagery** — currently uses stock placeholders; real photography is pending
  (see `IMAGE-SPEC.md`). A `next/image` performance pass follows once photos land.
- **Favicon** — temporary "SA" monogram; full icon set pending (`IMAGE-SPEC.md` §4.9).
- **Consultation form** — built; awaiting Zoho Web-to-Lead config to go live.
