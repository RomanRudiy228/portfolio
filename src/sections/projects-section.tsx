import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { portfolio } from "@/const/portfolio.const";
import { FolderGit2 } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-12 scroll-mt-20 sm:mt-16">
      <Reveal withScrollMargin>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <FolderGit2 className="h-5 w-5" aria-hidden="true" />
              Projects
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Commercial work and production-oriented contributions.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {portfolio.projects.map((p) => (
            <Reveal key={p.name}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
