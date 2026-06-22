# Study Abroad — Design System (design.md)

> Single source of truth for the website redesign.
> **Brand:** Study Abroad (Pvt) Ltd — Sri Lanka's student visa & university placement consultancy (est. 2007). Destinations: UK, Canada, USA, Germany, Sweden.
> **Motto:** *Global Minds. Global Futures.*
> **Stack:** Next.js 15 · React 19 · Tailwind CSS v3 · TypeScript.

---

## 0. Brand & Feel

**Positioning:** A calm, modern, highly professional and trustworthy international-education consultancy (est. 2007).

**Audience:** Students **18–30** and **their parents** — people choosing who to trust with their future. The parents need reassurance and credibility; the students need clarity and possibility.

**Personality:** Established and careful, **never loud or trendy**. Whitespace and restraint do the work. Warmth comes from a single **gold** accent and authentic photography — not from bright colors or busy effects.

**Voice:** Clear, warm, grown-up. Confident without hype. Speaks to a big life decision with steadiness. Motto *"Global Minds. Global Futures."* may anchor the hero and recur as a quiet signature — never overused.

---

## 0b. Design Direction

| Dimension | Decision |
|---|---|
| **Aesthetic** | Clean, calm, established minimal — generous whitespace, restraint, subtle depth; never loud or trendy |
| **Base mode** | **Light-first** (white / off-white surfaces). No dark theme for v1. |
| **Color anchor** | **Blue** tuned to the logo navy `#123F6F`, on cool slate neutrals + **one warm gold accent** |
| **Typography** | **Inter (geometric sans)** for all headings and body (client preferred sans over serif) |
| **Motion** | Subtle & refined |
| **Imagery** | Real photography (students, campuses, destinations) |
| **Optimize for** | Lead generation · Trust & credibility · Content clarity · Visual differentiation |

**North star:** A site that feels calm, credible, and effortless — premium without being loud. Every screen reduces a student's/parent's decision anxiety and moves them toward booking a consultation.

### Anti-slop guardrails (what makes this NOT look templated)
- No generic full-width hero with a single centered headline + two buttons and nothing else. Lead with a real, specific value proposition + proof.
- No emoji as icons. No raw stock-photo clichés (handshakes, generic globes). Use authentic, on-brand photography.
- No purple-blue AI-default gradients everywhere. Color is used with restraint; the warm gold accent appears in <10% of the surface.
- Hierarchy comes from **size, weight, spacing, and contrast** — not from color alone or drop shadows.
- Nothing trendy or attention-seeking: no neon, no heavy glassmorphism, no oversized animated gimmicks. Calm and timeless beats fashionable.
- One primary CTA per screen. Secondary actions are visually subordinate.

---

## 1. Color System

All colors are exposed as **CSS variables** (semantic) backed by a **raw scale** in `tailwind.config.js`. Components reference **semantic tokens**, never raw hex.

### 1.0 Logo colors (reference)
The Study Abroad logo: **"Study"** (navy outline `#123F6F`, white `#FFFFFF` fill) above **"Abroad"** (solid navy `#123F6F`), with a **graduation cap** in green `#0D6666`.
- The logo **navy `#123F6F`** anchors the brand-blue scale below (it *is* `brand-900`); the primary action color `brand-600` is a brighter, accessible derivative of the same hue (~212°).
- The logo **green `#0D6666`** (dark teal) is kept as an *optional supporting tint* (`--color-support`), used sparingly so the logo sits harmoniously. It is **not** the primary accent — that is gold — to avoid reverting to the old navy+teal scheme.

### 1.1 Brand — Blue (primary, logo-harmonized)
Tuned to the logo navy (`#123F6F`): the deep end of the scale matches the logo, while `brand-600` is a brighter, accessible derivative for actions. Calm and established, not electric. Replaces the old `#0B2144` navy / `#0FA3A3` teal entirely.

| Token | Hex | Use |
|---|---|---|
| `brand-50` | `#F0F7FF` | Tinted section backgrounds, hover wash |
| `brand-100` | `#DDECFE` | Subtle fills, chips |
| `brand-200` | `#B8D5F9` | Borders on tinted surfaces |
| `brand-300` | `#83B5F1` | Disabled primary, decorative |
| `brand-400` | `#4B8FE7` | Accents on dark imagery |
| `brand-500` | `#186DDC` | Vivid highlight, focus glow |
| **`brand-600`** | **`#135ABE`** | **Primary** — buttons, links, active states (white text ≈ 6.5:1) |
| `brand-700` | `#114D9C` | Primary hover/pressed |
| `brand-800` | `#124481` | Deep headings on tint, gradients |
| `brand-900` | `#123D6E` | Darkest brand / footer — ≈ logo navy `#123F6F` |
| `brand-950` | `#0B2746` | Rare deep contrast |

