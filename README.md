# Signature Sites

> **Strategic web design for businesses that take growth seriously.**

Signature Sites is the marketing website for a web design studio that builds landing pages, business websites, and redesigns. It's a single-page site built with **React 19**, **Vite**, and **Tailwind CSS v4**. The design is clean and editorial, with large type, scroll-triggered animations, and a fully responsive layout.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Page Sections](#page-sections)
- [Design System](#design-system)
- [Custom Hooks](#custom-hooks)
- [Customization](#customization)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [License](#license)

---

## Features

- **Editorial design:** large display type, outlined text, and a monochrome palette.
- **Scroll-triggered animations:** sections fade in and slide up once, as they enter the viewport, using the `IntersectionObserver` API.
- **Responsive layout:** mobile-first layouts built on Tailwind's responsive grid.
- **Fast:** Vite dev server with HMR, plus an optimized production build.
- **Built from components:** each page section is its own React component, so sections are easy to reorder, edit, or reuse.
- **PWA-ready assets:** a full favicon set, Apple touch icon, and web app manifest.
- **Linting:** ESLint with React Hooks and React Refresh rules.

---

## Tech Stack

| Category       | Technology                                                                 |
| -------------- | -------------------------------------------------------------------------- |
| UI library     | [React 19](https://react.dev)                                              |
| Build tool     | [Vite 8](https://vite.dev) + [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) |
| Styling        | [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`          |
| Fonts          | [Inter](https://fonts.google.com/specimen/Inter) & [Manrope](https://fonts.google.com/specimen/Manrope) (Google Fonts) |
| Linting        | [ESLint 10](https://eslint.org) (flat config)                              |

---

## Getting Started

### Prerequisites

- **Node.js** 20.19+ or 22.12+ (required by Vite 8)
- **npm** 10+

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/syedmusab31/Signature-Sites.git
   ```

2. Go into the project folder:

   ```bash
   cd Signature-Sites
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

The site will be available at **http://localhost:5173**.

---

## Available Scripts

| Command           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Starts the Vite dev server with hot module replacement |
| `npm run build`   | Builds an optimized production bundle into `dist/`     |
| `npm run preview` | Serves the production build locally for testing        |
| `npm run lint`    | Runs ESLint across the project                         |

---

## Project Structure

```
Signature-Sites/
├── public/                  # Static assets served as-is (favicons, manifest)
├── src/
│   ├── assets/              # Images bundled by Vite (e.g. hero.png)
│   ├── components/          # One component per page section
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustBar.jsx
│   │   ├── FeaturedWork.jsx
│   │   ├── Services.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/               # Reusable scroll and animation hooks
│   │   ├── useInView.js
│   │   ├── useParallax.js
│   │   └── useStickyStack.js
│   ├── App.jsx              # Puts the page sections together
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles, fonts, and Tailwind import
├── index.html               # HTML template and meta tags
├── tailwind.config.js       # Design tokens (colors, fonts, animations)
├── vite.config.js           # Vite + React + Tailwind plugins
├── eslint.config.js         # ESLint flat config
└── package.json
```

---

## Page Sections

The page is assembled in `src/App.jsx` in this order:

| #  | Section          | Purpose                                                                |
| -- | ---------------- | ---------------------------------------------------------------------- |
| 1  | **Navbar**       | Main navigation with anchor links to each section                      |
| 2  | **Hero**         | Headline, key stats, and the main call to action                        |
| 3  | **TrustBar**     | Strip that builds credibility                                           |
| 4  | **FeaturedWork** | Showcase of selected client projects                                   |
| 5  | **Services**     | The three core offerings: Landing Pages, Business Websites, Redesigns |
| 6  | **WhyUs**        | Why to choose the studio and its design philosophy                     |
| 7  | **Testimonials** | Client feedback                                                        |
| 8  | **Pricing**      | Starting prices for each service tier                                  |
| 9  | **Contact**      | Project inquiry form                                                   |
| 10 | **Footer**       | Brand line, links, and copyright                                       |

---

## Design System

Design tokens are defined in `tailwind.config.js` and loaded into Tailwind v4 with the `@config` directive in `src/index.css`.

**Colors**

| Token        | Value     | Usage                    |
| ------------ | --------- | ------------------------ |
| `background` | `#FAFAFA` | Page background          |
| `foreground` | `#0A0A0A` | Primary text             |
| `muted`      | `#71717A` | Secondary text           |
| `border`     | `#E4E4E7` | Dividers and outlines    |

**Typography**

- `font-sans`: **Inter**, for body copy
- `font-display`: **Manrope**, for headings and display type

**Utilities**

- `animate-fade-in-up`: fades in and moves up by 20px over 0.8s
- `delay-100` to `delay-400`: staggered animation delays
- `text-stroke`: outlined text effect used in the hero headline

---

## Custom Hooks

| Hook                           | Description                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| `useInView(options?)`          | Returns `[ref, isInView]`. Becomes `true` once, the first time the element enters the viewport. |
| `useParallax(speed = -0.1)`    | Returns a ref that moves its element vertically as the page scrolls, using `requestAnimationFrame`. |
| `useStickyStack(containerRef)` | Returns how far the page has scrolled through a container, from `0` to `1`. Used for sticky or stacked scroll effects. |

**Example:**

```jsx
import { useInView } from '../hooks/useInView';

export default function Section() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className={isInView ? 'animate-fade-in-up' : 'opacity-0'}>
      …
    </section>
  );
}
```

---

## Customization

- **Content:** each section's copy lives directly in its component under `src/components/`. Pricing tiers and services are defined as arrays at the top of `Pricing.jsx` and `Services.jsx`.
- **Brand colors and fonts:** change the tokens in `tailwind.config.js`, and the Google Fonts import in `src/index.css`.
- **Section order:** reorder or remove components in `src/App.jsx`.
- **SEO and metadata:** change the `<title>`, meta description, and theme color in `index.html`.

---

## Deployment

`npm run build` produces a static site in `dist/`, which can be hosted on any static hosting provider:

- **Vercel / Netlify:** import the repository. The defaults are detected automatically (build command `npm run build`, output folder `dist`).
- **GitHub Pages:** set `base` in `vite.config.js` to `'/Signature-Sites/'`, then publish the `dist/` folder.
- **Any web server:** upload the contents of `dist/`.

---

## Roadmap

- [ ] Connect the contact form to a backend or form service (it currently only prevents the default submit)
- [ ] Add SEO improvements (Open Graph tags, sitemap, structured data)
- [ ] Add an accessibility pass and `prefers-reduced-motion` support
- [ ] Use the `useParallax` and `useStickyStack` hooks in page sections

---

## License

© 2025 Signature Sites. All rights reserved.

This is a private, proprietary project. No license is granted to use, copy, or distribute it without permission.
