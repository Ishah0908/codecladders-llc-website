import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InfoGrid } from "@/components/sections/InfoGrid";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "IT Staffing | Codecladders LLC",
  description:
    "Codecladders LLC is an IT staffing company and tech recruitment firm specializing in cybersecurity, cloud, DevOps, networking, software engineering, infrastructure, and AI/ML.",
};

const specialties = [
  { title: "Cybersecurity", text: "Security engineers, analysts, SOC talent, and governance specialists." },
  { title: "Cloud", text: "AWS, Azure, and GCP architects, engineers, and platform experts." },
  { title: "DevOps", text: "CI/CD, IaC, SRE, and automation-focused delivery professionals." },
  { title: "Networking", text: "Network administrators, architects, and infrastructure specialists." },
  { title: "Software Engineering", text: "Frontend, backend, full-stack, and QA engineering talent." },
  { title: "Infrastructure + AI/ML", text: "Systems engineers, MLOps, data engineers, and AI practitioners." },
];

export default function ItStaffingPage() {
  return (
    <>
      <PageHero
        eyebrow="IT Staffing Company"
        title="Technical Recruiting Built for High-Performance Teams"
        description="As a focused tech recruitment firm, Codecladders delivers vetted candidates across mission-critical technology roles."
        actions={
          <>
            <ButtonLink href="/employers">For Employers</ButtonLink>
            <ButtonLink href="/candidates" variant="secondary">
              For Candidates
            </ButtonLink>
          </>
        }
      />

      <section className="pb-16 sm:pb-20">
        <Container>
          <h2 className="font-display text-3xl text-[var(--color-ink-900)]">What We Recruit For</h2>
          <InfoGrid items={specialties} />
        </Container>
      </section>
    </>
  );
}