### 1.2 Accent — Gold (secondary, sparing)
Warm signal color for differentiation + trust cues (accreditation, ratings, stat emphasis, eyebrow underlines). Premium "medal/award" connotation. **Never** for body text on white (fails contrast — use only as fills, icons, or with dark text).

| Token | Hex | Use |
|---|---|---|
| `gold-50` | `#FFF8EB` | Highlight wash |
| `gold-100` | `#FCEFC7` | Badge background |
| `gold-400` | `#FBBF24` | Star ratings, icon fills |
| **`gold-500`** | **`#F5A524`** | **Accent** — underlines, marks, emphasis |
| `gold-600` | `#D98613` | Accent text on light (with care), hover |

### 1.3 Neutral — Slate (cool gray)
Text, surfaces, borders. Cool slate complements brand and reads modern/clean.

| Token | Hex | Use |
|---|---|---|
| `slate-50` | `#F8FAFC` | Alt section background |
| `slate-100` | `#F1F5F9` | Subtle fills, code/quote blocks |
| `slate-200` | `#E2E8F0` | **Default borders / dividers** |
| `slate-300` | `#CBD5E1` | Strong borders, disabled outline |
| `slate-400` | `#94A3B8` | Placeholder, muted icons |
| `slate-500` | `#64748B` | Secondary / supporting text |
| `slate-600` | `#475569` | Muted headings |
| `slate-700` | `#334155` | **Body text** |
| `slate-800` | `#1E293B` | Strong body, sub-headings |
| `slate-900` | `#0F172A` | **Headings / primary ink** |
| `slate-950` | `#020617` | Max contrast, footer text |

### 1.4 Semantic tokens (the API components use)

```css
/* globals.css — :root */
--color-bg:            #FFFFFF;   /* page background */
--color-bg-subtle:     #F8FAFC;   /* alternating sections (slate-50) */
--color-bg-tint:       #F0F7FF;   /* brand-tinted blocks (brand-50) */
--color-surface:       #FFFFFF;   /* cards */
--color-border:        #E2E8F0;   /* slate-200 */
--color-border-strong: #CBD5E1;   /* slate-300 */

--color-ink:           #0F172A;   /* headings (slate-900) */
--color-text:          #334155;   /* body (slate-700) */
--color-text-muted:    #64748B;   /* secondary (slate-500) */
--color-text-onbrand:  #FFFFFF;   /* text on brand */

--color-primary:       #135ABE;   /* brand-600 */
--color-primary-hover: #114D9C;   /* brand-700 */
--color-primary-soft:  #F0F7FF;   /* brand-50 */
--color-accent:        #F5A524;   /* gold-500 — the one accent */
--color-support:       #0D6666;   /* logo green — optional supporting tint, sparing */
--color-ring:          #186DDC;   /* focus (brand-500) */

--color-success:       #16A34A;
--color-warning:       #D97706;
--color-error:         #DC2626;
--color-info:          #135ABE;
```

### 1.5 Contrast rules (WCAG AA — non-negotiable)
- Body text (`slate-700`) on white ≈ 10:1 ✓. Muted (`slate-500`) on white ≈ 4.6:1 ✓ — do **not** go lighter for body copy.
- White text on `brand-600` ≈ 6.5:1 ✓ (buttons). White on `brand-500` ≈ 4.9:1 ✓ — passes AA, but prefer 600+ for primary actions.
- Gold is decorative/fill only. For "gold text," use `gold-600` on white at ≥16px bold, or dark text on gold fills.
- Never convey meaning by color alone — pair with icon/text/label.

---

## 2. Typography

**One geometric sans across the whole site.** Headings and body both use **Inter** — the client preferred the clean sans look for headers over a serif. Warmth comes from the **gold accent + authentic photography**, not the typeface. Hierarchy comes from size and weight.

| Role | Font | Weights | Loaded via |
|---|---|---|---|
| **Display / Headings** (`font-display`) | **Inter** | 500–700 | `next/font/google` |
| **Body / UI** (`font-body`, `font-sans`) | **Inter** | 400, 500, 600 | `next/font/google` |
| **Numeric / tabular** | **Inter** (`tabular-nums`) | 500–600 | stats, counters |

