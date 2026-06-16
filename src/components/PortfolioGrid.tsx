"use client";

import { useMemo, useState } from "react";
import {
  properties,
  propertyStatuses,
  type PropertyStatus,
} from "@/lib/properties";
import PropertyCard from "./PropertyCard";

type Filter = "All" | PropertyStatus;

const filters: Filter[] = ["All", ...propertyStatuses];

export default function PortfolioGrid() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? properties
        : properties.filter((p) => p.status === active),
    [active]
  );

  // No listings yet — show a clean coming-soon state instead of empty filters.
  if (properties.length === 0) {
    return (
      <div className="border-y border-line py-28 text-center">
        <p className="label text-accent">The Portfolio</p>
        <h2 className="mt-5 font-display text-4xl font-medium text-ink sm:text-5xl">
          Listings coming soon.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-ink-soft">
          We&apos;re preparing our current portfolio for presentation. To
          discuss a property or an opportunity in the meantime, please reach
          out.
        </p>
        <a href="/contact" className="btn btn-dark mt-10">
          Make an Inquiry
        </a>
      </div>
    );
  }

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-col gap-6 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`label transition-colors ${
                active === f ? "text-accent" : "text-ink-soft hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="text-sm text-ink-soft">
          {visible.length} {visible.length === 1 ? "property" : "properties"}
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((property, i) => (
          <PropertyCard
            key={property.slug}
            property={property}
            priority={i < 3}
          />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-24 text-center text-ink-soft">
          No properties in this category at the moment.
        </p>
      )}
    </div>
  );
}
