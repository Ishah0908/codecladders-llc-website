import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InfoGrid } from "@/components/sections/InfoGrid";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "IT Staffing | CodeCladders LLC",
  description:
    "CodeCladders LLC is an IT staffing company and tech recruitment firm specializing in cybersecurity, cloud, DevOps, networking, software engineering, infrastructure, and AI/ML.",
};

const specialties = [
  { title: "Cybersecurity", text: "Security engineers, analysts, SOC talent, and governance specialists." },
  { title: "Cloud", text: "AWS, Azure, and GCP architects, engineers, and platform experts." },
  { title: "DevOps & SRE", text: "CI/CD, IaC, SRE, and automation-focused delivery professionals." },
  { title: "Networking", text: "Network administrators, architects, and infrastructure specialists." },
  { title: "Software Engineering", text: "Frontend, backend, full-stack, and QA engineering talent." },
  { title: "AI/ML & Data", text: "MLOps, data engineers, AI practitioners, and systems engineers." },
];

export default function ItStaffingPage() {
  return (
    <>
      <PageHero
        eyebrow="IT Staffing"
        title="Technical recruiting for high-performance teams."
        description="We source, screen, and deliver vetted candidates across mission-critical technology roles — with speed and precision."
        actions={
          <>
            <ButtonLink href="/employers">For Employers</ButtonLink>
            <ButtonLink href="/candidates" variant="secondary">
              For Candidates
            </ButtonLink>
          </>
        }
      />

      <section className="bg-[#f5f5f7] py-20 sm:py-28">
        <Container>
          <p className="text-[15px] font-semibold text-[#0071e3]">Specialties</p>
          <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
            What we recruit for.
          </h2>
          <InfoGrid items={specialties} />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

