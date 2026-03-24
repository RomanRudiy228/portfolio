import type { PortfolioProject } from "@/types/portfolio.types";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const href = project.links?.[0]?.href || "#";

  return (
    <div className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-black/50 dark:hover:border-white/20">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          loading="eager"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto scale-90 opacity-0 duration-100 group-hover:scale-100 group-hover:opacity-100"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 shadow-lg backdrop-blur dark:border-white/10 dark:bg-black/50">
              <ExternalLink className="h-5 w-5 text-black dark:text-white" />
            </div>
          </Link>
        </div>

        {project.type && (
          <span className="absolute top-3 right-3 rounded-full border border-emerald-600/30 bg-emerald-800/10 px-2.5 py-0.5 text-[12px] font-medium text-emerald-600 backdrop-blur">
            {project.type}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <span>{project.year}</span>
          <span>{project.role}</span>
        </div>

        <h3 className="mt-2 text-base font-bold text-zinc-900 dark:text-white">
          {project.name}
        </h3>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.summary}</p>

        <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          {project.highlights.slice(0, 2).map((h) => (
            <li key={`${project.name}-${h}`}>{h}</li>
          ))}
        </ul>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              className="rounded-full border border-zinc-200 px-2.5 py-[3px] text-sm text-zinc-800 dark:border-white/10 dark:text-zinc-200"
              key={`${project.name}-${s}`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
