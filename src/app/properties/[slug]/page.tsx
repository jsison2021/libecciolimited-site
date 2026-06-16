import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProperty,
  properties,
  type Property,
} from "@/lib/properties";
import PropertyCard from "@/components/PropertyCard";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: "Property Not Found" };

  return {
    title: property.name,
    description: property.summary,
    openGraph: {
      title: `${property.name} — Libeccio Limited`,
      description: property.summary,
      images: [property.hero],
    },
  };
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="label text-ink-soft">{label}</p>
      <p className="mt-2 font-display text-2xl text-ink">{value}</p>
    </div>
  );
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const facts: { label: string; value: string }[] = [
    { label: "Type", value: property.type },
    { label: "Year", value: String(property.year) },
    ...(property.beds ? [{ label: "Bedrooms", value: String(property.beds) }] : []),
    ...(property.baths ? [{ label: "Baths", value: String(property.baths) }] : []),
    { label: "Interior", value: `${property.sqft.toLocaleString()} SF` },
    ...(property.lot ? [{ label: "Lot", value: property.lot }] : []),
  ];

  const more = properties.filter((p) => p.slug !== property.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[80vh] min-h-[520px] items-end overflow-hidden">
        <Image
          src={property.hero}
          alt={property.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 text-white lg:px-10">
          <span className="bg-bg/90 px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-ink">
            {property.status}
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-tight sm:text-6xl">
            {property.name}
          </h1>
          <p className="mt-4 text-lg text-white/85">{property.address}</p>
        </div>
      </section>

      {/* Summary bar */}
      <section className="border-b border-line bg-bg-alt">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <Link
            href="/properties"
            className="label link-underline text-ink-soft hover:text-accent"
          >
            ← Back to Portfolio
          </Link>
          <p className="font-display text-3xl text-ink">{property.price}</p>
        </div>
      </section>

      {/* Facts */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {facts.map((f) => (
            <Fact key={f.label} {...f} />
          ))}
        </div>
      </section>

      {/* Description + features */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-t border-line pt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="label text-accent">About This Property</p>
            <div className="mt-6 space-y-6">
              {property.description.map((para, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-ink-soft ${
                    i === 0
                      ? "font-display text-2xl leading-snug text-ink"
                      : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="label text-accent">Features</p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {property.features.map((f) => (
                <li key={f} className="flex items-center gap-4 py-4 text-ink">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-dark mt-8 w-full">
              Inquire About This Property
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {property.gallery.map((src, i) => (
            <div
              key={src}
              className={`img-zoom relative aspect-[4/3] bg-bg-alt ${
                i === 0 ? "sm:col-span-2 sm:aspect-[16/9] lg:col-span-2" : ""
              }`}
            >
              <Image
                src={src}
                alt={`${property.name} — view ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* More */}
      <MoreProperties items={more} />
    </>
  );
}

function MoreProperties({ items }: { items: Property[] }) {
  return (
    <section className="bg-bg-alt py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between border-b border-line pb-8">
          <h2 className="font-display text-4xl font-semibold text-ink">
            More from the Portfolio
          </h2>
          <Link
            href="/properties"
            className="label link-underline hidden text-ink sm:inline-block"
          >
            View All →
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
