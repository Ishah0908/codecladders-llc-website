import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ResumeForm } from "@/components/forms/ResumeForm";
import { InfoGrid } from "@/components/sections/InfoGrid";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Candidates | CodeCladders LLC",
  description:
    "Work with CodeCladders LLC to access top IT and healthcare opportunities with guidance from specialized recruiters.",
};

const candidateSupport = [
  {
    title: "Career Matchmaking",
    text: "We align your skills and goals with employers seeking long-term impact and growth.",
  },
  {
    title: "Interview Preparation",
    text: "Practical prep and communication support to help you stand out and succeed confidently.",
  },
  {
    title: "Offer Guidance",
    text: "Clarity around compensation, benefits, and role expectations before any decision.",
  },
];

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Candidates"
        title="Find roles where your talent matters."
        description="Whether you are in tech or healthcare, CodeCladders connects you to high-quality opportunities and supports you throughout the entire hiring journey."
      />

      <section className="bg-[#f5f5f7] py-20 sm:py-28">
        <Container>
          <p className="text-[15px] font-semibold text-[#0071e3]">Candidate Support</p>
          <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
            How we support you.
          </h2>
          <InfoGrid items={candidateSupport} />
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="text-[15px] font-semibold text-[#0071e3]">Apply Now</p>
            <h2 className="mt-2 text-[36px] font-semibold leading-tight tracking-tight text-[#1d1d1f]">
              Submit your resume.
            </h2>
            <p className="mt-3 mb-8 text-[17px] leading-7 text-[#6e6e73]">
              Attach your resume and a recruiter will reach out about relevant IT or healthcare openings.
            </p>
            <ResumeForm />
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

