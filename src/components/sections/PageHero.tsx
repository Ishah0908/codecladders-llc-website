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
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="hero-orb hero-orb-top" aria-hidden />
      <Container>
        <div className="max-w-4xl animate-fade-up">
          {eyebrow ? (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-4xl leading-tight text-[var(--color-ink-900)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-ink-600)]">
            {description}
          </p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}
