import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/sections/header-section";
import { SiteFooter } from "@/sections/footer-section";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import BlobCursor from "@/components/blob-cursor";

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
          <BlobCursor
            blobType="circle"
            fillColor="#5227FF"
            trailCount={3}
            sizes={[60, 125, 75]}
            innerSizes={[20, 35, 25]}
            innerColor="rgba(255,255,255,0.8)"
            opacities={[0.6, 0.6, 0.6]}
            shadowColor="rgba(0,0,0,0.75)"
            shadowBlur={5}
            shadowOffsetX={10}
            shadowOffsetY={10}
            filterStdDeviation={30}
            useFilter={true}
            fastDuration={0.1}
            slowDuration={0.5}
            zIndex={0}
          />
          <div className="relative z-10">
            <SiteHeader />
            <div className="flex min-h-[calc(100dvh-3.5rem)] flex-col">
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
