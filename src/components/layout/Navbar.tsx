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
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="CodeCladders LLC home" className="flex-shrink-0">
          <Image
            src="/brand/logo-horizontal.svg"
            alt="CodeCladders LLC"
            width={248}
            height={46}
            className="h-10 w-auto drop-shadow-[0_6px_14px_rgba(11,18,34,0.22)] transition-transform duration-300 hover:scale-[1.02]"
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

        {/* Abstract talent-network graphic */}
        <svg
          className="hidden lg:block flex-shrink-0 opacity-55"
          width="118"
          height="32"
          viewBox="0 0 118 32"
          fill="none"
          aria-hidden="true"
        >
          {/* Connecting lines */}
          <line x1="14" y1="10" x2="42" y2="6" stroke="#d2d2d7" strokeWidth="1" />
          <line x1="42" y1="6" x2="60" y2="18" stroke="#d2d2d7" strokeWidth="1" />
          <line x1="60" y1="18" x2="86" y2="8" stroke="#d2d2d7" strokeWidth="1" />
          <line x1="86" y1="8" x2="106" y2="16" stroke="#d2d2d7" strokeWidth="1" />
          <line x1="14" y1="10" x2="34" y2="24" stroke="#d2d2d7" strokeWidth="1" />
          <line x1="34" y1="24" x2="60" y2="18" stroke="#d2d2d7" strokeWidth="1" />
          <line x1="60" y1="18" x2="78" y2="26" stroke="#d2d2d7" strokeWidth="1" />
          <line x1="78" y1="26" x2="106" y2="16" stroke="#d2d2d7" strokeWidth="1" />
          {/* Blue nodes (talent) */}
          <circle cx="14" cy="10" r="3" fill="#0071e3" opacity="0.7" />
          <circle cx="42" cy="6" r="2.5" fill="#0071e3" opacity="0.6" />
          <circle cx="86" cy="8" r="2.5" fill="#0071e3" opacity="0.65" />
          <circle cx="34" cy="24" r="2" fill="#0071e3" opacity="0.55" />
          <circle cx="78" cy="26" r="2" fill="#0071e3" opacity="0.55" />
          <circle cx="106" cy="16" r="3" fill="#0071e3" opacity="0.7" />
          {/* Gold accent node (the match / connection) */}
          <circle
            cx="60"
            cy="18"
            r="3.5"
            fill="#c8a14a"
            style={{ animation: "node-pulse 3s ease-in-out infinite" }}
          />
        </svg>

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

