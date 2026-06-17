import Image from "next/image";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { getFeatured } from "@/lib/properties";
import { louisville } from "@/lib/images";

const approach = [
  {
    number: "01",
    title: "Acquisition",
    body: "We identify properties with enduring fundamentals — location, character, and the latent potential others overlook. Every acquisition is underwritten with discipline and a long horizon.",
  },
  {
    number: "02",
    title: "Development",
    body: "We bring buildings to their highest and best use, balancing architectural integrity with the demands of modern living. Restoration and new construction held to a single standard.",
  },
  {
    number: "03",
    title: "Management",
    body: "We steward each asset for the long term — operations, leasing, and care handled with the same attention we give acquisition, protecting both value and community.",
  },
];

export default function Home() {
  const featured = getFeatured();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <Image
          src={louisville.skylineNight.src}
          alt={louisville.skylineNight.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
          <div className="fade-up max-w-3xl text-white">
            <p className="label text-white/80">Louisville, Kentucky</p>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
              Distinctive places,
              <br />
              held for the long term.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-white/85">
              A curated portfolio of homes, lofts, and landmark buildings across
              Louisville&apos;s most storied neighborhoods.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/properties" className="btn btn-ghost">
                View the Portfolio
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Make an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATEMENT ===== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="label text-accent">Our Philosophy</p>
          </div>
          <div className="lg:col-span-8">
            <p className="font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
              We believe a city&apos;s character lives in its buildings — and in
              the people they hold. Our work is to preserve that character while
              creating value that lasts generations.
            </p>
            <Link
              href="/about"
              className="label link-underline mt-10 inline-block text-accent"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED / COMING SOON ===== */}
      <section className="bg-bg-alt py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {featured.length > 0 ? (
            <>
              <div className="flex items-end justify-between border-b border-line pb-8">
                <div>
                  <p className="label text-accent">Selected Works</p>
                  <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
                    Featured Properties
                  </h2>
                </div>
                <Link
                  href="/properties"
                  className="label link-underline hidden text-ink sm:inline-block"
                >
                  All Properties →
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((property, i) => (
                  <PropertyCard
                    key={property.slug}
                    property={property}
                    priority={i < 3}
                  />
                ))}
              </div>

              <Link
                href="/properties"
                className="btn btn-outline mt-14 w-full sm:hidden"
              >
                All Properties
              </Link>
            </>
          ) : (
            <div className="mx-auto max-w-2xl text-center">
              <p className="label text-accent">The Portfolio</p>
              <h2 className="mt-5 font-display text-4xl font-medium text-ink sm:text-5xl">
                Our portfolio is coming soon.
              </h2>
              <p className="mt-5 leading-relaxed text-ink-soft">
                We&apos;re preparing a selection of our current properties for
                presentation. To discuss an opportunity in the meantime, we
                would be glad to hear from you.
              </p>
              <Link href="/contact" className="btn btn-dark mt-10">
                Make an Inquiry
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ===== APPROACH ===== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="label text-accent">What We Do</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            A single standard, three disciplines.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {approach.map((item) => (
            <div key={item.number} className="bg-bg p-10">
              <p className="font-display text-5xl font-medium text-line">
                {item.number}
              </p>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== LOUISVILLE ===== */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="img-zoom relative aspect-[4/3] bg-bg-alt">
            <Image
              src={louisville.oldLouisville.src}
              alt={louisville.oldLouisville.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="label text-accent">Rooted Here</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Louisville is not a market to us. It is home.
            </h2>
            <p className="mt-6 leading-relaxed text-ink-soft">
              From the Victorian boulevards of Old Louisville to the warehouses
              of NuLu and the riverfront of Portland, we know these
              neighborhoods block by block. That fluency lets us see opportunity
              where others see risk — and act with conviction.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                "Old Louisville",
                "NuLu / East Market",
                "Butchertown",
                "Crescent Hill",
                "The Highlands",
                "Portland",
              ].map((n) => (
                <div key={n} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-sm text-ink">{n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden">
        <Image
          src={louisville.skylineDusk.src}
          alt={louisville.skylineDusk.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center text-white lg:py-36">
          <p className="label text-white/80">Begin a Conversation</p>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            Whether buying, leasing, or partnering — we would be glad to talk.
          </h2>
          <Link href="/contact" className="btn btn-ghost mt-10">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
