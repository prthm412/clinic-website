import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, preferredTime, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const notifyEmail = process.env.NOTIFY_EMAIL;
    if (!notifyEmail) {
      console.error("NOTIFY_EMAIL is not set");
      return NextResponse.json(
        { error: "Server is not configured to send notifications." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "The2Physios Website <onboarding@resend.dev>",
      to: notifyEmail,
      subject: `New booking request from ${name}`,
      text: `
New booking request from the website:

Name: ${name}
Phone: ${phone}
Service interested in: ${service || "Not specified"}
Preferred time: ${preferredTime || "Not specified"}
Message: ${message || "None"}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking email failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}