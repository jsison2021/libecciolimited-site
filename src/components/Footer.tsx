import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-display text-3xl font-semibold tracking-tight text-ink"
            >
              Libeccio<span className="text-accent">.</span>
            </Link>
            <p className="mt-6 max-w-sm text-ink-soft leading-relaxed">
              A Louisville real estate company curating a portfolio of
              distinctive properties — through disciplined acquisition,
              considered development, and attentive management.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className="label text-ink-soft">Explore</p>
            <ul className="mt-6 space-y-3">
              {[
                { href: "/properties", label: "Portfolio" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-ink hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="label text-ink-soft">Get in Touch</p>
            <address className="mt-6 space-y-3 not-italic text-ink">
              <p>Louisville, Kentucky</p>
              <p>
                <Link
                  href="/contact"
                  className="link-underline hover:text-accent"
                >
                  Send us a message →
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="rule mt-16" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-ink-soft md:flex-row">
          <p>© {year} Libeccio Limited. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
