import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />

      {/* Louisville Section */}
      <section className="snap-section py-20 sm:py-32 relative overflow-hidden flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center lg:bg-fixed"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-navy-dark/90"></div>
        </div>

        {/* Decorative elements */}
        <div className="glow-orb glow-orb-emerald w-96 h-96 -top-20 right-1/4 opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Card */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card overflow-hidden">
                <div
                  className="h-80 lg:h-[450px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop')`,
                  }}
                ></div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-navy-dark border border-emerald/50 p-4 sm:p-6 rounded-2xl">
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1">Louisville</div>
                <div className="text-emerald text-xs sm:text-sm">Kentucky • Est. 1778</div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Rooted in <span className="text-gradient">Louisville</span>
              </h2>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Louisville is more than our headquarters—it&apos;s our home. We
                understand the unique character of our neighborhoods, the pulse
                of our markets, and the needs of our community.
              </p>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Our local expertise and deep market knowledge allow us to
                identify opportunities others miss and create value where others
                see challenges.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Local Market Expertise",
                  "Community Focused",
                  "Strategic Locations",
                  "Growth Oriented",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-glass inline-flex items-center gap-2">
                Learn Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="snap-section py-20 sm:py-32 relative overflow-hidden flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/95 to-navy-dark/80"></div>
        </div>

        {/* Decorative */}
        <div className="glow-orb glow-orb-emerald w-[600px] h-[600px] -bottom-40 -right-40 opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block glass-emerald px-4 py-2 rounded-full mb-6">
              <span className="text-white text-sm font-semibold tracking-wider uppercase">
                Get Started
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Ready to Build Your
              <span className="text-gradient block mt-2">Real Estate Legacy?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Whether you&apos;re looking to invest, develop, or need professional
              property management, we&apos;re here to help you succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-emerald text-lg">
                Start a Conversation
              </Link>
              <Link href="/about" className="btn-glass text-lg">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
