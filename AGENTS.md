# Agent Instructions: Next.js Site on Vercel

## Architecture & Framework
* **Framework:** Next.js using the App Router (`/app` directory), deployed on Vercel.
* **Rendering:** All pages are statically prerendered. The only server code is the `/api/contact` Route Handler (Resend email), which Vercel runs as a Serverless Function. Do not add other server-only features (server actions, dynamic routes, middleware) without a clear need.
* **Component Paradigm:** Prefer Server Components (RSCs) by default to keep client bundles small. Only use `"use client"` at the top of a file when hooks (e.g., `useState`, `useEffect`), browser APIs, or event handlers are strictly necessary.

## Content & Config
* Company contact details and the canonical domain live in `lib/site.js` — import from there instead of hard-coding emails, phone numbers or URLs.
* Styling is a single hand-written stylesheet, `app/globals.css`. Mobile overrides are consolidated in the "MOBILE LAYOUT PASS" block at the end of the file.
* `next.config.js` disables image optimization, so images in `public/` must already be web-sized (WebP preferred).

## Secrets
* Never expose API keys to the browser; only use `NEXT_PUBLIC_` prefixes for variables that must be accessed on the client. `RESEND_API_KEY` is server-only.

## Tooling & Validation
* **Browser Testing:** Once a component is built, render it on the local dev server (`http://localhost:3000`) at desktop (1440px) and mobile (375px) widths and verify the layout before completing the task.
* **Build Verification:** Before finalizing a feature, run `npm run lint` and `npm run build` and confirm both succeed.
