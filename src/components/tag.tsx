import type { PropsWithChildren } from "react";

export function Tag({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full bg-transparent px-2 py-0.5 text-base font-medium tracking-wide text-zinc-500 select-none dark:text-zinc-400">
      {children}
    </span>
  );
}
