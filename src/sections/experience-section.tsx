import { BriefcaseBusiness } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/tag";
import { portfolio } from "@/const/portfolio.const";

export function ExperienceSection() {
  return (
    <section id="experience" className="mt-12 scroll-mt-20 sm:mt-16">
      <Reveal withScrollMargin>
        <div className="flex items-center gap-2">
          <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
          <h2 className="text-xl font-semibold">Experience</h2>
        </div>

        <div className="mt-4 space-y-4">
          {portfolio.experience.map((e) => (
            <div
              key={`${e.title}-${e.company}`}
              className="rounded-2xl border border-zinc-200 p-6 text-base dark:border-white/10"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="font-semibold text-zinc-950 dark:text-white">{e.title}</p>
                  <p className="text-zinc-600 dark:text-zinc-400">{e.company}</p>
                </div>
                <div className="pt-1 sm:pt-0">
                  <Tag>{e.period}</Tag>
                </div>
              </div>

              <ul className="mt-4 ml-4 list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {e.bullets.map((b) => (
                  <li key={`${e.company}-${b}`}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