> `font-display` and `font-body` both resolve to **Inter** — `font-display` is kept as the heading alias so we can re-tune the heading face in one place later if wanted. **Fraunces is no longer used** (was the earlier serif experiment) — remove its `next/font` import from `layout.tsx` in a cleanup pass (needs a dev restart).
> Fonts load via `next/font` (self-hosted, `display: swap`, no layout shift) — CDN `<link>` already removed.

### 2.1 Type scale (fluid, mobile → desktop)
Major-third-ish ramp. Use `clamp()` for large headings. Sans headings need a bit more weight for presence — **600–700 for solid headings on light**; the hero uses 500 because it's a gradient on dark.

| Token | Size (mobile → desktop) | Line-height | Weight | Tracking |
|---|---|---|---|---|
| `display` | 2.5rem → `clamp(2.5rem, 5vw, 3.75rem)` | 1.05 | 700 | -0.02em |
| `h1` | 2rem → `clamp(2rem, 4vw, 3rem)` | 1.1 | 700 | -0.02em |
| `h2` | 1.75rem → `clamp(1.75rem, 3vw, 2.25rem)` | 1.15 | 600 | -0.01em |
| `h3` | 1.375rem → 1.5rem | 1.25 | 600 | -0.01em |
| `h4` | 1.125rem → 1.25rem | 1.3 | 600 | normal |
| `body-lg` | 1.125rem (18px) | 1.65 | 400 | normal |
| `body` | 1rem (16px) | 1.6 | 400 | normal |
| `small` | 0.875rem (14px) | 1.5 | 400 | normal |
| `eyebrow` | 0.8125rem (13px) | 1.4 | 600 | 0.08em, UPPERCASE |
| `caption` | 0.75rem (12px) | 1.4 | 500 | normal |

### 2.2 Rules
- **Headings:** Inter via `font-display`, `slate-900`, `font-semibold`/`font-bold`, tight leading + slightly negative tracking at large sizes.
- **Eyebrow/overline:** uppercase, tracked, `brand-600` or `gold-600` — sits above section headers.
- **Body & UI:** Inter, `slate-700`, line-height 1.6, max measure **65–75ch** (`max-w-prose` / `max-w-[68ch]`).
- **Body minimum 16px** everywhere (avoids iOS auto-zoom). Never body text < 14px.
- Use **size + weight** for hierarchy, not color alone.
- The **motto** *"Global Minds. Global Futures."* is a quiet signature, used sparingly (e.g. hero eyebrow).
- Tabular figures for any aligned numbers (stats, tables): `tabular-nums`.
- **Larger-text preference (client request):** the company wants generous, readable text. Nav links are **16px (`text-base`)**, not 14px. Lead primary section paragraphs/intros with **`body-lg` (18px)** rather than 16px. Bump comfortably rather than shrinking to fit — adjust layout/spacing instead.

---

## 3. Spacing & Layout

### 3.1 Spacing scale (4px base, 8px rhythm)
`0 · 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 128` (Tailwind `0,1,2,3,4,6,8,12,16,20,24,32`).
Vertical rhythm tiers: **inline 8 · element 16 · group 24 · block 32 · section 48–96**.

