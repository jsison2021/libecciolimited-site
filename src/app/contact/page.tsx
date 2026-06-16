import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Libeccio Limited to discuss buying, leasing, selling, or partnering on Louisville real estate.",
};

type Detail = {
  label: string;
  lines: string[];
  href?: string;
  placeholder?: boolean;
};

// Real contact details are not yet provided. Fill these in (and set `href`)
// when available; placeholder entries render as muted, non-clickable text.
const details: Detail[] = [
  {
    label: "Location",
    lines: ["Louisville, Kentucky"],
  },
  {
    label: "Email",
    lines: ["To be added"],
    placeholder: true,
  },
  {
    label: "Telephone",
    lines: ["To be added"],
    placeholder: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative flex h-[55vh] min-h-[380px] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716"
          alt="A Libeccio interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 text-white lg:px-10">
          <p className="label text-white/80">Contact</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl font-medium leading-tight sm:text-6xl">
            Let&apos;s begin a conversation.
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Details */}
          <div className="lg:col-span-4">
            <p className="label text-accent">Reach Us</p>
            <p className="mt-6 leading-relaxed text-ink-soft">
              Whether you&apos;re exploring a purchase, a lease, or a
              partnership, we read every message and respond personally.
            </p>
            <div className="mt-12 space-y-10">
              {details.map((d) => (
                <div key={d.label}>
                  <p className="label text-ink-soft">{d.label}</p>
                  <div className="mt-3 space-y-1">
                    {d.lines.map((line) =>
                      d.href ? (
                        <a
                          key={line}
                          href={d.href}
                          className="link-underline block text-ink hover:text-accent"
                        >
                          {line}
                        </a>
                      ) : (
                        <p
                          key={line}
                          className={
                            d.placeholder
                              ? "italic text-ink-soft/60"
                              : "text-ink"
                          }
                        >
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <div className="border border-line bg-bg-alt/40 p-8 sm:p-12">
              <h2 className="font-display text-3xl font-semibold text-ink">
                Send a message
              </h2>
              <p className="mt-2 text-ink-soft">
                Fields marked are required. We&apos;ll never share your details.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
