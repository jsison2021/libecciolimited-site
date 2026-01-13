const pillars = [
  {
    number: "01",
    title: "Acquisition",
    description:
      "We identify and secure high-potential properties across Louisville. Our strategic approach focuses on value, location, and long-term growth opportunities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Development",
    description:
      "We transform properties into their highest potential. Through thoughtful renovation, we create spaces that serve communities and generate returns.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Management",
    description:
      "We protect and grow your investment. Our professional property management ensures operational excellence and sustained asset value.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Pillars() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-dark/50 to-background"></div>

      {/* Decorative orbs */}
      <div className="glow-orb glow-orb-emerald w-80 h-80 top-20 -left-40 opacity-20"></div>
      <div className="glow-orb glow-orb-navy w-96 h-96 bottom-20 -right-40 opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block glass px-4 py-2 rounded-full mb-6">
            <span className="text-emerald text-sm font-semibold tracking-wider uppercase">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            A Proven <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three integrated disciplines working together to maximize value at every stage of the real estate lifecycle.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="group relative">
              {/* Card */}
              <div className="glass-card overflow-hidden h-full">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${pillar.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent"></div>

                  {/* Number badge */}
                  <div className="absolute top-4 left-4 glass-emerald w-14 h-14 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-serif font-bold text-white">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-emerald border border-white/20">
                    {pillar.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-emerald transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Learn more link */}
                  <div className="mt-6 flex items-center gap-2 text-emerald opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Connector arrows between cards (desktop only) */}
              {index < pillars.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Flow Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent -z-10"></div>
      </div>
    </section>
  );
}
