# Roman Rudiy Portfolio Website

This is the source code for my personal **portfolio website**, built as a modern, responsive, single-page application (SPA) to showcase my projects, skills, and contact information.

---

## 🛠 Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS, including dark mode support and modern UI patterns
- **Icons & UI Components:** Lucide React icons, custom components for cards, tags, and sections
- **Deployment:** Vercel

---

## 🔍 Architecture & Features

- **Single-Page Application (SPA):**  
  Smooth scroll navigation to sections (`Home`, `Skills`, `Projects`, `Contact`) using `IntersectionObserver` to track active sections and highlight the current menu item.
- **Sticky Header:**  
  Header stays visible while scrolling, with blur and semi-transparent background for a modern “glassmorphism” effect.
- **Responsive Layout:**  
  Mobile-first design with flexible grids for skills and projects, ensuring readability on all devices.
- **Project Cards:**  
  Interactive cards with hover effects, transparent backgrounds, and stack/technologies displayed using reusable components.
- **Smooth Scrolling:**  
  Custom scroll behavior ensures that section headings are visible below the sticky header when navigating from the menu.
- **Dark Mode:**  
  Full support for light/dark themes using Tailwind’s `dark:` variants.

---

## 💡 Development Approach

1. **Component-based architecture:**
   - Reusable components for sections, cards, tags, and navigation.
   - Minimal duplication and easy to maintain/update.

2. **Modern UI effects:**
   - Glassmorphism overlays, hover animations, subtle shadows and scale effects on interactive elements.
   - Smooth transitions for hover states and active navigation highlighting.

3. **State management:**
   - React hooks (`useState`, `useEffect`, `useMemo`) for handling active section tracking.
   - IntersectionObserver API for efficient detection of the currently visible section.

4. **Accessibility & Usability:**
   - Semantic HTML elements (`<header>`, `<nav>`, `<section>`, `<ul>`).
   - Keyboard-friendly navigation links and focus styles.

5. **Performance:**
   - Lazy-loaded images and assets where necessary.
   - Minimalistic design to keep site lightweight and fast.

---

## ⚡ Highlights

- Fully interactive SPA experience with smooth section scrolling
- Dynamic highlighting of active sections in the navigation menu
- Reusable, modular React components for cards, tags, and sections
- Dark mode with high contrast for readability
- Responsive design across all devices

---

## 📦 Deployment

The site is deployed on **Vercel** for fast, globally distributed performance. Any changes pushed to the repository are automatically reflected in the live site.
