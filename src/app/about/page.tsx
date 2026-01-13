import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Libeccio Limited",
  description:
    "Learn about Libeccio Limited, a Louisville-based real estate company focused on acquisition, development, and management.",
};

const values = [
  {
    title: "Integrity",
    description: "We build lasting relationships through honest, transparent dealings with all stakeholders.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "We pursue the highest standards in every acquisition, development, and management decision.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Community",
    description: "We believe our success is tied to the success of Louisville and its neighborhoods.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We embrace creative solutions to unlock value and meet evolving market needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const pillarsDetailed = [
  {
    number: "01",
    title: "Acquisition",
    description: "We identify and secure properties with strong fundamentals and growth potential. Our acquisition strategy focuses on undervalued assets, emerging neighborhoods, and properties where our expertise can unlock hidden value. Every acquisition undergoes rigorous due diligence to ensure alignment with our investment criteria.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Development",
    description: "We transform properties into their highest and best use. Whether through renovation, repositioning, or ground-up development, we create spaces that serve modern needs while respecting community character. Our development approach balances aesthetic appeal, functional design, and financial returns.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Management",
    description: "We protect and grow asset value through professional property management. Our hands-on approach ensures operational excellence, tenant satisfaction, and sustained performance. From maintenance to tenant relations, we handle every detail so our investors can focus on their broader goals.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/95 to-navy-dark/80"></div>
        </div>

        {/* Decorative */}
        <div className="glow-orb glow-orb-emerald w-96 h-96 -top-20 right-0 opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-block glass-emerald px-4 py-2 rounded-full mb-6">
              <span className="text-white text-sm font-semibold tracking-wider uppercase">
                Our Story
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
              About <span className="text-gradient">Libeccio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Building Louisville&apos;s real estate future through strategic
              vision, local expertise, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-navy-dark/30"></div>
        <div className="glow-orb glow-orb-navy w-[500px] h-[500px] -bottom-40 -left-40 opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-block glass px-4 py-2 rounded-full mb-6">
                <span className="text-emerald text-sm font-semibold tracking-wider uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Libeccio Limited was founded with a singular vision: to
                  transform Louisville&apos;s real estate landscape through
                  strategic acquisition, thoughtful development, and professional
                  management.
                </p>
                <p>
                  Named after the warm Mediterranean wind, Libeccio represents our
                  approach to real estate—bringing fresh perspectives and positive
                  change to every property we touch.
                </p>
                <p className="text-gray-400">
                  Our deep roots in Louisville give us an unparalleled
                  understanding of local markets, neighborhoods, and communities.
                  We don&apos;t just invest in properties—we invest in
                  Louisville&apos;s future.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="glass-card overflow-hidden">
                <div
                  className="h-[500px] bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop')`,
                  }}
                >
                  <div className="absolute inset-0 bg-navy-dark/40"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-navy-dark/95 backdrop-blur-sm border border-emerald/50 p-6 rounded-2xl">
                <div className="text-sm text-emerald mb-1">Founded in</div>
                <div className="text-3xl font-bold text-white">Louisville, KY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-navy-dark/95"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-8 text-center group">
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-emerald/20 flex items-center justify-center text-emerald group-hover:bg-emerald/30 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/30 to-background"></div>
        <div className="glow-orb glow-orb-emerald w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto">
            <div className="inline-block glass-emerald px-4 py-2 rounded-full mb-8">
              <span className="text-white text-sm font-semibold tracking-wider uppercase">
                Our Mission
              </span>
            </div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-serif italic leading-relaxed mb-8">
              &ldquo;To create lasting value for our investors, tenants, and
              communities through strategic real estate acquisition, thoughtful
              development, and exceptional property management.&rdquo;
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald to-emerald-light mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Three Pillars Detailed */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-background"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              What We <span className="text-gradient">Do</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive approach to real estate value creation.
            </p>
          </div>

          <div className="space-y-24">
            {pillarsDetailed.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="glass-emerald w-16 h-16 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-serif font-bold text-white">
                        {pillar.number}
                      </span>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                  <div className="glass p-6 rounded-2xl inline-flex items-center gap-4">
                    <div className="text-emerald">{pillar.icon}</div>
                    <span className="text-gray-300">
                      Excellence in {pillar.title.toLowerCase()}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="glass-card overflow-hidden">
                    <div
                      className="h-80 lg:h-[400px] bg-cover bg-center"
                      style={{ backgroundImage: `url('${pillar.image}')` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-background"></div>
        <div className="glow-orb glow-orb-emerald w-[500px] h-[500px] -bottom-40 right-0 opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to <span className="text-gradient">Partner</span> With Us?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how we can help you achieve your real estate goals.
          </p>
          <Link href="/contact" className="btn-emerald text-lg inline-block">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
