import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FinalCta } from "@/components/sections/FinalCta";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Home",
  description:
    "CodeCladders LLC is an IT staffing company and healthcare staffing agency connecting top talent with industry-leading companies.",
};

const services = [
  {
    title: "IT Staffing",
    text: "Cybersecurity, cloud, DevOps, software engineering, networking, infrastructure, and AI/ML — we find the right engineers fast.",
  },
  {
    title: "Healthcare Staffing",
    text: "Registered nurses, travel nurses, allied health, and clinical support professionals placed with care and precision.",
  },
  {
    title: "Flexible Hiring Models",
    text: "Permanent, contract, and project-based hiring supported across both verticals with speed and rigor.",
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
      {/* Hero */}
      <section className="hero-graphic mesh-bg pb-16 pt-20 sm:pb-24 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <p className="mb-5 inline-flex items-center rounded-full bg-[#f5f5f7] px-4 py-1.5 text-[15px] font-medium text-[#6e6e73]">
              IT Staffing &amp; Healthcare Recruiting
            </p>
            <h1 className="text-[56px] font-semibold leading-[1.07] tracking-tight text-[#1d1d1f] sm:text-[72px] lg:text-[80px]">
              Find exceptional talent.
              <br className="hidden sm:block" />
              <span className="text-[#0071e3]"> Build great teams.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[19px] leading-7 text-[#6e6e73]">
              CodeCladders LLC delivers specialized recruiting in technology and healthcare, helping organizations hire smarter and candidates find roles that matter.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/employers">Hire Talent</ButtonLink>
              <ButtonLink href="/candidates" variant="secondary">
                Find Opportunities
              </ButtonLink>
            </div>
          </div>
          <div className="pointer-events-none relative mx-auto mt-12 hidden h-28 max-w-3xl items-center justify-center sm:flex">
            <div className="animate-float absolute left-6 h-16 w-16 rounded-full bg-[#0071e3]/18 blur-[2px]" />
            <div className="animate-float absolute right-8 h-14 w-14 rounded-full bg-[#c8a14a]/24 blur-[1px]" style={{ animationDelay: "1400ms" }} />
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d2d2d7] to-transparent" />
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-[#f5f5f7] py-12">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value} className="card-glass px-8 py-8 text-center">
                <p className="text-[36px] font-semibold text-[#1d1d1f]">{stat.value}</p>
                <p className="mt-1 text-[15px] text-[#6e6e73]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <p className="text-[15px] font-semibold text-[#0071e3]">Services</p>
          <h2 className="mt-2 max-w-xl text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
            What we do.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="card-glass p-8 animate-fade-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <h3 className="text-[21px] font-semibold text-[#1d1d1f]">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-6 text-[#6e6e73]">{service.text}</p>
                <ButtonLink
                  href={service.title === "IT Staffing" ? "/it-staffing" : service.title === "Healthcare Staffing" ? "/healthcare-staffing" : "/employers"}
                  variant="ghost"
                  className="mt-5 px-0 text-[#0071e3] hover:bg-transparent hover:underline"
                >
                  Learn more →
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Why CodeCladders */}
      <section className="bg-[#f5f5f7] py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[15px] font-semibold text-[#0071e3]">Why CodeCladders</p>
              <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
                Recruiting built on trust.
              </h2>
              <p className="mt-4 text-[19px] leading-7 text-[#6e6e73]">
                We combine specialized expertise with a quality-first process to deliver talent that performs from day one.
              </p>
            </div>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-3 rounded-[16px] bg-white/92 px-6 py-4 text-[15px] text-[#1d1d1f] shadow-[0_10px_22px_rgba(29,29,31,0.06)]"
                >
                  <svg className="mt-0.5 flex-shrink-0 text-[#0071e3]" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                    <circle cx="9" cy="9" r="9" fill="#0071e3" />
                    <path d="M5 9.5l2.8 2.8 5-5.6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[15px] font-semibold text-[#0071e3]">Our Process</p>
            <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
              From intake to placement.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {process.map((item, index) => (
              <article
                key={item.title}
                className="card-glass p-8 animate-fade-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <p className="text-[13px] font-semibold tracking-widest text-[#0071e3]">{item.step}</p>
                <h3 className="mt-3 text-[21px] font-semibold text-[#1d1d1f]">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-6 text-[#6e6e73]">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-[#f5f5f7] py-20 sm:py-28">
        <Container>
          <p className="text-[15px] font-semibold text-[#0071e3]">Industries</p>
          <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
            Where we deliver talent.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span key={industry} className="tag-pill">{industry}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <p className="text-[15px] font-semibold text-[#0071e3]">Testimonials</p>
          <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
            Trusted by leaders.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <blockquote className="card-glass p-8 text-[17px] leading-7 text-[#1d1d1f]">
              &ldquo;CodeCladders found us high-quality engineers who fit both technical and cultural requirements quickly.&rdquo;
              <footer className="mt-5 text-[13px] font-semibold text-[#86868b]">
                VP of Engineering &mdash; Technology Client
              </footer>
            </blockquote>
            <blockquote className="card-glass p-8 text-[17px] leading-7 text-[#1d1d1f]">
              &ldquo;Their healthcare recruiting team was responsive, organized, and consistent in candidate quality.&rdquo;
              <footer className="mt-5 text-[13px] font-semibold text-[#86868b]">
                Director of Nursing &mdash; Healthcare Client
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

