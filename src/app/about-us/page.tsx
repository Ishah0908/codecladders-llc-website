import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { InfoGrid } from "@/components/sections/InfoGrid";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "About Us | Codecladders LLC",
  description:
    "Learn the mission, values, and trusted staffing approach of Codecladders LLC, a premium IT staffing company and healthcare staffing agency.",
};

const values = [
  {
    title: "Precision Matching",
    text: "We align technical capability, credentials, and culture so each placement performs from day one.",
  },
  {
    title: "Speed with Quality",
    text: "Our recruiters move fast while preserving screening rigor, compliance checks, and communication clarity.",
  },
  {
    title: "Long-Term Partnerships",
    text: "We operate as an extension of your hiring team and continuously optimize outcomes over time.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Codecladders"
        title="A Trusted Talent Partner for IT and Healthcare"
        description="Codecladders LLC helps employers and candidates succeed through specialized recruiting. As a tech recruitment firm and healthcare staffing agency, we focus on quality, transparency, and measurable hiring impact."
      />

      <section className="pb-16 sm:pb-20">
        <Container>
          <h2 className="font-display text-3xl text-[var(--color-ink-900)]">Our Mission</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[var(--color-ink-600)]">
            To connect top talent with industry-leading companies through strategic, people-first recruiting across technology and healthcare.
          </p>

          <h2 className="mt-10 font-display text-3xl text-[var(--color-ink-900)]">Our Values</h2>
          <InfoGrid items={values} />

          <div className="mt-10 grid gap-8 rounded-3xl border border-[var(--color-ink-200)] bg-white p-8 shadow-sm md:grid-cols-2">
            <article>
              <h3 className="font-display text-2xl text-[var(--color-ink-900)]">Who We Serve</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-600)]">
                We support startups, enterprise teams, hospitals, clinics, and healthcare systems that need exceptional talent quickly and reliably.
              </p>
            </article>
            <article>
              <h3 className="font-display text-2xl text-[var(--color-ink-900)]">Why Companies Trust Us</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-600)]">
                Dedicated recruiters, consistent communication, role-specific pipelines, and quality-first screening make Codecladders LLC a dependable hiring partner.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
