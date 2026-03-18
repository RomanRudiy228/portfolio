import type { PropsWithChildren } from "react";

export function Tag({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs font-medium tracking-tight text-zinc-700 select-none dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
      {children}
    </span>
  );
}
