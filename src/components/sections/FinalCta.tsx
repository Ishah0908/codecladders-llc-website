import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCta() {
  return (
    <section className="bg-[#f5f5f7] py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[52px]">
            Ready to build your next great team?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[19px] leading-7 text-[#6e6e73]">
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

