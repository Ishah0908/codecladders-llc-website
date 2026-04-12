import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codecladders.com"),
  title: {
    default: "Codecladders LLC | IT and Healthcare Staffing",
    template: "%s | Codecladders LLC",
  },
  description:
    "Codecladders LLC is a premium IT staffing company and healthcare staffing agency connecting employers with top-tier technical and clinical talent.",
  keywords: [
    "IT staffing company",
    "tech recruitment firm",
    "healthcare staffing agency",
    "nurse recruitment company",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-surface)] text-[var(--color-ink-900)]">
        <div className="site-background" aria-hidden />
        <div className="relative flex min-h-full flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
