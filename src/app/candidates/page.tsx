import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InfoGrid } from "@/components/sections/InfoGrid";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Candidates | Codecladders LLC",
  description:
    "Work with Codecladders LLC to access top IT and healthcare opportunities with guidance from specialized recruiters.",
};

const candidateSupport = [
  {
    title: "Career Matchmaking",
    text: "We align your skills and goals with employers seeking long-term impact and growth.",
  },
  {
    title: "Interview Preparation",
    text: "Practical prep and communication support to help you stand out confidently.",
  },
  {
    title: "Offer Guidance",
    text: "Clarity around compensation, benefits, and role expectations before decisions.",
  },
];

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Candidates"
        title="Find Roles Where Your Talent Matters"
        description="Whether you are in tech or healthcare, Codecladders connects you to high-quality opportunities and supports you throughout the hiring journey."
      />

      <section className="pb-16 sm:pb-20">
        <Container>
          <h2 className="font-display text-3xl text-[var(--color-ink-900)]">How We Support Candidates</h2>
          <InfoGrid items={candidateSupport} />

          <div className="card-surface mt-10 p-8">
            <h2 className="font-display text-3xl text-[var(--color-ink-900)]">Resume Submission Placeholder</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-ink-600)]">
              Upload and submission integration can be connected here (ATS, email automation, or secure document portal).
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <ButtonLink href="/contact-us">Submit Resume</ButtonLink>
              <ButtonLink href="/it-staffing" variant="secondary">
                Explore IT Roles
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
