import Link from "next/link";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/70 py-10 dark:border-white/10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Roman Rudiy. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
