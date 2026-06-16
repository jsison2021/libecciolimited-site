# Libeccio Limited

Marketing and portfolio site for Libeccio Limited, a Louisville, Kentucky real estate company specializing in the acquisition, development, and management of distinctive properties.

## Stack

- **Next.js 16** (App Router) + **React 19** with the React Compiler
- **Tailwind CSS v4** (CSS-first config in `src/app/globals.css`)
- **TypeScript** (strict)
- Fonts: Cormorant Garamond (display) + Inter (body) via `next/font`
- Imagery via `next/image` (remote Unsplash placeholders — see "Content")
- Deployed on **Netlify** (`@netlify/plugin-nextjs`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/
    page.tsx                 Home
    properties/page.tsx      Portfolio listing (filterable)
    properties/[slug]/       Individual property detail (statically generated)
    about/page.tsx
    contact/page.tsx
    not-found.tsx
    globals.css              Design tokens + utilities
    layout.tsx               Fonts, header/footer shell, metadata
  components/
    Header.tsx               Fixed nav (transparent over hero, solid on scroll)
    Footer.tsx
    PropertyCard.tsx
    PortfolioGrid.tsx        Client-side status filtering
    ContactForm.tsx          Client form (no backend yet)
  lib/
    properties.ts            Property data model + content
```

## Content

Properties live in `src/lib/properties.ts`. The `properties` array is **empty by
default** — no placeholder listings. While it is empty, the portfolio and home
page automatically show a "coming soon" state. Add real entries following the
documented shape in that file (each becomes a statically generated detail page).
To serve images from a new host, add its hostname to `images.remotePatterns` in
`next.config.ts`.

Company contact details (email, phone) are intentionally left as **placeholders**
in `src/app/contact/page.tsx` and the footer — replace them with real values when
available. The contact form currently logs submissions to the console and shows a
confirmation state; wire it to an email service or API route before launch.
