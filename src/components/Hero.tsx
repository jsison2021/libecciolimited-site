import Link from "next/link";

export default function Hero() {
  return (
    <section className="snap-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy-dark/85 to-navy/80"></div>
      </div>

      {/* Animated Glow Orbs */}
      <div className="glow-orb glow-orb-emerald w-96 h-96 -top-20 -right-20 animate-pulse-glow"></div>
      <div className="glow-orb glow-orb-navy w-[500px] h-[500px] -bottom-40 -left-40 animate-pulse-glow"></div>
      <div className="glow-orb glow-orb-emerald w-64 h-64 top-1/2 right-1/4 animate-float opacity-20"></div>

      {/* Floating Glass Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 glass rounded-3xl animate-float opacity-30 hidden lg:block"></div>
      <div className="absolute bottom-32 right-20 w-20 h-20 glass rounded-2xl animate-float-delayed opacity-20 hidden lg:block"></div>
      <div className="absolute top-40 left-10 w-24 h-24 glass rounded-full animate-float-delayed opacity-20 hidden lg:block"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-10 leading-tight">
              <span className="text-gradient text-glow">Preserving Place.</span>
              <span className="block">Building Community.</span>
            </h1>

            <Link href="/about" className="btn-emerald text-lg text-center inline-block">
              Discover Our Approach
            </Link>

            {/* Stats */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-gradient">Since 1880</div>
            </div>
          </div>

          {/* Right Column - Glass Card */}
          <div className="hidden lg:block relative">
            <div className="glass-card p-8 relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-6 text-white">
                Our Three Pillars
              </h3>

              <div className="space-y-6">
                {/* Acquisition */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald/30 transition-colors">
                    <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Acquisition</h4>
                    <p className="text-gray-400 text-sm">Strategic property identification and securing high-value opportunities.</p>
                  </div>
                </div>

                {/* Development */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald/30 transition-colors">
                    <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Development</h4>
                    <p className="text-gray-400 text-sm">Transforming properties to their highest potential value.</p>
                  </div>
                </div>

                {/* Management */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald/30 transition-colors">
                    <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Management</h4>
                    <p className="text-gray-400 text-sm">Professional oversight ensuring sustained asset performance.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Decorative elements behind card */}
            <div className="absolute -top-4 -right-4 w-full h-full glass rounded-3xl opacity-30"></div>
            <div className="absolute -top-8 -right-8 w-full h-full glass rounded-3xl opacity-15"></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>

    </section>
  );
}
