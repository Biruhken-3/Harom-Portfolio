"use server";

/**
 * Contact form submission handler.
 * Validates input server-side and returns a result to the client form.
 * Plug in an email service (Resend, Nodemailer, SendGrid, ...) inside
 * `deliver()` when credentials are available.
 */

export type ContactResult = { ok: boolean; message: string };

export async function sendMessage(
  _prev: ContactResult | null,
  formData: FormData,
): Promise<ContactResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length < 2) {
    return { ok: false, message: "Please enter your full name." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (!subject) {
    return { ok: false, message: "Please add a subject line." };
  }
  if (message.length < 10) {
    return { ok: false, message: "Your message should be at least 10 characters." };
  }

  // Deliver the message — replace with a real email service integration.
  console.log("New contact message:", { name, email, subject, message });

  return {
    ok: true,
    message: `Thank you, ${name}. Your message has been received and Dr. Harom will get back to you soon.`,
  };
}
