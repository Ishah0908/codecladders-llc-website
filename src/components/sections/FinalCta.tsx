import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCta() {
  return (
    <section className="py-18 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1d4ed8,#2563eb)] px-8 py-12 text-white shadow-2xl shadow-blue-200 sm:px-12 sm:py-14">
          <div className="hero-orb hero-orb-bottom opacity-30" aria-hidden />
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Build Teams That Outperform Expectations
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
            Partner with a trusted tech recruitment firm and nurse recruitment company that understands speed, quality, and long-term fit.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <ButtonLink href="/employers" variant="secondary" className="border-0">
              Hire Talent
            </ButtonLink>
            <ButtonLink href="/candidates" className="bg-white/15 hover:bg-white/25">
              Find Talent
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
