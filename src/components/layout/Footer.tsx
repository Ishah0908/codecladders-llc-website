import Link from "next/link";
import { Container } from "@/components/layout/Container";

const quickLinks = [
  { href: "/about-us", label: "About" },
  { href: "/it-staffing", label: "IT Staffing" },
  { href: "/healthcare-staffing", label: "Healthcare Staffing" },
  { href: "/employers", label: "Employers" },
  { href: "/candidates", label: "Candidates" },
  { href: "/contact-us", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-ink-200)] bg-[var(--color-ink-950)] text-[var(--color-ink-300)]">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <section>
          <h3 className="font-display text-xl text-white">Codecladders LLC</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--color-ink-400)]">
            Premium IT staffing company and healthcare staffing agency delivering high-quality talent with speed, precision, and trust.
          </p>
        </section>

        <section>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-ink-200)]">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-ink-200)]">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-ink-400)]">
            <li>Email: hello@codecladders.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Office: 123 Business Ave, Suite 400, City, ST</li>
          </ul>
        </section>
      </Container>
      <Container className="border-t border-white/10 py-6 text-xs text-[var(--color-ink-500)]">
        <p>© {new Date().getFullYear()} Codecladders LLC. All rights reserved.</p>
      </Container>
    </footer>
  );
}
