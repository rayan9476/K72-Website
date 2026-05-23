# K72 Agency — Creative Portfolio

A high-performance creative agency portfolio built with React, featuring smooth scroll animations, scroll-triggered effects, and a custom fake scrollbar system.

🔗 **Live:** https://k72-agency-6qle8z7zq-r32284947-5488s-projects.vercel.app/

---

## Tech Stack

| Layer         | Technology                                   |
| ------------- | -------------------------------------------- |
| Framework     | React 18                                     |
| Bundler       | Vite                                         |
| Routing       | React Router v6                              |
| Animation     | GSAP + ScrollTrigger                         |
| Smooth Scroll | Lenis                                        |
| Styling       | Tailwind CSS                                 |
| Slider        | Swiper.js                                    |
| Compiler      | React Compiler (babel-plugin-react-compiler) |
| Deployment    | Vercel                                       |
| CI/CD         | GitHub Actions                               |

---

## Features

- **Scroll animations** — GSAP ScrollTrigger-driven card reveals and section pins
- **Smooth scrolling** — Lenis with custom RAF loop and keyboard support
- **Custom scrollbar** — Fake scrollbar synced to Lenis scroll position
- **Responsive** — Mobile-first, adapts across all breakpoints
- **Performance** — GPU-composited animations, lazy image loading, passive event listeners
- **Blog** — Filterable blog with category system
- **Multi-language routing** — `/en/` prefixed routes
- **Video sync** — Dual video playback with drift correction

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Project Structure

```
src/
├── components/       # Reusable UI components
├── common/           # Shared utilities and constants
├── pages/            # Route-level page components
├── routes/           # Route definitions and configuration
├── hooks/            # Custom React hooks
├── context/          # React context providers
├── styles/           # Global styles and Tailwind config
└── assets/           # Static assets
```

---

## Performance Highlights

- Animations use `transform` and `opacity` only — zero layout reflow
- `will-change` applied selectively, not globally
- Lenis scroll listener decoupled from React state to prevent re-renders
- Images delivered via **ImageKit CDN** with on-the-fly WebP conversion, resizing, and blur placeholders
- Videos streamed via **Cloudinary CDN** with adaptive delivery; static assets also served through ImageKit
- Responsive `srcSet` with mobile/desktop image variants
- Above-fold images marked `fetchpriority="high"`
- Route-level code splitting with `React.lazy` + `Suspense` — only loads what's needed
- **React Compiler** (`babel-plugin-react-compiler`) handles automatic memoization — no manual `memo`/`useMemo`/`useCallback`
- CSS minified with **cssnano** at build time — removes whitespace, merges rules, and deduplicates declarations
