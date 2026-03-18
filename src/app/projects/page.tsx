import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { portfolio } from "@/const/portfolio.const";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Projects — Roman Rudiy",
  description: "Selected commercial projects and production-focused work.",
};

export default function ProjectsPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <Reveal withScrollMargin>
          <header className="max-w-2xl">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Projects
            </h1>
          </header>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4">
          {portfolio.projects.map((p) => (
            <Reveal key={p.name}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </main>
  );
}
