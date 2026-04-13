import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InfoGrid } from "@/components/sections/InfoGrid";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Healthcare Staffing | CodeCladders LLC",
  description:
    "CodeCladders LLC is a healthcare staffing agency and nurse recruitment company placing registered nurses, travel nurses, allied health, and clinical support professionals.",
};

const roles = [
  { title: "Registered Nurses", text: "RNs across acute care, specialty units, and outpatient environments." },
  { title: "Travel Nurses", text: "Flexible contract-based nurses for urgent and seasonal staffing needs." },
  { title: "Allied Health", text: "Therapists, imaging professionals, lab specialists, and technical clinicians." },
  { title: "Clinical Support", text: "Medical assistants, patient care techs, and support professionals." },
  { title: "Credentialing Support", text: "Verification workflows to reduce onboarding delays and compliance risk." },
  { title: "Continuity Planning", text: "Strategic staffing pipelines to maintain quality of care around the clock." },
];

export default function HealthcareStaffingPage() {
  return (
    <>
      <PageHero
        eyebrow="Healthcare Staffing"
        title="Reliable clinical talent for better patient outcomes."
        description="We support hospitals and care teams with responsive, quality-first healthcare staffing solutions that keep operations running and patients cared for."
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
          <p className="text-[15px] font-semibold text-[#0071e3]">Roles We Place</p>
          <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
            Healthcare professionals we recruit.
          </h2>
          <InfoGrid items={roles} />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

