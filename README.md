# Portfolio — jzmarquez.com

My personal CV and portfolio site, live at **[jzmarquez.com](https://jzmarquez.com/)**. It presents my work experience, the enterprise sites I build at 1xINTERNET, and my game and AR/VR projects, in English and Spanish.

![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

## Features

- **Bilingual (EN/ES)** with a language toggle and a translation layer in `src/i18n/`.
- **Light and dark themes** through a theme context.
- **Sections as real routes** (CV, Webs, Games, AR/VR) with React Router, so each one has its own URL, title and meta description.
- **SEO**: per-page metadata, Open Graph image, sitemap and robots.txt.
- **Performance**: lazy-loaded pages, responsive WebP images in several sizes, image preloading and an LCP monitor hook.
- **Accessibility**: ARIA labels and keyboard-navigable tabs.
- **Downloadable CV** in PDF, in both languages.
- **Error boundary** so a failing section doesn't take the whole page down.

## Tech stack

React 18 · Vite · Material UI · Tailwind CSS · React Router · ESLint + Prettier · Netlify

## Getting started

Requires Node.js 22 (see `.nvmrc`).

```bash
npm install
npm run dev       # development server
npm run build     # production build
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## Project structure

```
src/
├── components/   # Reusable UI (banner, footer, toggles, responsive images…)
├── pages/        # CV, Webs, Games, AR/VR
├── i18n/         # Language context and EN/ES translations
├── contexts/     # Theme context
├── hooks/        # Image preloading, LCP monitoring
└── config/       # Site and contact configuration
```

## Deployment

Netlify builds and publishes the site on every push to `main`. `public/_redirects` sends unknown routes to `index.html` so client-side routing works.

## Contact

[jzmarquez.com](https://jzmarquez.com/) · [LinkedIn](https://www.linkedin.com/in/jes%C3%BAs-m%C3%A1rquez-delgado-1334531b9/) · jesusmarquezdelgado@gmail.com
