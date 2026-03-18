import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="mx-20 border-t border-zinc-200/70 py-5 dark:border-white/10">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Roman Rudiy. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
