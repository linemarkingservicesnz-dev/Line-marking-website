---
name: PageSpeed / Core Web Vitals optimization
description: Hard-won lessons optimizing this React+Vite SPA's mobile PageSpeed score — what helped, what backfired.
---

# PageSpeed optimization lessons (React + Vite SPA landing page)

## Route-level code splitting hurts the landing page's LCP and CLS
- `React.lazy()` + `<Suspense fallback={null}>` on the **home/landing route** is a net negative:
  - Adds an extra JS chunk round-trip before the hero (the LCP element) can paint → LCP does not improve even with an image preload.
  - With `fallback={null}`, the app shell renders Nav + Footer touching (empty main), then the page content loads and shoves the Footer down thousands of px → large CLS (measured 0.405).
- **Fix that worked:** eager-import the Home page (`import Home from "@/pages/Home"`), keep the other ~14 pages lazy. And give Suspense a height-reserving fallback: `<Suspense fallback={<div className="min-h-screen" />}>` so chunk loads on other routes don't jump the footer.
- **Why:** the landing page is the most-measured/most-visited; trading a slightly larger initial bundle for a faster hero paint + no shell-flash is worth it. Other pages stay lazy to keep initial JS small.

## Hero LCP image
- Vite hashes asset filenames, so you can't preload a bundled import. Copy the hero to `client/public/images/` (stable URL), add `<link rel="preload" as="image" href="/images/hero-carpark.webp" type="image/webp" fetchpriority="high">` to `index.html`, and reference the public URL in the component (`const heroImage = "/images/hero-carpark.webp"`).
- The preload only helps once the component that renders the `<img>` is on the critical path — if Home is lazy, the image can't paint until the chunk executes, defeating the preload. Pair the preload with eager-loading Home.

## GTM / third-party JS and TBT
- Deferring GTM until first interaction OR a timeout dropped TBT 470ms → 0ms and Speed Index 6.8s → 3.8s.
- The timeout must be **longer than PageSpeed's measurement window (~5s)** — set to 10s. A 3.5s timer fired during the test and re-added the 500KB+ of third-party JS to the trace.

## Server-side delivery wins (biggest remaining levers after image/JS work)
- The Express production server had **no gzip** — PageSpeed flagged "No compression applied" and a render-blocking ~75KB CSS taking ~1.3s. Adding `app.use(compression())` as the first middleware in `server/index.ts` (ahead of static serving) compresses CSS/JS and is the single highest-impact fix once the obvious image work is done.
- Static cache TTLs matter for the "efficient cache lifetimes" audit: Vite's hashed `/assets` get `1y, immutable`; non-hashed `/images` were defaulting to `1h` → bump to `30d` via a dedicated `express.static` mount placed BEFORE the generic one. Trade-off: non-hashed image URLs can serve stale after edits, so version the filename if an image changes.

## Gallery/below-fold images flagged by "Improve image delivery"
- Lazy images don't hurt LCP but still count toward total bytes / "improve image delivery". The recent-project warehouse webps were 3000–4000px wide but display ~380px → resizing to 800px cut ~1.7MB to ~160KB. Resize source files in place so the existing imports keep working (Vite re-hashes content).

## Reserve space to avoid CLS
- Below-fold images all use fixed Tailwind heights (`h-48`, `h-52`, `h-56`) so `loading="lazy"` on them does not cause shift. Keep width/height attrs on them anyway.
