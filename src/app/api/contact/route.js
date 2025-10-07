import { NextResponse } from "next/server";
import Turnstile from "cf-turnstile";

export const runtime = "edge";

const turnstile = Turnstile(process.env.TURNSTILE_SECRET_KEY);

export async function POST(req) {
  const { formData, token } = await req.json();

  // Check Turnstile token
  if (!token) {
    return NextResponse.json(
      { message: "No Turnstile token provided" },
      { status: 400 }
    );
  }

  const verification = await turnstile(token);
  if (!verification.success) {
    return NextResponse.json(
      { message: "Human verification failed!" },
      { status: 400 }
    );
  }

  // Validate form data
  if (
    !formData ||
    !formData.name?.trim() ||
    !formData.email?.trim() ||
    !formData.subject?.trim() ||
    !formData.message?.trim()
  ) {
    return NextResponse.json(
      { message: "All form fields are required!" },
      { status: 400 }
    );
  }

  // Submit to Google Form
  try {
    const formUrl = process.env.GOOGLE_SUBMIT_FORM_URL;

    const params = new URLSearchParams({
      [process.env.GOOGLE_ENTRY_NAME]: formData.name,
      [process.env.GOOGLE_ENTRY_EMAIL]: formData.email,
      [process.env.GOOGLE_ENTRY_SUBJECT]: formData.subject,
      [process.env.GOOGLE_ENTRY_MESSAGE]: formData.message,
    });

    await fetch(`${formUrl}?${params.toString()}`, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    return NextResponse.json({ message: "Form submitted successfully!" });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to submit form. Try again." },
      { status: 500 }
    );
  }
}
