"use client";

import { useState, FormEvent, useRef } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ResumeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg("Please fill in your name and email.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("role", role);
      formData.append("message", message);
      if (file) formData.append("resume", file);

      const res = await fetch("/api/resume", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
      setName(""); setEmail(""); setPhone(""); setRole(""); setMessage(""); setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
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
        <h3 className="text-[21px] font-semibold text-[#1d1d1f]">Resume submitted!</h3>
        <p className="mt-2 text-[15px] text-[#6e6e73]">
          A recruiter will review your profile and be in touch within one business day.
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
      className="grid gap-4 rounded-[22px] bg-[#f5f5f7] p-7"
      aria-label="Resume submission form"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
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
            placeholder="jane@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
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
          Desired Role
          <input
            className="input-field"
            type="text"
            placeholder="e.g. Cloud Engineer, RN"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </label>
      </div>

      <label className="grid gap-2 text-[15px] font-medium text-[#1d1d1f]">
        Cover Note <span className="text-[#86868b] font-normal">(optional)</span>
        <textarea
          className="input-field min-h-[96px] resize-y"
          placeholder="Brief intro or anything you want us to know..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      {/* File Upload */}
      <div className="grid gap-2">
        <span className="text-[15px] font-medium text-[#1d1d1f]">
          Resume / CV <span className="text-[#86868b] font-normal">(PDF, DOC, DOCX — max 5 MB)</span>
        </span>
        <label
          htmlFor="resume-file"
          className="flex cursor-pointer items-center gap-3 rounded-[12px] border-2 border-dashed border-[#d2d2d7] bg-white px-5 py-4 text-[15px] text-[#86868b] transition-colors hover:border-[#0071e3] hover:text-[#0071e3]"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M10 3v10M10 3L6.5 6.5M10 3l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 14v1a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          {file ? (
            <span className="text-[#1d1d1f]">{file.name}</span>
          ) : (
            <span>Click to attach your resume</span>
          )}
        </label>
        <input
          id="resume-file"
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="sr-only"
          onChange={(e) => {
            const selected = e.target.files?.[0];
            if (selected && selected.size > 5 * 1024 * 1024) {
              setErrorMsg("File must be 5 MB or smaller.");
              e.target.value = "";
              return;
            }
            setFile(selected ?? null);
            setErrorMsg("");
          }}
        />
      </div>

      {errorMsg && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-[14px] text-red-600" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-[#0071e3] px-6 py-3 text-[17px] font-normal text-white transition-colors hover:bg-[#0077ed] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit Resume"}
      </button>
    </form>
  );
}
