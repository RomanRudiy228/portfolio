"use client";

import { nav } from "@/const/nav.const";
import { smoothScrollTo } from "@/utils/smooth-scroll-to.util";

type Props = {
  activeId: string;
  headerHeight: number;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

export function BurgerMenu({ activeId, headerHeight, isOpen, setIsOpen }: Props) {
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-110 p-2 sm:hidden"
        aria-label="Toggle menu"
      >
        <div className="relative h-5 w-5">
          <span
            className={`absolute h-0.5 w-5 bg-current transition ${
              isOpen ? "top-2 rotate-45" : "top-1"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition ${
              isOpen ? "opacity-0" : "top-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition ${
              isOpen ? "top-2 -rotate-45" : "top-3"
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 z-110 w-full border-t border-zinc-200 bg-white sm:hidden dark:border-white/10 dark:bg-black">
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
      )}
    </>
  );
}
