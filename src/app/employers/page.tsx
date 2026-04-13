import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { InfoGrid } from "@/components/sections/InfoGrid";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Employers | CodeCladders LLC",
  description:
    "Partner with CodeCladders LLC to hire qualified IT and healthcare professionals faster with a trusted staffing and recruitment process.",
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
        title="Hire better talent, faster."
        description="CodeCladders helps businesses secure IT and healthcare professionals with confidence through structured recruiting and talent intelligence."
      />

      <section className="bg-[#f5f5f7] py-20 sm:py-28">
        <Container>
          <p className="text-[15px] font-semibold text-[#0071e3]">How We Help</p>
          <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
            What you get.
          </h2>
          <InfoGrid items={employerBenefits} />
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container className="max-w-3xl">
          <p className="text-[15px] font-semibold text-[#0071e3]">Get Started</p>
          <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
            Tell us about your hiring needs.
          </h2>
          <p className="mt-3 text-[19px] text-[#6e6e73]">
            Share your goals and our team will follow up with a custom staffing strategy.
          </p>
          <InquiryForm />
        </Container>
      </section>
    </>
  );
}

