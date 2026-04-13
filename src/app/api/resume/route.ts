import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const role = (formData.get("role") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";
  const resumeFile = formData.get("resume") as File | null;

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (resumeFile && resumeFile.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "File must be 5 MB or smaller." }, { status: 400 });
  }

  const bodyText = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Desired Role: ${role || "Not specified"}`,
    ``,
    message ? `Cover Note:\n${message}` : "No cover note provided.",
    resumeFile ? `\nResume attached: ${resumeFile.name}` : "\nNo resume file attached.",
  ].join("\n");

  // Send via Resend when RESEND_API_KEY env var is set in Vercel
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      type Attachment = { filename: string; content: string };
      const attachments: Attachment[] = [];

      if (resumeFile) {
        const buffer = await resumeFile.arrayBuffer();
        attachments.push({
          filename: resumeFile.name,
          content: Buffer.from(buffer).toString("base64"),
        });
      }

      await resend.emails.send({
        from: "CodeCladders Website <noreply@codecladders.com>",
        to: ["hr@codecladders.com"],
        replyTo: email,
        subject: `Resume Submission — ${name}${role ? ` (${role})` : ""}`,
        text: bodyText,
        attachments,
      });
    } catch (err) {
      console.error("[resume] Resend error:", err);
      return NextResponse.json(
        { error: "Failed to submit. Please email hr@codecladders.com directly." },
        { status: 500 }
      );
    }
  } else {
    // Dev mode — log only
    console.log("[resume] Submission received (set RESEND_API_KEY to send emails):", {
      name,
      email,
      phone,
      role,
      message,
      hasFile: !!resumeFile,
      fileName: resumeFile?.name,
    });
  }

  return NextResponse.json({ success: true });
}
