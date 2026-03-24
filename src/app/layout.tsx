import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/sections/header-section";
import { SiteFooter } from "@/sections/footer-section";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roman Rudiy — Fullstack Developer",
  description:
    "Fullstack developer portfolio: React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-white text-zinc-950 antialiased dark:bg-black dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SiteHeader />
          <div className="flex min-h-[calc(100dvh-3.5rem)] flex-col">
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