### 3.2 Containers & grid
- **Page container:** `max-w-7xl` (1280px), `mx-auto`, padding `px-4 sm:px-6 lg:px-8`.
- **Prose container:** `max-w-[68ch]` for long-form reading.
- **Grid:** 12-column mental model; use `grid` + `gap-6 lg:gap-8`. Cards in `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- **Section padding:** `py-16 md:py-24 lg:py-28`. Symmetrical top/bottom.
- Alternate section backgrounds: `bg-white` ↔ `bg-slate-50` ↔ occasional `bg-brand-50` tint for rhythm.

### 3.3 Breakpoints
`sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`. **Mobile-first.** Verify at **375px** first. No horizontal scroll; respect `min-h-dvh` over `100vh`.

### 3.4 Radius
Minimal-modern, consistent scale: `sm 8px (inputs/buttons) · md 12px (cards) · lg 16px (media/large cards) · xl 24px (feature panels) · full (pills/avatars)`.

### 3.5 Elevation / shadows (subtle — prefer borders over heavy shadows)
```css
--shadow-sm: 0 1px 2px rgba(15,23,42,.06);
--shadow-md: 0 4px 14px rgba(15,23,42,.08);
--shadow-lg: 0 12px 32px rgba(15,23,42,.10);
--shadow-focus: 0 0 0 3px rgba(51,102,255,.35);
```
Default cards: `border border-slate-200` + `shadow-sm`. Lift to `shadow-md` on hover. Reserve `shadow-lg` for floating/sticky elements.

### 3.6 z-index scale
`base 0 · dropdown 10 · sticky 20 · header 30 · overlay 40 · modal 50 · toast 60 · tooltip 70`.

---

## 4. Motion (subtle & refined)

- **Durations:** micro 150ms · default 200–250ms · entrance 300–400ms. Never > 500ms.
- **Easing:** enter `cubic-bezier(.16,1,.3,1)` (out-expo) · exit `cubic-bezier(.4,0,1,1)`. Avoid linear for UI.
- **Exit faster than enter** (~60–70%).
- **Animate `transform` & `opacity` only** — never width/height/top/left (no layout shift / CLS).
- **Hover:** cards lift `-translate-y-1` + `shadow-md`; links/buttons transition color 150ms; subtle scale (0.98) on press.
- **Scroll reveal:** fade + `translateY(16px)` → 0, 400ms, stagger 50–60ms per item, **trigger once**. Keep to 1–2 key elements per view.
- **Counters/stats:** count-up on first view (respect reduced-motion → show final value instantly).
- **Always** wrap in `@media (prefers-reduced-motion: reduce)` → disable transforms, keep opacity/instant.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
}
```

---

## 5. Component Tokens

Reference classes. Build these as reusable React components (e.g. `Button`, `Card`, `Section`, `Eyebrow`, `Badge`, `Input`).

### 5.1 Buttons (one primary CTA per screen)
- **Shape:** **pill** (`rounded-full`) — matches the hero CTAs. All button variants are pills for consistency.
- **Primary:** `inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-brand-600 text-white font-semibold text-sm hover:bg-brand-500 hover:shadow-lg active:scale-[.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50` — note hover **lightens** (brand-500) and lifts a shadow, not darkens.
- **Secondary:** `… bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 …` (on dark imagery use `border-[1.5px] border-white/70 text-white hover:border-white hover:bg-white/10`).
- **Ghost:** `… bg-transparent text-brand-700 hover:bg-brand-50 …`
- **Link:** `text-brand-600 font-medium underline-offset-4 hover:underline hover:text-brand-700`
- Min height **44px** (`h-11`) for touch. Loading state: spinner + `disabled` (never just spin without disabling).
- **Nav CTA** label is **"Contact Us"** → `/contact`.

### 5.2 Cards
`group relative flex flex-col rounded-2xl bg-white border border-slate-200 p-6 lg:p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md`
- Title `text-xl font-semibold text-slate-900 group-hover:text-brand-700 transition`
- Body `text-slate-600 text-sm leading-relaxed`
- Icon chip `flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600` (Lucide icon `h-5 w-5`).

### 5.3 Eyebrow (section label)
`inline-flex items-center gap-2 text-eyebrow uppercase tracking-[0.08em] font-semibold text-brand-600` — optionally a `gold-500` leading mark/underline for differentiation.

### 5.4 Inputs / forms
- Field: `h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 transition`
- **Visible label above every field** (not placeholder-only). Required marked with `*`.
- Errors **below the field** in `text-error text-sm`, with `aria-live`/`role="alert"`; auto-focus first invalid field on submit.
- Validate on **blur**, not keystroke. Semantic input types (`email`, `tel`) for correct mobile keyboards.
- Submit → loading → success/error feedback.

### 5.5 Badges / pills
- Neutral: `bg-slate-100 text-slate-700` · Brand: `bg-brand-50 text-brand-700` · Accent: `bg-gold-100 text-gold-600`.
- Accreditation/trust badge uses gold.

### 5.6 Navigation (header)
- Sticky, `bg-white/90 backdrop-blur border-b border-slate-200`, height ~72px, `z-30`.
- Logo left · links center/right (`text-slate-700 hover:text-brand-700`, active = `text-brand-700` + underline) · primary CTA "Book a Consultation" right.
- Active route clearly highlighted. Mobile: hamburger → full-height sheet, links ≥44px tap targets.
- Keep navigation placement identical across all pages.

