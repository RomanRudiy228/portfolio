"use client";

import { Container } from "@/components/container";
import { useEffect, useMemo, useState } from "react";
import { nav } from "@/const/nav.const";
import { smoothScrollTo } from "@/utils/smooth-scroll-to.util";

export function SiteHeader() {
  const ids = useMemo(() => nav.map((n) => n.href.replace("#", "")), []);
  const [activeId, setActiveId] = useState<string>("top");
  const headerHeight = 56;

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const handleScroll = () => {
      let closestSection = sections[0];
      let minDistance = Infinity;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const distance = Math.abs(rect.top - headerHeight);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = sec;
        }
      });

      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollBottom >= docHeight - 1) {
        setActiveId(sections[sections.length - 1].id);
      } else {
        setActiveId(closestSection.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ids]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/50">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <button
            onClick={() => smoothScrollTo(0)}
            className="cursor-pointer text-sm font-semibold tracking-tight text-zinc-950 dark:text-white"
          >
            Roman Rudiy
          </button>

          <nav className="flex items-center gap-1 font-semibold">
            {nav.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(id);
                    if (!el) return;
                    const targetY =
                      el.getBoundingClientRect().top + window.scrollY - headerHeight;
                    smoothScrollTo(targetY);
                  }}
                  className={[
                    "rounded-full px-3 py-2 text-sm transition",
                    id === activeId
                      ? "bg-zinc-950 text-white dark:bg-white dark:text-black"
                      : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
