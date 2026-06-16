import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/properties";

export default function PropertyCard({
  property,
  priority = false,
}: {
  property: Property;
  priority?: boolean;
}) {
  const specs = [
    property.beds ? `${property.beds} Bed` : null,
    property.baths ? `${property.baths} Bath` : null,
    `${property.sqft.toLocaleString()} SF`,
  ].filter(Boolean);

  return (
    <Link href={`/properties/${property.slug}`} className="group block">
      <div className="img-zoom relative aspect-[4/5] bg-bg-alt">
        <Image
          src={property.hero}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
        />
        <span className="absolute left-4 top-4 bg-bg/90 px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-ink backdrop-blur">
          {property.status}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="label text-ink-soft">{property.neighborhood}</p>
          <p className="text-sm text-ink-soft">{property.type}</p>
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-accent">
          {property.name}
        </h3>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <p className="font-display text-xl text-ink">{property.price}</p>
          <p className="text-sm text-ink-soft">{specs.join(" · ")}</p>
        </div>
      </div>
    </Link>
  );
}
