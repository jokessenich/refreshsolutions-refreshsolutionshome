# Clear Web Collective

A modern, minimal website for Clear Web Collective — a website rebuild and modernization service.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- No external paid dependencies

---

## Getting Started

### Prerequisites

- Node.js 18+ installed ([download](https://nodejs.org))
- npm (comes with Node.js)

### Install & Run

```bash
cd clear-web-collective
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deploy to Vercel

### Option A: Git (recommended)

1. Push this folder to a GitHub/GitLab/Bitbucket repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Connect your custom domain in the Vercel dashboard

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Done.

---

## Brand Design System

### Color Palette

| Role         | Hex       | Usage                         |
| ------------ | --------- | ----------------------------- |
| Charcoal     | `#1a1a1a` | Headlines, primary text, buttons |
| Dark Gray    | `#2d2d2d` | Dark section backgrounds      |
| Medium Gray  | `#6b6b6b` | Body text                     |
| Soft Gray    | `#9a9a9a` | Captions, muted text          |
| Light Gray   | `#e8e6e3` | Borders, dividers             |
| Off White    | `#f7f6f4` | Tinted section backgrounds    |
| White        | `#ffffff` | Primary background            |
| Warm Accent  | `#c8a87c` | Accent dots, highlights       |

### Typography

- **Display / Headlines:** DM Serif Display — warm, editorial serif
- **Body / UI:** DM Sans — clean geometric sans-serif
- Both are free Google Fonts with excellent language support

### Design Principles

- Lots of white space
- Neutral palette with warm accent
- No gradients, no flashy effects
- Subtle fade-in scroll animations
- Grid-based card layouts with 1px dividers
- Professional and approachable — not "agency" feeling

---

## Project Structure

```
clear-web-collective/
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind + custom styles
│   │   ├── layout.tsx         # Root layout with fonts & meta
│   │   └── page.tsx           # Homepage (composes all sections)
│   └── components/
│       ├── Nav.tsx            # Sticky nav + mobile menu
│       ├── Hero.tsx           # Hero with CTAs
│       ├── Problem.tsx        # Pain points section
│       ├── Services.tsx       # What We Do cards
│       ├── Process.tsx        # 4-step process
│       ├── Pricing.tsx        # 3-tier pricing
│       ├── Maintenance.tsx    # Monthly plans
│       ├── FAQ.tsx            # Accordion FAQ
│       ├── FinalCTA.tsx       # Bottom CTA
│       ├── Footer.tsx         # Footer
│       └── useReveal.ts       # Scroll animation hook
├── tailwind.config.ts         # Custom design tokens
├── package.json
├── tsconfig.json
└── README.md
```
