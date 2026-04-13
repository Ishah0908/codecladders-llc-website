import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FinalCta } from "@/components/sections/FinalCta";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Home",
  description:
    "CodeCladders LLC is an IT staffing company and healthcare staffing agency connecting top talent with industry-leading companies.",
};

const services = [
  {
    title: "IT Staffing",
    text: "Cybersecurity, cloud, DevOps, software engineering, networking, infrastructure, and AI/ML — we find the right engineers fast.",
    href: "/it-staffing",
  },
  {
    title: "Healthcare Staffing",
    text: "Registered nurses, travel nurses, allied health, and clinical support professionals placed with care and precision.",
    href: "/healthcare-staffing",
  },
  {
    title: "Flexible Hiring Models",
    text: "Permanent, contract, and project-based hiring supported across both verticals with speed and rigor.",
    href: "/employers",
  },
];

const stats = [
  { value: "200+", label: "Placements" },
  { value: "98%", label: "Client Retention" },
  { value: "2 wks", label: "Avg. Time-to-Shortlist" },
  { value: "2", label: "Specialized Verticals" },
];

const reasons = [
  "Dedicated recruiters for tech and healthcare verticals",
  "Candidate quality-first process with deep role-specific screening",
  "Fast delivery timelines with full transparency at every step",
  "Long-term partnership approach focused on measurable outcomes",
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "We align on role requirements, timeline, team culture, and business priorities.",
  },
  {
    step: "02",
    title: "Source & Screen",
    text: "Our team identifies high-fit talent and validates technical or clinical readiness.",
  },
  {
    step: "03",
    title: "Deliver & Support",
    text: "We present qualified shortlists, coordinate interviews, and support smooth onboarding.",
  },
];

const industries = [
  "Technology & SaaS",
  "Financial Services",
  "Healthcare Systems",
  "Hospitals & Clinics",
  "Telehealth & HealthTech",
  "Enterprise Infrastructure",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28">
        {/* Ambient background mesh */}
        <div className="pointer-events-none absolute inset-0 mesh-bg" aria-hidden />
        {/* Floating orbs */}
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[580px] w-[580px] rounded-full bg-[#0071e3]/14 blur-[96px] animate-float"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 -top-16 h-[460px] w-[460px] rounded-full bg-[#c8a14a]/16 blur-[86px] animate-float"
          style={{ animationDelay: "2400ms" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-[200px] w-[700px] -translate-x-1/2 rounded-full bg-[#0071e3]/07 blur-[64px]"
          aria-hidden
        />

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <p className="mb-5 inline-flex items-center rounded-full border border-[#d2d2d7] bg-white/80 px-4 py-1.5 text-[15px] font-medium text-[#6e6e73] backdrop-blur-sm">
              IT Staffing &amp; Healthcare Recruiting
            </p>
            <h1 className="text-[56px] font-semibold leading-[1.07] tracking-tight text-[#1d1d1f] sm:text-[72px] lg:text-[80px]">
              Find exceptional talent.
              <br className="hidden sm:block" />
              <span className="text-[#0071e3]"> Build great teams.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[19px] leading-7 text-[#6e6e73]">
              CodeCladders LLC delivers specialized recruiting in technology and healthcare, helping
              organizations hire smarter and candidates find roles that matter.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/employers">Hire Talent</ButtonLink>
              <ButtonLink href="/candidates" variant="secondary">
                Find Opportunities
              </ButtonLink>
            </div>
          </div>
          <div
            className="pointer-events-none relative mx-auto mt-14 hidden h-px max-w-2xl bg-gradient-to-r from-transparent via-[#d2d2d7] to-transparent sm:block"
            aria-hidden
          />
        </Container>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#f5f5f7] py-14">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimateIn key={stat.value} delay={index * 80} className="h-full">
                <div className="card-glass h-full px-8 py-8 text-center">
                  <p className="text-[40px] font-semibold text-[#1d1d1f]">{stat.value}</p>
                  <p className="mt-1 text-[15px] text-[#6e6e73]">{stat.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── DARK MANIFESTO BAND ── */}
      <section className="relative overflow-hidden bg-[#1d1d1f] py-20 sm:py-28">
        <div
          className="pointer-events-none absolute left-0 top-1/2 h-[540px] w-[540px] -translate-y-1/2 rounded-full bg-[#0071e3]/12 blur-[110px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full bg-[#c8a14a]/14 blur-[100px]"
          aria-hidden
        />
        <Container className="relative">
          <AnimateIn>
            <p className="mx-auto max-w-4xl text-center text-[40px] font-semibold leading-tight tracking-tight text-white sm:text-[60px]">
              We don&apos;t just fill roles.{" "}
              <span className="text-[#0071e3]">We build great teams.</span>
            </p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-[19px] leading-7 text-[#86868b]">
              Specialized expertise. Quality-first process. Measurable outcomes from day one.
            </p>
          </AnimateIn>
        </Container>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <AnimateIn>
            <p className="text-[15px] font-semibold text-[#0071e3]">Services</p>
            <h2 className="mt-2 max-w-xl text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
              What we do.
            </h2>
          </AnimateIn>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <AnimateIn key={service.title} delay={index * 100} className="h-full">
                <article className="card-glass flex h-full flex-col p-8">
                  <h3 className="text-[21px] font-semibold text-[#1d1d1f]">{service.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-6 text-[#6e6e73]">{service.text}</p>
                  <ButtonLink
                    href={service.href}
                    variant="ghost"
                    className="mt-5 px-0 text-[#0071e3] hover:bg-transparent hover:underline"
                  >
                    Learn more →
                  </ButtonLink>
                </article>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHY CODECLADDERS ── */}
      <section className="bg-[#f5f5f7] py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimateIn direction="left">
              <div>
                <p className="text-[15px] font-semibold text-[#0071e3]">Why CodeCladders</p>
                <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
                  Recruiting built on trust.
                </h2>
                <p className="mt-4 text-[19px] leading-7 text-[#6e6e73]">
                  We combine specialized expertise with a quality-first process to deliver talent
                  that performs from day one.
                </p>
              </div>
            </AnimateIn>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <AnimateIn key={reason} delay={index * 80} direction="right">
                  <li className="flex items-start gap-3 rounded-[16px] bg-white/92 px-6 py-4 text-[15px] text-[#1d1d1f] shadow-[0_10px_22px_rgba(29,29,31,0.06)]">
                    <svg
                      className="mt-0.5 flex-shrink-0"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden
                    >
                      <circle cx="9" cy="9" r="9" fill="#0071e3" />
                      <path
                        d="M5 9.5l2.8 2.8 5-5.6"
                        stroke="#fff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{reason}</span>
                  </li>
                </AnimateIn>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[15px] font-semibold text-[#0071e3]">Our Process</p>
              <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
                From intake to placement.
              </h2>
            </div>
          </AnimateIn>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {process.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 110} direction="scale" className="h-full">
                <article className="card-glass h-full p-8">
                  <p className="text-[13px] font-semibold tracking-widest text-[#0071e3]">
                    {item.step}
                  </p>
                  <h3 className="mt-3 text-[21px] font-semibold text-[#1d1d1f]">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-6 text-[#6e6e73]">{item.text}</p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-[#f5f5f7] py-20 sm:py-28">
        <Container>
          <AnimateIn>
            <p className="text-[15px] font-semibold text-[#0071e3]">Industries</p>
            <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
              Where we deliver talent.
            </h2>
          </AnimateIn>
          <AnimateIn delay={120}>
            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span key={industry} className="tag-pill">
                  {industry}
                </span>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

