# Image Reference Sheet — Home Page

Every photographic slot on the home page, with the size to export, aspect
ratio, and art-direction notes. Replace the stock placeholders with real,
licensed photography. Keep a **consistent colour grade** across all images
(natural, warm, slightly bright — not over-saturated) so the page feels like
one premium brand, not a stock collage.

**General rules**
- Format: optimised **JPG** for now (we move to WebP/AVIF in the `next/image` pass). Keep each file under the size budget below.
- All exports are **2× the on-screen size** for retina sharpness.
- No text, logos, or watermarks baked into photos.
- People should look authentic (real students/advisors, candid), not obvious stock poses.
- You must own or license every image (no un-licensed web grabs).

---

## 1. Hero background — **the most important image**
- **File:** `public/images/hero-bg.jpg`
- **Display:** full-screen background, `cover`, anchored to **bottom**.
- **Export:** `2400 × 1600` (landscape, 3:2). Budget ≤ 400 KB.
- **Art direction:** aspirational campus / student-with-world feel. Keep the **centre relatively calm** — white headline + buttons sit centred over it with a dark scrim. Visual interest can live in the lower third (bottom-anchored). Avoid busy clutter in the middle.

## 2. "Why Choose Us" split image
- **Current placeholder:** Unsplash `photo-1702471897388…`
- **Display:** fills the left/right half-panel, full section height, `cover` centred.
- **Export:** `1600 × 2000` (portrait, 4:5). Budget ≤ 350 KB.
- **Art direction:** advisor guiding a student, warm and trustworthy. Eye contact / genuine interaction.

## 3. "Our Services" split image
- **Current placeholder:** Unsplash `photo-1522202176988…`
- **Display:** same half-panel as above (image on the left).
- **Export:** `1600 × 2000` (portrait, 4:5). Budget ≤ 350 KB.
- **Art direction:** counsellor advising a student at a desk / consultation moment. Should pair visually with #2 (same grade, same lighting feel).

## 4. Destination cards — **8 country photos**
- **Display:** portrait cards, `cover`. Recognisable landmark or iconic scene per country.
- **Export each:** `800 × 1000` (portrait, 4:5). Budget ≤ 200 KB each.
- **Files needed (one per country):**
  1. New Zealand
  2. Canada
  3. United Kingdom
  4. United States
  5. Australia
  6. Germany
  7. Netherlands
  8. Sweden
- **Art direction:** bright, iconic, instantly identifiable (skyline / landmark / campus). Consistent mood across all 8 so the carousel looks like a set.

## 5. Article / blog cards — **2 photos**
- **Display:** `16:9` thumbnail at the top of each card, `cover`.
- **Export each:** `1200 × 675` (16:9). Budget ≤ 250 KB each.
- **Files needed:**
  1. **Accommodation Support** — student housing / dorm / moving in.
  2. **Life Abroad** — student daily life / friends / campus social.

## 6. Student testimonial photos — *already supplied (real)*
- **Location:** `public/images/testimonials/*.png` (9 students).
- **Display:** `1:1` square, `cover`.
- **If refreshing:** export `800 × 800` square. Otherwise no action needed.

## 7. Logo — *already supplied*
- **File:** `study-abroad-pvt-ltd-logo.svg` (vector — used in nav + footer). No raster export needed.

---

## Summary table

| # | Slot | Count | Export size | Ratio | Budget |
|---|------|-------|-------------|-------|--------|
| 1 | Hero background | 1 | 2400×1600 | 3:2 | ≤400 KB |
| 2 | Why Choose Us | 1 | 1600×2000 | 4:5 | ≤350 KB |
| 3 | Our Services | 1 | 1600×2000 | 4:5 | ≤350 KB |
| 4 | Destination cards | 8 | 800×1000 | 4:5 | ≤200 KB ea |
| 5 | Article cards | 2 | 1200×675 | 16:9 | ≤250 KB ea |
| 6 | Testimonials | 9 | 800×800 | 1:1 | (have) |
| 7 | Logo | 1 | SVG | — | (have) |

**Total new photos to source: 13** (1 hero + 2 split + 8 countries + 2 articles; testimonials/logo already done).
</content>
</invoke>
