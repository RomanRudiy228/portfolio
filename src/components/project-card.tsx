import type { PortfolioProject } from "@/types/portfolio.types";
import Link from "next/link";
import { Tag } from "@/components/tag";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const href = project.links?.[0]?.href || "#";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-zinc-200 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-2xl dark:border-white/10 dark:hover:border-white/30"
    >
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-base font-bold text-zinc-950 transition-colors group-hover:text-white dark:text-white dark:group-hover:text-white">
            {project.name}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.role}</p>
        </div>

        <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          {project.summary}
        </p>

        <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          {project.highlights.map((h) => (
            <li key={`${project.name}-${h}`}>{h}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack.map((s) => (
            <Tag key={`${project.name}-${s}`}>{s}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
