import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  // Send via Resend when RESEND_API_KEY is configured in Vercel environment variables
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "CodeCladders Website <info@codecladders.com>",
        to: ["hr@codecladders.com", "info@codecladders.com"],
        replyTo: email,
        subject: `New message from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "Not provided"}`,
          ``,
          `Message:`,
          message,
        ].join("\n"),
      });
    } catch (err) {
      console.error("[contact] Resend error:", err);
      return NextResponse.json(
        { error: "Failed to send message. Please try again or email us directly." },
        { status: 500 }
      );
    }
  } else {
    // Log in dev / when key is not yet set — form still returns success for UX
    console.log("[contact] Message received (add RESEND_API_KEY to send emails):", {
      name,
      email,
      phone,
      message,
    });
  }

  return NextResponse.json({ success: true });
}
