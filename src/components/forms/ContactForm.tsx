"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("success");
      setName(""); setEmail(""); setPhone(""); setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-[22px] bg-[#f5f5f7] p-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0071e3]">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
            <path d="M6 14.5l5.5 5.5 10.5-11" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-[21px] font-semibold text-[#1d1d1f]">Message sent!</h3>
        <p className="mt-2 text-[15px] text-[#6e6e73]">
          We&apos;ll be in touch within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-[#0071e3] px-6 py-2 text-[15px] text-white transition-colors hover:bg-[#0077ed]"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-[22px] bg-[#f5f5f7] p-7"
      aria-label="Contact form"
      noValidate
    >
      <label className="grid gap-2 text-[15px] font-medium text-[#1d1d1f]">
        Full Name <span className="text-[#0071e3]">*</span>
        <input
          className="input-field"
          type="text"
          placeholder="Jane Smith"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label className="grid gap-2 text-[15px] font-medium text-[#1d1d1f]">
        Email <span className="text-[#0071e3]">*</span>
        <input
          className="input-field"
          type="email"
          placeholder="jane@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="grid gap-2 text-[15px] font-medium text-[#1d1d1f]">
        Phone <span className="text-[#86868b] font-normal">(optional)</span>
        <input
          className="input-field"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>

      <label className="grid gap-2 text-[15px] font-medium text-[#1d1d1f]">
        Message <span className="text-[#0071e3]">*</span>
        <textarea
          className="input-field min-h-[120px] resize-y"
          placeholder="Tell us how we can help…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>

      {errorMsg && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-[14px] text-red-600" role="alert">
          {errorMsg}
        </p>
      )}

      {status === "error" && !errorMsg && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-[14px] text-red-600" role="alert">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-[#0071e3] px-6 py-3 text-[17px] font-normal text-white transition-colors hover:bg-[#0077ed] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

