import Link from "next/link";
import { Container } from "@/components/container";
import { portfolio } from "@/const/portfolio.const";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Contact — Roman Rudiy",
  description: "How to reach out: email and profiles.",
};

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <p className="font-semibold text-zinc-950 dark:text-white">{label}</p>
      <p className="mt-1 break-all text-zinc-600 dark:text-zinc-400">{href}</p>
    </Link>
  );
}

export default function ContactPage() {
  const links = [
    portfolio.contacts.githubUrl
      ? { label: "GitHub", href: portfolio.contacts.githubUrl }
      : null,
    portfolio.contacts.linkedinUrl
      ? { label: "LinkedIn", href: portfolio.contacts.linkedinUrl }
      : null,
    portfolio.contacts.telegramUrl
      ? { label: "Telegram", href: portfolio.contacts.telegramUrl }
      : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <main className="py-12 sm:py-16">
      <Container>
        <Reveal withScrollMargin>
          <header className="max-w-2xl">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h1>
            <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              Fastest way: email. You can also use my public profiles below.
            </p>
          </header>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">Email</p>
              <a
                className="mt-2 block text-sm font-medium text-zinc-700 hover:underline dark:text-zinc-300"
                href={`mailto:${portfolio.contacts.email}`}
              >
                {portfolio.contacts.email}
              </a>
              <p className="mt-4 text-sm font-semibold text-zinc-950 dark:text-white">
                Phone
              </p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                {portfolio.contacts.phone}
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                Quick note for recruiters
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                I’m open to Fullstack / Front-end roles. Commercial experience in an
                international outstaff team, production Next.js + NestJS, PostgreSQL, and
                Supabase.
              </p>
            </div>
          </Reveal>
        </div>

        {links.length > 0 ? (
          <section className="mt-6">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-white">
              Profiles
            </h2>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {links.map((l) => (
                <Reveal key={l.label}>
                  <ExternalLink href={l.href} label={l.label} />
                </Reveal>
              ))}
            </div>
          </section>
        ) : (
          <Reveal>
            <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-100">
              Add your GitHub/LinkedIn/Telegram links in{" "}
              <code className="rounded bg-black/5 px-1 py-0.5 dark:bg-white/10">
                src/const/portfolio.const.ts
              </code>{" "}
              to enable profile cards.
            </section>
          </Reveal>
        )}
      </Container>
    </main>
  );
}
