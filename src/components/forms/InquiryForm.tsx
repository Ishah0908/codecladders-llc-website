export function InquiryForm() {
  return (
    <form className="card-surface mt-8 grid gap-4 p-6 sm:grid-cols-2" aria-label="Employer inquiry form">
      <label className="grid gap-2 text-sm font-medium text-[var(--color-ink-800)]">
        Company Name
        <input className="input-field" type="text" placeholder="Acme Corp" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[var(--color-ink-800)]">
        Hiring Contact
        <input className="input-field" type="text" placeholder="Jane Smith" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[var(--color-ink-800)] sm:col-span-2">
        Email
        <input className="input-field" type="email" placeholder="hiring@company.com" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[var(--color-ink-800)] sm:col-span-2">
        Hiring Needs
        <textarea
          className="input-field min-h-28"
          placeholder="Tell us about role types, volume, location, timeline, and urgency."
        />
      </label>
      <button
        type="button"
        className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-strong)] sm:col-span-2 sm:w-fit"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
