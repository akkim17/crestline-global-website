# Agent Instructions: Next.js Static Site

## Architecture & Framework
* **Framework:** Next.js using the App Router (`/app` directory). 
* **Rendering Constraint:** This is a Static Site Generation (SSG) project. Do NOT create dynamic API routes or use Node.js server actions that require a runtime server.
* **Component Paradigm:** Prefer Server Components (RSCs) by default to keep client bundles small. Only use `"use client"` at the top of a file when hooks (e.g., `useState`, `useEffect`), browser APIs, or event handlers are strictly necessary.

## Data Fetching
* Fetch data at build time using `fetch` with caching or `generateStaticParams` for dynamic routing. 
* Never expose API keys to the browser; only use `NEXT_PUBLIC_` prefixes for variables that must be accessed on the client.

## Tooling & Validation
* **Browser Testing:** Once a component is built, use the `playwright-browser` tool to navigate to the local development server (e.g., `http://localhost:3000`), render the page, and verify the UI layout before completing the task.
* **Build Verification:** Before finalizing a feature, run `npm run build`. Verify that the `out/` directory is generated successfully without server-side rendering errors.