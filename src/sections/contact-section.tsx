import { Reveal } from "@/components/reveal";
import { portfolio } from "@/const/portfolio.const";
import { Contact } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="mt-12 scroll-mt-20 sm:mt-16">
      <Reveal withScrollMargin>
        <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
          <Contact className="h-5 w-5" aria-hidden="true" />
          Contacts
        </h2>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="w-16 shrink-0 text-sm font-medium tracking-wider text-zinc-800 uppercase dark:text-zinc-500">
              Email
            </span>

            <a
              href={`mailto:${portfolio.contacts.email}`}
              className="text-base text-zinc-800 transition hover:underline dark:text-zinc-200"
            >
              {portfolio.contacts.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="w-16 shrink-0 text-sm font-medium tracking-wider text-zinc-800 uppercase dark:text-zinc-500">
              Phone
            </span>

            <a
              href={`tel:${portfolio.contacts.phone}`}
              className="text-base text-zinc-800 transition hover:underline dark:text-zinc-200"
            >
              {portfolio.contacts.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
