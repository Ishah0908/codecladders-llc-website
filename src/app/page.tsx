import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FinalCta } from "@/components/sections/FinalCta";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Codecladders LLC is an IT staffing company and healthcare staffing agency connecting top talent with industry-leading companies.",
};

const services = [
  {
    title: "IT Staffing",
    text: "Targeted recruitment for cybersecurity, cloud, DevOps, networking, software engineering, infrastructure, and AI/ML.",
  },
  {
    title: "Healthcare Staffing",
    text: "Reliable placements for registered nurses, travel nurses, allied health professionals, and clinical support roles.",
  },
  {
    title: "Flexible Hiring Models",
    text: "Support for permanent, contract, and project-based hiring with speed and role-specific rigor.",
  },
];

const industries = [
  "Technology and SaaS",
  "Financial Services",
  "Healthcare Systems",
  "Hospitals and Clinics",
  "Telehealth and HealthTech",
  "Enterprise Infrastructure",
];

const reasons = [
  "Specialized recruiters in tech and healthcare verticals",
  "Candidate quality-first process with deep screening",
  "Fast delivery with transparent communication",
  "Long-term partnership mindset and measurable outcomes",
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "We align on role requirements, timeline, culture, and business priorities.",
  },
  {
    step: "02",
    title: "Source + Screen",
    text: "Our team identifies high-fit talent and validates technical or clinical readiness.",
  },
  {
    step: "03",
    title: "Deliver + Support",
    text: "We present qualified shortlists, coordinate interviews, and support successful onboarding.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-22">
        <div className="hero-orb hero-orb-top" aria-hidden />
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="animate-fade-up">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              IT Staffing Company + Healthcare Staffing Agency
            </p>
            <h1 className="font-display text-4xl leading-tight text-[var(--color-ink-900)] sm:text-5xl lg:text-6xl">
              Connecting Top Talent with Industry-Leading Companies
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-ink-600)]">
              Codecladders LLC delivers specialized hiring solutions in technology and healthcare, helping organizations hire faster and candidates find meaningful opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/employers">Hire Talent</ButtonLink>
              <ButtonLink href="/candidates" variant="secondary">
                Find Talent
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Image
              src="/images/hero-it.svg"
              alt="IT staffing dashboard illustration placeholder"
              width={900}
              height={620}
              className="card-surface h-full w-full object-cover"
              priority
            />
            <Image
              src="/images/hero-healthcare.svg"
              alt="Healthcare staffing dashboard illustration placeholder"
              width={900}
              height={620}
              className="card-surface h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Premium Staffing Solutions"
            description="A recruitment model built for confidence, speed, and long-term fit."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="card-surface animate-fade-up p-6"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3 className="font-display text-2xl text-[var(--color-ink-900)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink-600)]">{service.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Industries Served"
              title="Where We Deliver Talent"
              description="We partner with organizations where precision hiring creates competitive advantage and better care delivery."
            />
            <ul className="mt-6 grid gap-3 text-sm font-medium text-[var(--color-ink-700)] sm:grid-cols-2">
              {industries.map((industry) => (
                <li key={industry} className="rounded-xl border border-[var(--color-ink-200)] bg-[var(--color-surface)] px-4 py-3">
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              eyebrow="Why Choose Codecladders LLC"
              title="Recruiting Built on Trust and Outcomes"
            />
            <ul className="mt-6 space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="card-surface flex items-start gap-3 px-5 py-4 text-sm text-[var(--color-ink-700)]">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" aria-hidden />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="A Clear Hiring Path from Intake to Placement"
            center
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {process.map((item, index) => (
              <article
                key={item.title}
                className="card-surface animate-fade-up p-6"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="text-xs font-bold tracking-[0.2em] text-[var(--color-primary)]">{item.step}</p>
                <h3 className="mt-3 font-display text-2xl text-[var(--color-ink-900)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink-600)]">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Clients and Candidates Say"
            description="Placeholder section ready for real client testimonials and success metrics."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <blockquote className="card-surface p-6 text-sm leading-7 text-[var(--color-ink-600)]">
              &ldquo;Codecladders quickly found high-quality engineers who fit both technical and cultural requirements.&rdquo;
              <footer className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-ink-500)]">
                VP Engineering, Placeholder Client
              </footer>
            </blockquote>
            <blockquote className="card-surface p-6 text-sm leading-7 text-[var(--color-ink-600)]">
              &ldquo;Their healthcare recruiting team was responsive, organized, and consistent in candidate quality.&rdquo;
              <footer className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-ink-500)]">
                Director of Nursing, Placeholder Client
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
