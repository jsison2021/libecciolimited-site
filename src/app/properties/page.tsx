import type { Metadata } from "next";
import Image from "next/image";
import PortfolioGrid from "@/components/PortfolioGrid";
import { louisville } from "@/lib/images";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the Libeccio Limited portfolio — distinctive homes, lofts, and landmark buildings across Louisville, Kentucky.",
};

export default function PropertiesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
        <Image
          src={louisville.skylineNight.src}
          alt={louisville.skylineNight.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 text-white text-shadow-hero lg:px-10">
          <p className="label text-white/80">The Portfolio</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl font-medium leading-tight sm:text-6xl">
            Properties across Louisville
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <PortfolioGrid />
      </section>
    </>
  );
}
