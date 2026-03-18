import type { PortfolioProject } from "@/types/portfolio.types";
import Link from "next/link";
import { Tag } from "@/components/tag";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-zinc-950 dark:text-white">
              {project.name}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.role}</p>
          </div>
          {project.links.length > 0 ? (
            <div className="flex items-center gap-2">
              {project.links.map((l) => (
                <Link
                  key={`${project.name}-${l.href}`}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          {project.summary}
        </p>

        <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          {project.highlights.map((h) => (
            <li key={`${project.name}-${h}`}>{h}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((s) => (
            <Tag key={`${project.name}-${s}`}>{s}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
