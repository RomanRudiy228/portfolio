"use client";

import Link from "next/link";
import { portfolio } from "@/const/portfolio.const";
import { Reveal } from "@/components/reveal";
import {
  Briefcase,
  Cpu,
  Globe2,
  Github,
  Linkedin,
  MapPin,
  Send,
  Download,
} from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" className="scroll-mt-20">
      <Reveal withScrollMargin className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {portfolio.location}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {portfolio.name}
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-base text-pretty text-zinc-700 sm:text-lg dark:text-zinc-300">
              {portfolio.title}
            </p>

            <a
              href="/CV.pdf"
              download
              className="flex items-center gap-1 rounded-2xl bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>

        <div className="group overflow-hidden rounded-2xl">
          <div className="marquee-track flex w-max gap-3 pr-3 group-hover:[animation-play-state:paused]">
            {[...portfolio.highlights, ...portfolio.highlights].map((h, idx) => (
              <div
                key={`${h.label}-${idx}`}
                className="flex w-[360px] shrink-0 items-center gap-3 rounded-2xl border border-zinc-200 bg-white/80 px-5 py-3.5 backdrop-blur-md dark:border-white/10 dark:bg-black/50"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full">
                  {h.label.includes("Commercial") && (
                    <Briefcase className="h-4 w-4" aria-hidden="true" />
                  )}
                  {h.label.includes("Stack") && (
                    <Cpu className="h-4 w-4" aria-hidden="true" />
                  )}
                  {h.label.includes("Remote") && (
                    <Globe2 className="h-4 w-4" aria-hidden="true" />
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                    {h.label}
                  </p>
                  <p className="mt-0.5 text-sm leading-5 font-semibold text-zinc-950 dark:text-white">
                    {h.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {portfolio.contacts.githubUrl ? (
            <Link
              className="flex items-center gap-1 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              href={portfolio.contacts.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </Link>
          ) : null}
          {portfolio.contacts.linkedinUrl ? (
            <Link
              className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-white/15 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              href={portfolio.contacts.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </Link>
          ) : null}
          {portfolio.contacts.telegramUrl ? (
            <Link
              className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-white/15 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              href={portfolio.contacts.telegramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Telegram
            </Link>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}
