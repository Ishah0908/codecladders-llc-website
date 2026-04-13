import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { InfoGrid } from "@/components/sections/InfoGrid";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "About Us | CodeCladders LLC",
  description:
    "Learn the mission, values, and trusted staffing approach of CodeCladders LLC, a premium IT staffing company and healthcare staffing agency.",
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
        eyebrow="About CodeCladders"
        title="A trusted talent partner for IT and healthcare."
        description="We help employers and candidates succeed through specialized recruiting built on quality, transparency, and measurable impact."
      />

      <section className="bg-[#f5f5f7] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-[15px] font-semibold text-[#0071e3]">Mission</p>
            <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
              People-first recruiting.
            </h2>
            <p className="mt-5 text-[19px] leading-8 text-[#6e6e73]">
              To connect top talent with industry-leading companies through strategic, people-first recruiting across technology and healthcare — with precision, speed, and integrity.
            </p>
          </div>

          <div className="mt-14">
            <p className="text-[15px] font-semibold text-[#0071e3]">Values</p>
            <h2 className="mt-2 text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
              What drives us.
            </h2>
            <InfoGrid items={values} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[22px] bg-[#f5f5f7] p-8">
              <h3 className="text-[24px] font-semibold text-[#1d1d1f]">Who We Serve</h3>
              <p className="mt-3 text-[17px] leading-7 text-[#6e6e73]">
                Startups, enterprise teams, hospitals, clinics, and healthcare systems that need exceptional talent quickly and reliably.
              </p>
            </article>
            <article className="rounded-[22px] bg-[#f5f5f7] p-8">
              <h3 className="text-[24px] font-semibold text-[#1d1d1f]">Why Companies Trust Us</h3>
              <p className="mt-3 text-[17px] leading-7 text-[#6e6e73]">
                Dedicated recruiters, consistent communication, role-specific pipelines, and quality-first screening make CodeCladders a dependable hiring partner.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

