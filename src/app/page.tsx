import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { Tag } from "@/components/tag";
import { portfolio } from "@/const/portfolio.const";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <Reveal withScrollMargin className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {portfolio.location}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {portfolio.name}
            </h1>
            <p className="text-base text-pretty text-zinc-700 sm:text-lg dark:text-zinc-300">
              {portfolio.title}
            </p>
          </div>

          <p className="max-w-2xl text-base leading-7 text-pretty text-zinc-700 dark:text-zinc-300">
            {portfolio.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            {portfolio.contacts.githubUrl ? (
              <Link
                className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                href={portfolio.contacts.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
            ) : null}
            {portfolio.contacts.linkedinUrl ? (
              <Link
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                href={portfolio.contacts.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Link>
            ) : null}
            <Link
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </Reveal>

        <Reveal withScrollMargin className="mt-12 sm:mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Projects</h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Commercial work and production-oriented contributions.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            >
              View all →
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4">
            {portfolio.projects.slice(0, 2).map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </Reveal>

        <Reveal withScrollMargin className="mt-12 sm:mt-16">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold">Frontend</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {portfolio.skills.frontend.map((s) => (
                  <Tag key={`fe-${s}`}>{s}</Tag>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold">Backend</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {portfolio.skills.backend.map((s) => (
                  <Tag key={`be-${s}`}>{s}</Tag>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold">Database</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {portfolio.skills.database.map((s) => (
                  <Tag key={`db-${s}`}>{s}</Tag>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold">Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {portfolio.skills.tools.map((s) => (
                  <Tag key={`tools-${s}`}>{s}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal withScrollMargin className="mt-12 sm:mt-16">
          <h2 className="text-lg font-semibold">About</h2>
          <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              Fullstack developer with commercial experience in international teams.
              Focused on clean, maintainable code, scalable architecture, REST APIs,
              deployments, and CI/CD workflows.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {portfolio.interests.map((i) => (
                <Tag key={`interest-${i}`}>{i}</Tag>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal withScrollMargin className="mt-12 sm:mt-16">
          <h2 className="text-lg font-semibold">Contact</h2>
          <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div>
                <p className="text-zinc-500 dark:text-zinc-400">Email</p>
                <a
                  className="font-medium text-zinc-900 hover:underline dark:text-white"
                  href={`mailto:${portfolio.contacts.email}`}
                >
                  {portfolio.contacts.email}
                </a>
              </div>
              <div>
                <p className="text-zinc-500 dark:text-zinc-400">Phone</p>
                <p className="font-medium text-zinc-900 dark:text-white">
                  {portfolio.contacts.phone}
                </p>
              </div>
            </div>
            <div className="mt-5">
              <Link
                href="/contact"
                className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                More contact options →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
