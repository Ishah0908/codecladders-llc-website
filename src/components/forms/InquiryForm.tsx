"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function InquiryForm() {
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [needs, setNeeds] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!company.trim() || !email.trim() || !needs.trim()) {
      setErrorMsg("Please fill in company name, email, and hiring needs.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${contact || "Employer"} (${company})`,
          email,
          phone: "",
          message: `Employer Inquiry\nCompany: ${company}\nContact: ${contact}\nHiring Needs: ${needs}`,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("success");
      setCompany(""); setContact(""); setEmail(""); setNeeds("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 flex flex-col items-center justify-center rounded-[22px] bg-[#f5f5f7] p-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0071e3]">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
            <path d="M6 14.5l5.5 5.5 10.5-11" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-[21px] font-semibold text-[#1d1d1f]">Inquiry received!</h3>
        <p className="mt-2 text-[15px] text-[#6e6e73]">
          Our team will reach out with a custom staffing strategy within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-[#0071e3] px-6 py-2 text-[15px] text-white transition-colors hover:bg-[#0077ed]"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 grid gap-4 rounded-[22px] bg-[#f5f5f7] p-7 sm:grid-cols-2"
      aria-label="Employer inquiry form"
      noValidate
    >
      <label className="grid gap-2 text-[15px] font-medium text-[#1d1d1f]">
        Company Name <span className="text-[#0071e3]">*</span>
        <input
          className="input-field"
          type="text"
          placeholder="Acme Corp"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </label>

      <label className="grid gap-2 text-[15px] font-medium text-[#1d1d1f]">
        Hiring Contact
        <input
          className="input-field"
          type="text"
          placeholder="Jane Smith"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>

      <label className="col-span-full grid gap-2 text-[15px] font-medium text-[#1d1d1f]">
        Email <span className="text-[#0071e3]">*</span>
        <input
          className="input-field"
          type="email"
          placeholder="hiring@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="col-span-full grid gap-2 text-[15px] font-medium text-[#1d1d1f]">
        Hiring Needs <span className="text-[#0071e3]">*</span>
        <textarea
          className="input-field min-h-[112px] resize-y"
          placeholder="Role type, volume, location, timeline, urgency…"
          value={needs}
          onChange={(e) => setNeeds(e.target.value)}
          required
        />
      </label>

      {errorMsg && (
        <p className="col-span-full rounded-xl bg-red-50 px-4 py-3 text-[14px] text-red-600" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="col-span-full w-fit rounded-full bg-[#0071e3] px-6 py-3 text-[17px] font-normal text-white transition-colors hover:bg-[#0077ed] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting…" : "Submit Inquiry"}
      </button>
    </form>
  );
}

