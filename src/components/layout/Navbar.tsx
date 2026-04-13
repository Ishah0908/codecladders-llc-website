import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

const navItems = [
  { href: "/about-us", label: "About" },
  { href: "/it-staffing", label: "IT Staffing" },
  { href: "/healthcare-staffing", label: "Healthcare" },
  { href: "/employers", label: "Employers" },
  { href: "/candidates", label: "Candidates" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/90 backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex h-14 items-center justify-between gap-6">
        <Link href="/" aria-label="CodeCladders LLC home" className="flex-shrink-0">
          <Image
            src="/brand/logo-horizontal.svg"
            alt="CodeCladders LLC"
            width={220}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-normal text-[#1d1d1f]/80 transition-opacity hover:text-[#1d1d1f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact-us"
            className="hidden rounded-full bg-[#0071e3] px-[18px] py-[8px] text-[15px] font-normal text-white transition-colors hover:bg-[#0077ed] lg:inline-flex items-center"
          >
            Contact Us
          </Link>
          <Link
            href="/contact-us"
            className="rounded-full border border-[#d2d2d7] px-4 py-1.5 text-[15px] text-[#1d1d1f] lg:hidden"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}

