"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function smoothScrollToTop(duration = 500) {
  const start = window.scrollY;
  const startTime = performance.now();

  function scrollStep(timestamp: number) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, start * (1 - ease));
    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
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
      onClick={() => smoothScrollToTop(600)}
      className="fixed right-5 bottom-5 z-50 cursor-pointer rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:scale-105 hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
    >
      <ArrowUp className="h-6 w-4" />
    </button>
  );
}
