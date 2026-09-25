import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!body.name || !body.email || !body.subject || !body.message) {
    return NextResponse.json({ message: "All fields are required." }, { status: 400 });
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email);
  if (!isValidEmail) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (body.message.trim().length < 20) {
    return NextResponse.json({ message: "Message should be at least 20 characters." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT ?? 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465;
  const contactTo = process.env.CONTACT_EMAIL_TO ?? smtpUser;
  const fromAddress = process.env.CONTACT_EMAIL_FROM ?? smtpUser;

  if (!smtpUser || !smtpPass || !contactTo || !fromAddress) {
    return NextResponse.json(
      {
        message:
          "Contact email is not configured yet. Add SMTP_USER, SMTP_PASS, and CONTACT_EMAIL_TO in your environment.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: contactTo,
      replyTo: body.email.trim(),
      subject: `Portfolio Contact: ${body.subject.trim()}`,
      text: [
        `Name: ${body.name.trim()}`,
        `Email: ${body.email.trim()}`,
        `Subject: ${body.subject.trim()}`,
        "",
        body.message.trim(),
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 16px;">New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(body.name.trim())}</p>
          <p><strong>Email:</strong> ${escapeHtml(body.email.trim())}</p>
          <p><strong>Subject:</strong> ${escapeHtml(body.subject.trim())}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(body.message.trim())}</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Contact email failed:", error);
    return NextResponse.json(
      { message: "Unable to send the message right now. Please try again after checking the email configuration." },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: "Thanks, your message has been sent successfully. I will get back to you soon." });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
