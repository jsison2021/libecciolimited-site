"use client";

import { useState } from "react";

const inputClass =
  "w-full border-0 border-b border-line bg-transparent py-3 text-ink placeholder-ink-soft/60 outline-none transition-colors focus:border-accent";

const interests = [
  "Buying",
  "Leasing",
  "Selling a property",
  "Partnership",
  "General",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: interests[0],
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    const body = new URLSearchParams({
      "form-name": "contact",
      "bot-field": "",
      ...form,
    }).toString();

    try {
      // Posts to the Netlify-detected form (see public/__forms.html).
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="border border-line bg-bg-alt p-10 text-center">
        <p className="font-display text-3xl text-ink">Thank you.</p>
        <p className="mt-4 text-ink-soft">
          Your message has been received. A member of our team will be in touch
          shortly.
        </p>
        <button
          onClick={() => {
            setForm({
              name: "",
              email: "",
              phone: "",
              interest: interests[0],
              message: "",
            });
            setSent(false);
          }}
          className="label link-underline mt-8 text-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="label text-ink-soft">Full Name</span>
          <input
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Doe"
            className={`mt-3 ${inputClass}`}
          />
        </label>
        <label className="block">
          <span className="label text-ink-soft">Email</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="jane@example.com"
            className={`mt-3 ${inputClass}`}
          />
        </label>
        <label className="block">
          <span className="label text-ink-soft">Phone</span>
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="(502) 555-0123"
            className={`mt-3 ${inputClass}`}
          />
        </label>
        <label className="block">
          <span className="label text-ink-soft">I&apos;m interested in</span>
          <select
            value={form.interest}
            onChange={update("interest")}
            className={`mt-3 ${inputClass} cursor-pointer`}
          >
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="label text-ink-soft">Message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about what you're looking for…"
          className={`mt-3 resize-none ${inputClass}`}
        />
      </label>

      {error && (
        <p className="text-sm text-red-700">
          Something went wrong sending your message. Please try again, or email
          us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-dark w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