### 5.7 Footer
- `bg-slate-900 text-slate-300`, columns: brand + accreditation, destinations, services, resources, contact. Headings `text-white`. Links `hover:text-white`. Bottom bar `border-t border-white/10`.

---

## 6. Iconography & Imagery

### 6.1 Icons
- **Lucide** (single family). Stroke **1.5–2px**, sizes `16 / 20 / 24` only. No emoji as icons. Filled vs outline not mixed at the same level. SVG only.

### 6.2 Photography (primary visual language)
- **Authentic** students, campuses, classrooms, and destination cities — not generic clichés (handshakes, lens-flare globes).
- Consistent treatment: `rounded-xl/2xl`, fixed aspect ratios (`aspect-[4/3]`, `aspect-video`, `aspect-square`).
- Text over images: dark gradient scrim (`from-slate-900/70`) for legibility; never raw text on busy photos.
- **Always** `next/image` with width/height or `fill` + `sizes` (prevents CLS); `loading="lazy"` below the fold; WebP/AVIF; descriptive `alt`.
- Optional subtle brand treatment: thin brand border, or a small gold "corner" accent — used sparingly for differentiation.

---

## 7. Accessibility (CRITICAL — applies to every component)
- Contrast ≥ **4.5:1** body, **3:1** large text/UI glyphs. Verify each fg/bg pair.
- Visible **focus rings** on all interactive elements (`focus-visible:ring-2 ring-brand-500`). Never remove without replacement.
- Touch targets ≥ **44×44px**; ≥ 8px gap between targets.
- Sequential heading hierarchy `h1→h6`, one `h1` per page.
- `alt` on meaningful images; `aria-label` on icon-only buttons; labels tied to inputs.
- Full keyboard operability; tab order matches visual order; skip-to-content link.
- Respect `prefers-reduced-motion`; support text zoom to 200% without breakage.
- Color never the sole signal — pair with icon/text.

---

## 8. Conversion & Trust Patterns (the four priorities, made concrete)

**Lead generation**
- Persistent path to "Book a Free Consultation": header CTA + a sticky/section CTA + footer. (Zoho SalesIQ chat already present — keep, style to match.)
- Short, friction-light consultation form (name, email, phone, destination, message). Inline validation, clear success state.
- Each page ends with a relevant CTA section.

**Trust & credibility**
- Surface **ICEF accreditation**, "Est. 2007", placement stats (students placed, partner universities, visa success rate) as animated counters.
- Real testimonials/success stories with photo, name, destination, university.
- Partner university / country flags strip.

**Content clarity**
- Countries, Services, Resources use scannable cards, clear eyebrows + H2s, consistent layouts.
- Breadcrumbs on 3+ level deep pages. Generous whitespace; one idea per section.

**Visual differentiation**
- A single gold accent + authentic photography + restraint distinguish from generic all-blue agency templates — established, not trendy.
- Motto *"Global Minds. Global Futures."* used as a quiet, recurring signature.
- Distinctive but tasteful section transitions and a recognizable card/eyebrow system applied consistently.

---

## 9. Implementation Notes (Next.js + Tailwind v3)

1. **Tokens → Tailwind:** extend `tailwind.config.js` `theme.extend.colors` with the `brand` / `gold` / `slate` scales mapped to the CSS variables, plus `fontFamily`, `boxShadow`, `borderRadius`, `keyframes`/`animation` for fade-up.
2. **CSS variables:** define the §1.4 semantic tokens in `globals.css :root`. **Remove** the old dark radial-gradient `body` background and `.apple-liquid-card` / dark-theme remnants from `globals.css` and `main.css`.
3. **Fonts:** `next/font/google` **Inter** only (cdnfonts `<link>` removed). `font-display` and `font-body` both map to Inter. (Fraunces import is leftover and unused — remove from `layout.tsx` in a cleanup pass; needs a dev restart.)
4. **Base layer:** set `body { background: var(--color-bg); color: var(--color-text); }`, default heading font/weights, and the reduced-motion reset (§4).
5. **Avoid CSS pollution:** no global element selectors that override Tailwind utilities; prefer utility classes / component classes.
6. **Components first:** build `Button`, `Card`, `Section`, `Container`, `Eyebrow`, `Badge`, `Input`, `Stat` before composing pages, so tokens stay consistent.
7. **Performance:** `next/image` everywhere, lazy-load below fold, `font-display: swap`, keep CLS < 0.1.

