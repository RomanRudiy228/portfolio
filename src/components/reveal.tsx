"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = PropsWithChildren<{
  className?: string;
  withScrollMargin?: boolean;
}>;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export function Reveal({ children, className, withScrollMargin }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const baseClass = useMemo(() => {
    const scrollMargin = withScrollMargin ? "scroll-mt-24" : "";
    return [scrollMargin, className].filter(Boolean).join(" ");
  }, [className, withScrollMargin]);

  useEffect(() => {
    if (prefersReducedMotion()) {
      queueMicrotask(() => setIsVisible(true));
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { root: null, threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        baseClass,
        "reveal-motion transition duration-700 will-change-transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
