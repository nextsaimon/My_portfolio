import { NextResponse } from "next/server";

export async function POST(req) {
  const { formData, token } = await req.json();

  if (!token) {
    return NextResponse.json(
      { message: "No Turnstile token provided" },
      { status: 400 }
    );
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;

  const verification = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    }
  ).then((res) => res.json());

  if (!verification.success) {
    return NextResponse.json(
      { message: "Human verification failed!" },
      { status: 400 }
    );
  }

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
