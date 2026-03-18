"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { useEffect, useMemo, useState } from "react";
import { nav } from "@/const/nav.const";

export function SiteHeader() {
  const ids = useMemo(() => nav.map((n) => n.href.slice(1)), []);
  const [activeId, setActiveId] = useState<string>("top");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        const top = visible[0]?.target as HTMLElement | undefined;
        if (top?.id) setActiveId(top.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-10% 0px -70% 0px" },
    );

    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, [ids]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/50">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer text-sm font-semibold tracking-tight text-zinc-950 dark:text-white"
          >
            Roman Rudiy
          </button>
          <nav className="flex items-center gap-1 font-semibold">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={`/${item.href}`}
                className={[
                  "rounded-full px-3 py-2 text-sm transition",
                  item.href.slice(1) === activeId
                    ? "bg-zinc-950 text-white dark:bg-white dark:text-black"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
