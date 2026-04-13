import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#1d1d1f] py-24 sm:py-32">
      {/* glow from above */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#0071e3]/18 blur-[120px]"
        aria-hidden
      />
      {/* accent orbs */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-[280px] w-[280px] rounded-full bg-[#c8a14a]/14 blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-[200px] w-[200px] rounded-full bg-[#0071e3]/10 blur-[70px]"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[15px] font-semibold text-[#0071e3]">Get Started</p>
          <h2 className="text-[44px] font-semibold leading-tight tracking-tight text-white sm:text-[56px]">
            Ready to build your next great team?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[19px] leading-7 text-[#86868b]">
            Partner with a staffing firm that prioritizes quality, speed, and long-term fit in every placement.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/employers">Hire Talent</ButtonLink>
            <ButtonLink href="/candidates" variant="secondary">
              Find Opportunities
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

