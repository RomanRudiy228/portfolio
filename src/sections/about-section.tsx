import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/tag";
import { portfolio } from "@/const/portfolio.const";
import { Info, BookOpen, Award, Activity } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="mt-12 scroll-mt-20 sm:mt-16">
      <Reveal withScrollMargin>
        <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
          <Info className="h-5 w-5" aria-hidden="true" />
          About
        </h2>

        <p className="text-black-600 mb-6 text-base leading-6 dark:text-zinc-300">
          Hi! I&apos;m <span className="font-bold">Roman Rudiy</span>, a passionate Full
          Stack Developer with experience in JavaScript, TypeScript, React, Next.js,
          Node.js, and modern web architectures. I enjoy building scalable, maintainable,
          and user-friendly web applications that solve real-world problems.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white/80 p-5 backdrop-blur-md transition-shadow duration-300 hover:shadow-lg dark:border-white/10 dark:bg-black/50">
            <h3 className="mb-3 flex items-center gap-2 text-[16px] font-semibold">
              <Activity className="h-5 w-5" />
              My Approach
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolio.interests.map((interest) => (
                <Tag key={interest}>{interest}</Tag>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white/80 p-5 backdrop-blur-md transition-shadow duration-300 hover:shadow-lg dark:border-white/10 dark:bg-black/50">
            <h3 className="mb-3 flex items-center gap-2 text-[16px] font-semibold">
              <BookOpen className="h-5 w-5" />
              Education
            </h3>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {portfolio.education.map((edu, idx) => (
                <div key={idx}>
                  <span className="font-semibold">{edu.title}</span>{" "}
                  <span className="text-zinc-500 dark:text-zinc-400">
                    ({edu.period}) — {edu.location}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white/80 p-5 backdrop-blur-md transition-shadow duration-300 hover:shadow-lg dark:border-white/10 dark:bg-black/50">
            <h3 className="mb-3 flex items-center gap-2 text-[16px] font-semibold">
              <Award className="h-5 w-5" />
              Courses
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolio.courses.map((course, idx) => (
                <Tag key={idx}>{course}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
