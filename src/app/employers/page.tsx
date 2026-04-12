import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { InfoGrid } from "@/components/sections/InfoGrid";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Employers | Codecladders LLC",
  description:
    "Partner with Codecladders LLC to hire qualified IT and healthcare professionals faster with a trusted staffing and recruitment process.",
};

const employerBenefits = [
  {
    title: "Role-Aligned Sourcing",
    text: "Recruiting strategies tailored to each role, team maturity, and growth stage.",
  },
  {
    title: "Speed to Shortlist",
    text: "Fast turnaround with quality screening for both permanent and contract hiring.",
  },
  {
    title: "Transparent Communication",
    text: "Consistent updates from intake to offer stage with clear market guidance.",
  },
];

export default function EmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Employers"
        title="Hire Better Talent, Faster"
        description="Codecladders helps businesses secure IT and healthcare professionals with confidence through structured recruiting and talent intelligence."
      />

      <section className="pb-16 sm:pb-20">
        <Container>
          <h2 className="font-display text-3xl text-[var(--color-ink-900)]">How We Help Your Team</h2>
          <InfoGrid items={employerBenefits} />

          <h2 className="mt-12 font-display text-3xl text-[var(--color-ink-900)]">Employer Inquiry</h2>
          <p className="mt-3 text-base text-[var(--color-ink-600)]">
            Share your hiring goals and our team will follow up with a custom staffing strategy.
          </p>
          <InquiryForm />
        </Container>
      </section>
    </>
  );
}