---

## 10. Pre-Ship Checklist
- [ ] Tested at 375px (no horizontal scroll) and at 1280px+.
- [ ] All text ≥ 16px body; contrast pairs verified AA.
- [ ] Every interactive element has a visible focus state and ≥44px target.
- [ ] One primary CTA per screen; consultation path reachable from every page.
- [ ] Images use `next/image` with dimensions + alt; CLS < 0.1.
- [ ] `prefers-reduced-motion` respected; no animation of width/height/top/left.
- [ ] No emoji icons; single Lucide icon family; consistent stroke.
- [ ] Old dark-theme CSS (radial gradient, liquid-glass, navy/teal tokens) fully removed.
- [ ] Semantic tokens used in components (no raw hex).

---

## 11. Section Plan — Home

Status legend: ☐ todo · ◐ in progress · ☑ done. Component names are legacy/misleading — trust the **purpose**.

| # | Purpose | Component file | Verdict | Status | Notes |
|---|---|---|---|---|---|
| 1 | Navigation | `navigations/CountriesSectionNavigations1` | Restyle | ☑ | Done — brand/slate tokens, 16px links, DRY link array, active-route highlight + animated underline, **smart hide-on-scroll-down / reveal-on-scroll-up** header (shadow when scrolled), sliding accessible mobile drawer (sibling of header to avoid transform/fixed conflict), pill Button CTA "Contact Us". |
| 2 | Hero | `headers/IndexSectionHeaders3` | Keep original + recolor | ◐ | Company wants original full-bleed dark hero. Done: new brand/gold/slate tokens (gold eyebrow + play icon, brand-600 CTA, white-outline secondary), **radial scrim + text-shadow** (clean image, readable centered text), focus rings. Heading left as sans gradient (not serif) per "keep as was". **Accent: cyan `#22D3EE`** (harmonizes with navy/blue; replaced rejected gold + lime) on eyebrow + Success Stories border + play button border/icon — **hero-only trial** (arbitrary values); rest of site still uses gold eyebrow tick. TODO: decide one accent and apply consistently. |
| 3 | Features (4-col) | `headers/IndexSectionHeaders2` | Restyle | ☑ | Done — light white section, 4-feature grid, soft brand-50 icon chips, removed teal dividers + orphaned mobile-drawer markup, 15px descriptions. Fixed "Find Your University" duplicate-copy bug. |
| 4 | Why Us | `features/IndexSectionFeatures6` | Restructure | ☑ | Done — built reusable **`SplitSection`** + **`Pillar`** (ui/), light theme, sans h2 (Inter), 3 pillars kept. Image still CSS-bg Unsplash placeholder (next/image deferred to imagery pass). `imageLeft` prop preserved. |
| 5 | How it works | `how-it-works/IndexSectionHowItWorks5Test` | Restructure | ☑ | Done — slate-50 section, centered header (eyebrow + sans h2), 6 steps in `Card` (glassmorphism → light card-lift), solid brand-600 numbered circles. Fixed "Preperation" typo. `tagline` prop kept (default "How It Works"). |
| 6 | Stats / countdown | `stats/IndexSectionStats11` | Restyle (easiest) | ☑ | Done — **brand-900 navy band** (pops vs light sections, echoes hero), 4 white tabular numbers + slate-300 labels, dropped teal dividers. Count-up animation optional (deferred — needs client component). |
| 7 | Top destinations | `custom-components/IndexSectionCustomComponents7` | Restructure (hardest) | ☑ | Done — light white section, eyebrow + sans h2, slate/brand controls, `Button` "All countries". Cards keep image+gradient overlay (legibility) re-toned to brand-950. Added **pause/play control** (WCAG) + **reduced-motion disables autoplay** + better alt text. Carousel logic kept inline (not extracted — differs too much from blog). |
| 8 | Services | `features/IndexSectionServicesTest` | Restructure | ☑ | Done — reuses `SplitSection` + `Pillar` (slate-50, imageLeft), 3 pillars kept, "Read More" pill Button → /services. |
| 9 | ~~Accommodation support~~ | ~~`how-it-works/IndexSectionHowItWorks14`~~ | **Removed** | ✖ | Removed from home per client — covered by its own article page. Component file deleted. |
| 10 | Testimonials | `testimonials/IndexSectionTestimonials16` | Restyle | ☑ | Done — editorial layout (large **1:1 square student photo** + quote, no card), 5-star gold rating under quote, line-clamp-6, **"Read more" links to /stories** (no inline expand → no reflow), side-arrow nav only. 9 real quotes. |
| 11 | Contact / CTA | `contact/IndexSectionContact17` | Restructure + ADD | ☑ | Done — form-centric: **`ConsultationForm`** (first/last name, contact, email, level of study, message) on white card + contact info (address/phone/email) + map. New `Select`/`Textarea` UI. Submits via **Zoho Web-to-Lead** (config block PENDING Zoho team's tokens/field names; until set, validates + shows call/email notice — no silent loss). `extended` prop adds qualification + preferred country for the /contact page. |
| 12 | Blog / resources | `blog/IndexSectionBlog12` | Restyle | ☑ | Done — manual carousel (no autoplay) with **arrows that auto-appear only when articles > visible** (scales when backend adds more); else static grid. Light image-top clickable cards, "All articles" → /resources. Unsplash placeholders. |
| 13 | Footer | `footers/CountriesSectionFooters2` | Restyle | ☑ | Done — semantic `<footer>`, brand-950 bg, 12-col grid (brand+blurb+socials / Pages / Legal / WhatsApp QR + ICEF), white-mono logo (brightness-0 invert), brand-600 social hovers, white/10 borders. **Newsletter signup** at top (`NewsletterSignup`, dark translucent input + Subscribe Button; endpoint PENDING — Zoho Campaigns / mailing list). **`AccreditationSlider`** — data-driven badges: 1 = static, 2+ = calm auto-rotate (no controls; pause on hover/focus, disabled for reduced-motion, manual swipe, one-time swipe-hint hand on scroll-into-view), 0 = column hidden + footer reflows. ICEF item = live IAS badge (next/script, prod only; PNG fallback in dev). WhatsApp QR h-32/w-32. Backend feeds the `accreditations` array later. (Nav drawer keeps static PNG — unique-id constraint.) |

### Sub-pages (done)
Nav + footer shared/migrated site-wide. Body bg flipped to **white** (legacy dark navy removed; two un-migrated detail pages temporarily wrapped in `bg-brand-950`). Migrated bodies: About, Services, Contact (extended form), FAQ (new content + links), Stories, Resources. Each sub-page opens with a reusable navy **`PageHeader`** (breadcrumb + title + subtitle); duplicate in-section titles removed. `ResourcesDetailsSectionContent3` done (light, data-driven, updated company content for Accommodation + Life Abroad, dynamic PageHeader, sidebar guide switcher). `CountryDetailsSectionCustomComponents3` done (light, dynamic PageHeader, docs-style sidebar w/ flags, Overview sections enabled, 8 countries unchanged). **All page bodies migrated — whole site is now light.**

### Pending — Quality + Motion pass (after all sections)
One sweep across the built sections (touch each file once):
- **Lazy-load images:** add `loading="lazy"` + `decoding="async"` to below-the-fold `<img>` (destinations, testimonials, blog). Hero stays eager (LCP).
- **Focus-visible rings:** add consistent brand focus rings to plain text links (nav links, "Read more", "Explore Destination", testimonial) — currently only Button/controls have them.
- **Carousel a11y:** mark off-screen / cloned slides `aria-hidden`/`inert` so they're not Tab-focusable (destinations, blog, testimonials).
- **Scroll-reveal** (fade-up, staggered) + **count-up** for Stats — via a shared `Reveal` + `useInView` + `CountUp`. Respect reduced-motion.

### Pending — Imagery pass
- Migrate external `<img>` / CSS-bg to **`next/image`** (add `next.config` remotePatterns for images.unsplash.com + static.shuffle.dev — needs dev restart). Replace Unsplash placeholders (hero, why-us, services, destinations, blog, accommodation article) with real photos.
- Confirm accommodation article slug for any links.

### Cross-cutting decisions
- **Reusable components to build as we go:** `SplitSection` (image+text), `Pillar` (icon+title+desc), `Carousel` (used by Destinations & Blog). Reduces heavy duplication found across sections.
- **Accessibility to fix during migration:** carousel pause/controls, missing image `alt`, add the contact form.
- **Imagery:** several Unsplash placeholders (hero, Why Us, Services, destinations, blog) — flag for real photography later.
- **Migration mechanic:** wrap each migrated page in `.theme-light`; old dark theme stays for un-migrated pages until all are done, then remove legacy CSS (globals/main).
