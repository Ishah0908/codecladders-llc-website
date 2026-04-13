import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codecladders.com"),
  title: {
    default: "CodeCladders LLC | IT and Healthcare Staffing",
    template: "%s | CodeCladders LLC",
  },
  description:
    "CodeCladders LLC is a premium IT staffing company and healthcare staffing agency connecting employers with top-tier technical and clinical talent.",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-[#1d1d1f]">
        <div className="relative flex min-h-full flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
