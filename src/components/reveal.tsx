"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";

type Props = PropsWithChildren<{
  className?: string;
  withScrollMargin?: boolean;
  reset?: boolean;
}>;

export function Reveal({
  children,
  className = "",
  withScrollMargin,
  reset = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (reset) {
            setIsVisible(false);
          }
        }
      },
      { threshold: 0.1 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reset]);

  return (
    <div
      ref={ref}
      className={`${withScrollMargin ? "scroll-mt-24" : ""} ${className} transform transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      {children}
    </div>
  );
}
