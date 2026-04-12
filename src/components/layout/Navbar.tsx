import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/it-staffing", label: "IT Staffing" },
  { href: "/healthcare-staffing", label: "Healthcare Staffing" },
  { href: "/employers", label: "Employers" },
  { href: "/candidates", label: "Candidates" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-ink-200)] bg-white/95 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label="Codecladders LLC home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-strong))] text-base font-black text-white shadow-lg shadow-blue-200/70">
            CC
          </span>
          <span className="font-display text-lg text-[var(--color-ink-900)]">
            Codecladders LLC
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--color-ink-700)] transition-colors hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact-us">Talk to Us</ButtonLink>
        </div>

        <Link
          href="/contact-us"
          className="rounded-full border border-[var(--color-ink-200)] px-4 py-2 text-sm font-semibold text-[var(--color-ink-900)] lg:hidden"
        >
          Contact
        </Link>
      </Container>
    </header>
  );
}
