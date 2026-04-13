import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

const serviceLinks = [
  { href: "/it-staffing", label: "IT Staffing" },
  { href: "/healthcare-staffing", label: "Healthcare Staffing" },
  { href: "/employers", label: "For Employers" },
  { href: "/candidates", label: "For Candidates" },
];

const companyLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1d1d1f] text-[#86868b]">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/brand/logo-horizontal-light.svg"
              alt="CodeCladders LLC"
              width={180}
              height={48}
              className="h-8 w-auto"
            />
            <p className="mt-4 text-[13px] leading-6 text-[#6e6e73]">
              Premium IT staffing and healthcare recruiting. Connecting top talent with leading organizations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-[#f5f5f7]">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#86868b] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-[#f5f5f7]">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#86868b] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-[#f5f5f7]">
              Contact
            </h3>
            <ul className="space-y-3 text-[13px] leading-5 text-[#86868b]">
              <li>
                <a href="mailto:hr@codecladders.com" className="transition-colors hover:text-white">
                  hr@codecladders.com
                </a>
              </li>
              <li>
                <a href="mailto:info@codecladders.com" className="transition-colors hover:text-white">
                  info@codecladders.com
                </a>
              </li>
              <li>
                <a href="tel:+15714749522" className="transition-colors hover:text-white">
                  +1 (571) 474-9522
                </a>
              </li>
              <li>14500 Dallas Pkwy, Dallas, TX 75254</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[13px] text-[#6e6e73]">
            © 2020 CodeCladders LLC. All rights reserved.
          </p>
          <p className="text-[13px] text-[#6e6e73]">
            IT Staffing &amp; Healthcare Recruiting
          </p>
        </div>
      </Container>
    </footer>
  );
}

