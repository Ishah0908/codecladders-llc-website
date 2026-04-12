import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | Codecladders LLC",
  description:
    "Contact Codecladders LLC for IT staffing and healthcare staffing support. Speak with our team about hiring or career opportunities.",
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s Build Your Hiring Success Story"
        description="Connect with Codecladders LLC for IT staffing, healthcare staffing, and recruitment partnership inquiries."
      />

      <section className="pb-16 sm:pb-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="card-surface p-8">
            <h2 className="font-display text-3xl text-[var(--color-ink-900)]">Get in Touch</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-ink-600)]">
              <li>Email (HR): hr@codecladders.com</li>
              <li>Email (Admin): admin@codecladders.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Office: 123 Business Ave, Suite 400, City, ST</li>
            </ul>
            <p className="mt-6 text-sm font-medium text-[var(--color-ink-700)]">
              Ready to hire or ready for your next role? Reach out and our team will respond quickly.
            </p>
          </article>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
