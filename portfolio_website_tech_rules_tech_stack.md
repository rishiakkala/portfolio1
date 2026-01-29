# Tech Rules & Tech Stack Definition

## 1. Purpose
This document defines the technical rules, tools, and frameworks to be used in building the portfolio website. The goal is to ensure performance, maintainability, and scalability.

---

## 2. Frontend Stack
- **Framework:** React (or Next.js for SEO and routing)
- **Styling:** Tailwind CSS or CSS Modules
- **Animation:** HTML Canvas / SVG for hero animations
- **State Management:** Minimal local state (React hooks)

---

## 3. Animation & Graphics Rules
- Use a single `<canvas>` element for background animation
- No DOM-heavy animation libraries
- Frame rate capped at 30–45 FPS
- Pause animation when tab is inactive
- Disable animations if `prefers-reduced-motion` is enabled

---

## 4. Performance Rules
- Lazy-load non-critical sections
- Optimize images (SVG / WebP)
- Avoid unnecessary re-renders
- Keep bundle size minimal

---

## 5. Accessibility Rules
- Semantic HTML elements
- Keyboard navigation support
- Proper contrast ratios
- Screen-reader friendly structure

---

## 6. Deployment & Hosting
- **Hosting:** Vercel / Netlify
- **Version Control:** Git + GitHub
- **CI/CD:** Automated builds and deploys

---

## 7. Coding Guidelines
- Clean, readable, well-commented code
- Modular component structure
- Reusable UI components
- Consistent naming conventions

---

## 8. Browser & Device Support
- Modern evergreen browsers
- Fully responsive across mobile, tablet, and desktop

---

## 9. Future Scalability
- Easy addition of new sections (projects, blogs)
- Ability to integrate analytics or CMS later
