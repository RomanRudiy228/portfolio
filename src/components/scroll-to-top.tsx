"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        })
      }
      className="rder-zinc-200 fixed right-5 bottom-5 z-50 cursor-pointer rounded-full border bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm backdrop-blur transition hover:scale-105 hover:bg-zinc-100 dark:border-white/55 dark:bg-white/10 dark:text-white dark:hover:bg-white/10"
    >
      <ArrowUp className="h-6 w-4" />
    </button>
  );
}
