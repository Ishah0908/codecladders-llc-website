import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | CodeCladders LLC",
  description: "Contact CodeCladders LLC for IT and healthcare staffing support.",
};

const contactDetails = [
  { label: "HR", value: "hr@codecladders.com", href: "mailto:hr@codecladders.com" },
  { label: "General", value: "info@codecladders.com", href: "mailto:info@codecladders.com" },
  { label: "Phone", value: "+1 (571) 474-9522", href: "tel:+15714749522" },
  { label: "Office", value: "14500 Dallas Pkwy, Dallas, TX 75254", href: null },
];

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us talk."
        description="Reach out for staffing inquiries, employer partnerships, or candidate opportunities. Our team responds within one business day."
      />

      <section className="bg-[#f5f5f7] pb-20 pt-8 sm:pb-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[22px] bg-white p-8">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f]">Get in touch</h2>
              <p className="mt-2 text-[17px] leading-7 text-[#6e6e73]">
                Ready to hire or looking for your next role? We respond quickly.
              </p>
              <ul className="mt-8 space-y-5">
                {contactDetails.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="w-16 flex-shrink-0 text-[13px] font-semibold uppercase tracking-wider text-[#86868b]">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="text-[17px] text-[#0071e3] transition-colors hover:text-[#0077ed]">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[17px] text-[#1d1d1f]">{item.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
