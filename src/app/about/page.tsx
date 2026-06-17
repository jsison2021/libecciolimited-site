import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { louisville } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Libeccio Limited is a locally held Louisville real estate company preserving the city's architectural character while building lasting value.",
};

const values = [
  {
    title: "Integrity",
    body: "Honest, transparent dealings with every owner, tenant, and neighbor. Our word is the foundation of the portfolio.",
  },
  {
    title: "Permanence",
    body: "We buy to hold. Decisions are measured in decades, not quarters, and judged by what we leave behind.",
  },
  {
    title: "Place",
    body: "A building is part of a street, a block, a community. We develop in service of the place, not at its expense.",
  },
  {
    title: "Craft",
    body: "From structural systems to door hardware, the details are the difference. We hold every project to one standard.",
  },
];

const principles = [
  "Preserving our collective architectural past for a shared, successful future.",
  "Recognizing that the physical DNA of a city is its buildings — and its people.",
  "Securing our city's infrastructure and saving Place for residents and guests.",
  "Welcoming visitors, and earning their residence within our community.",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[70vh] min-h-[480px] items-end overflow-hidden">
        <Image
          src={louisville.skylineDusk.src}
          alt={louisville.skylineDusk.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 text-white lg:px-10">
          <p className="label text-white/80">About Libeccio</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-tight sm:text-6xl">
            Welcome home to Louisville.
          </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="label text-accent">Why We Exist</p>
          </div>
          <div className="space-y-6 lg:col-span-8">
            {principles.map((p) => (
              <p
                key={p}
                className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-bg-alt py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="img-zoom relative aspect-[4/5] bg-bg">
              <Image
                src={louisville.oldLouisville.src}
                alt={louisville.oldLouisville.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="label text-accent">Our Story</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                A local company, built for the long view.
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Libeccio Limited was founded on a simple conviction: that
                  Louisville&apos;s greatest asset is its built fabric, and that
                  caring for it well is both a civic responsibility and a sound
                  investment.
                </p>
                <p>
                  We acquire, develop, and manage property with the patience of
                  an owner who intends to stay — working at a neighborhood scale
                  and holding ourselves accountable to the places we invest in.
                </p>
                <p>
                  We don&apos;t simply invest in buildings. We invest in
                  Louisville&apos;s future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="label text-accent">What Guides Us</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Four values, applied without exception.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {values.map((v, i) => (
            <div key={v.title} className="bg-bg p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-line">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {v.title}
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-ink-soft">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image
          src={louisville.skylineNight.src}
          alt={louisville.skylineNight.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center text-white lg:py-36">
          <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
            Explore what we&apos;ve built — and what comes next.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/properties" className="btn btn-ghost">
              View the Portfolio
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
