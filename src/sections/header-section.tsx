"use client";

import { Container } from "@/components/container";
import { useMemo, useState } from "react";
import { nav } from "@/const/nav.const";
import { smoothScrollTo } from "@/utils/smooth-scroll-to.util";
import { BurgerMenu } from "@/components/burger-menu";
import { useActiveSection } from "../hooks/use-active-section";

export function SiteHeader() {
  const ids = useMemo(() => nav.map((n) => n.href.replace("#", "")), []);
  const headerHeight = 64;

  const activeId = useActiveSection(ids, headerHeight);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-120 border-b border-zinc-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/50">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <button
              onClick={() => smoothScrollTo(0)}
              className="cursor-pointer text-sm font-semibold tracking-tight text-zinc-950 dark:text-white"
            >
              Roman Rudiy
            </button>

            <nav className="hidden items-center gap-1 font-semibold sm:flex">
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

            <BurgerMenu
              activeId={activeId}
              headerHeight={headerHeight}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </Container>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-100 bg-black/30 backdrop-blur-xl backdrop-saturate-150 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && (
        <div className="fixed top-14 left-0 z-110 w-full sm:hidden">
          <div className="border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-black">
            <nav className="flex flex-col gap-2 p-4">
              {nav.map((item) => {
                const id = item.href.replace("#", "");
                return (
                  <button
                    key={item.href}
                    onClick={() => {
                      const el = document.getElementById(id);
                      if (!el) return;
                      const targetY =
                        el.getBoundingClientRect().top + window.scrollY - headerHeight;
                      smoothScrollTo(targetY);
                      setIsOpen(false);
                    }}
                    className={[
                      "rounded-lg px-3 py-2 text-left text-sm transition",
                      id === activeId
                        ? "bg-zinc-950 text-white dark:bg-white dark:text-black"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/10",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
