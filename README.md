# Crestline Global FZC LLC — Official Website

This repository contains the source code for the official website of **Crestline Global FZC LLC**, a UAE-headquartered international commodity trading and trade services enterprise.

---

## 🚀 Tech Stack & Architecture

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
* **Library:** [React 19](https://react.dev/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Email Service:** [Resend API](https://resend.com/) (`/api/contact` API Route)
* **Styling:** Custom CSS Design System with dark glassmorphism aesthetic (`app/globals.css`)
* **Hosting:** Vercel — pages are prerendered statically; `/api/contact` runs as a Serverless Function

---

## 📁 Directory Structure

```text
/
├── app/                        # Next.js App Router pages & API routes
│   ├── about/                  # Corporate Overview page
│   ├── agro/                   # Agro Solutions division page
│   ├── api/                    # Serverless API routes
│   │   └── contact/            # Commercial intake & email handler (Resend integration)
│   ├── chemicals/              # Mining Chemicals division page
│   ├── contact/                # Procurement Desk & Contact form page
│   ├── minerals-copper/        # Minerals & Copper Cathodes division page
│   ├── trade-services/         # Trade & Logistics division page
│   ├── globals.css             # Design tokens, CSS variables, & responsive breakpoints
│   ├── layout.js               # Root layout, fonts (Barlow, Bebas Neue), Navbar & Footer
│   └── page.js                 # Home page
├── lib/
│   └── site.js                 # Company contact details & canonical domain (single source of truth)
├── components/                 # Reusable UI components
│   ├── ContactForm.js          # Interactive procurement intake form
│   ├── Footer.js               # Global footer component
│   ├── Logo.js                 # Crestline brand logo component
│   ├── Navbar.js               # Glassmorphic header with mobile drawer menu
│   ├── ScrollReveal.js         # Smooth scroll animations
│   └── TextMarquee.js          # Continuous scrolling ticker marquee
├── public/                     # High-resolution media assets & favicon
├── .env.example                # Environment variables template
├── .gitignore                  # Git exclusion rules
├── next.config.js              # Next.js configuration
└── package.json                # Project dependencies & scripts
```

---

## 🌐 Mailing Route & Resend Email Integration

### How It Works
The procurement contact form at `/contact` connects to the Next.js API Route `/api/contact/route.js`.
It uses **[Resend](https://resend.com)** (`resend` NPM package) to send structured procurement inquiry emails.

### 🔑 Configuring Resend for Live Production

1. Create a free or paid account at **[Resend.com](https://resend.com)**.
2. Obtain your **API Key** from the Resend Dashboard.
3. Add the API Key to `.env.local` (or environment variable settings on your host):
   ```env
   RESEND_API_KEY=re_123456789...
   ```
4. **Domain Verification (Important for Production):**
   - On the Resend free sandbox tier, emails are sent from `onboarding@resend.dev` to your registered account email.
   - For live deployment with your company email, navigate to **Resend Dashboard -> Domains**, add your domain (`crestlineglobalfzc.com`) and update DNS records (DKIM/SPF). The sender is set in `app/api/contact/route.js` (`from: 'Crestline Inquiries <inbound@crestlineglobalfzc.com>'`); the recipient is `site.email` in `lib/site.js`.
   - If Resend rejects a send (bad key, unverified domain), the form shows an error instead of a false success — check the Vercel function logs.

*Note: If `RESEND_API_KEY` is omitted during local development, the API route runs in **simulation mode**, logging the inquiry to the console and returning a success state without crashing.*

---

## 🛠️ Local Development & Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Copy `.env.example` to `.env.local` and add your keys:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Code Quality & Linting
```bash
npm run lint
```

### 5. Production Build
```bash
npm run build
```

### 6. Preview Production Build
```bash
npm run start
```
Serves the production build at [http://localhost:3000](http://localhost:3000), including the `/api/contact` route.

---

## 🚀 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub / GitLab.
2. Import the project into **Vercel**.
3. Under **Project Settings -> Environment Variables**, add:
   - Key: `RESEND_API_KEY`
   - Value: `your_live_resend_api_key`
4. Click **Deploy**. Vercel will automatically build the static pages and host `/api/contact` as a Serverless Function.

---

## ✏️ Editing Content

* **Contact details** (email, phone, LinkedIn, address) and the canonical domain live in `lib/site.js`. Phone/WhatsApp and LinkedIn are hidden on the site while their value is `null`.
* **Page copy** is written directly in each `app/<page>/page.js` file.
* **Images** in `public/` are served as-is (image optimization is disabled), so export them web-sized — WebP, roughly 1200–1920px wide for banners and 800px for cards.

---

## 📜 Legal & Corporate Information

* **Entity:** Crestline Global FZC LLC
* **Location:** Ajman Free Zone, Ajman, United Arab Emirates
* **Contact:** info@crestlineglobalfzc.com
