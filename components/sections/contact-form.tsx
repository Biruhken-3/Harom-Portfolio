"use client";

import { useActionState } from "react";
import { sendMessage, type ContactResult } from "@/lib/actions";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20";

export function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactResult | null, FormData>(
    sendMessage,
    null,
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {state && (
        <p
          className={`rounded-xl px-4 py-3 text-sm ${
            state.ok
              ? "bg-teal/10 text-teal ring-1 ring-teal/30"
              : "bg-red-500/10 text-red-600 ring-1 ring-red-500/30"
          }`}
          role="status"
        >
          {state.message}
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Full Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Consultation, collaboration, speaking invite..."
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Write your message here..."
          className={`${inputClasses} resize-y`}
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
