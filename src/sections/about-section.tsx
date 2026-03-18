import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/tag";
import { portfolio } from "@/const/portfolio.const";
import { Info } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="mt-12 scroll-mt-20 sm:mt-16">
      <Reveal withScrollMargin>
        <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold">
          <Info className="h-5 w-5" aria-hidden="true" />
          About
        </h2>
        <p className="text-base leading-6 text-zinc-700 dark:text-zinc-300">
          I build scalable, production-ready web applications with modern frontend and
          backend technologies. Experienced in working in an international outstaff team,
          collaborating with foreign clients and developers. Strong focus on clean,
          maintainable code, scalable architecture, REST APIs, Deploying and CI/CD
          workflows.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {portfolio.interests.map((i) => (
            <Tag key={`interest-${i}`}>{i}</Tag>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
