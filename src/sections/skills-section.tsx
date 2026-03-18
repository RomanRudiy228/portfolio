import { Reveal } from "@/components/reveal";
import { portfolio } from "@/const/portfolio.const";
import { Code } from "lucide-react";

export function SkillsSection() {
  return (
    <section id="skills" className="mt-12 scroll-mt-20 sm:mt-16">
      <Reveal withScrollMargin>
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Code className="h-5 w-5" aria-hidden="true" />
          Skills
        </h2>

        <div className="mt-6 flex flex-col divide-y divide-zinc-100 dark:divide-white/[0.06]">
          {portfolio.categories.map(({ key, label }) => (
            <div
              key={key}
              className="flex items-baseline gap-4 py-3 first:pt-0 last:pb-0"
            >
              <span className="w-[100px] shrink-0 pt-0.5 text-sm font-medium tracking-[0.06em] text-zinc-500 uppercase dark:text-zinc-400">
                {label}
              </span>

              <div className="flex flex-wrap gap-[5px]">
                {portfolio.skills[key].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 px-2.5 py-[3px] text-sm text-zinc-800 dark:border-white/10 dark:text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
