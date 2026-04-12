export function ContactForm() {
  return (
    <form className="card-surface grid gap-4 p-6" aria-label="Contact form">
      <label className="grid gap-2 text-sm font-medium text-[var(--color-ink-800)]">
        Full Name
        <input className="input-field" type="text" placeholder="Your name" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[var(--color-ink-800)]">
        Email
        <input className="input-field" type="email" placeholder="you@company.com" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[var(--color-ink-800)]">
        Phone
        <input className="input-field" type="tel" placeholder="(555) 987-6543" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[var(--color-ink-800)]">
        Message
        <textarea className="input-field min-h-30" placeholder="How can we help you today?" />
      </label>
      <button
        type="button"
        className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-strong)]"
      >
        Send Message
      </button>
    </form>
  );
}
