import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-dark"></div>
      <div className="glow-orb glow-orb-emerald w-96 h-96 -bottom-40 -left-40 opacity-10"></div>

      <div className="relative">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center text-center">
            {/* Company Info */}
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-serif font-bold text-white">
                Libeccio
              </span>
              <span className="text-3xl font-serif font-bold text-gradient">
                Limited
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Louisville&apos;s trusted partner in real estate acquisition,
              development, and management. Building tomorrow&apos;s legacy today.
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <svg className="w-5 h-5 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Louisville, Kentucky</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} Libeccio Limited. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
