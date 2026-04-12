import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InfoGrid } from "@/components/sections/InfoGrid";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Healthcare Staffing | Codecladders LLC",
  description:
    "Codecladders LLC is a healthcare staffing agency and nurse recruitment company placing registered nurses, travel nurses, allied health, and clinical support professionals.",
};

const roles = [
  { title: "Registered Nurses", text: "RNs across acute care, specialty units, and outpatient environments." },
  { title: "Travel Nurses", text: "Flexible contract-based nurses for urgent and seasonal staffing needs." },
  { title: "Allied Health", text: "Therapists, imaging professionals, lab specialists, and technical clinicians." },
  { title: "Clinical Support", text: "Medical assistants, patient care techs, and support professionals." },
  { title: "Credentialing Support", text: "Verification workflows to reduce onboarding delays and risk." },
  { title: "Continuity Planning", text: "Strategic staffing pipelines to maintain quality of care." },
];

export default function HealthcareStaffingPage() {
  return (
    <>
      <PageHero
        eyebrow="Healthcare Staffing Agency"
        title="Reliable Clinical Talent for Better Patient Outcomes"
        description="Codecladders is a nurse recruitment company that supports hospitals and care teams with responsive, quality-first staffing solutions."
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
          <h2 className="font-display text-3xl text-[var(--color-ink-900)]">Healthcare Roles We Place</h2>
          <InfoGrid items={roles} />
        </Container>
      </section>
    </>
  );
}
