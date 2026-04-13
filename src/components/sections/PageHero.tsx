import { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-24">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 mesh-bg" aria-hidden />
      {/* floating orbs */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#0071e3]/11 blur-[84px] animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-4 h-[340px] w-[340px] rounded-full bg-[#c8a14a]/13 blur-[74px] animate-float"
        style={{ animationDelay: "2000ms" }}
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          {eyebrow ? (
            <p className="mb-4 text-[15px] font-semibold text-[#0071e3]">{eyebrow}</p>
          ) : null}
          <h1 className="text-[48px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[64px]">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[19px] leading-7 text-[#6e6e73]">
            {description}
          </p>
          {actions ? (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">{actions}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

