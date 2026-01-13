"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "glass-dark py-3"
          : "py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group" onClick={scrollToTop}>
            <span className="text-2xl font-serif font-bold text-white transition-all group-hover:text-emerald">
              Libeccio
            </span>
            <span className="text-2xl font-serif font-bold text-gradient">
              Limited
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className="relative px-5 py-2 text-white/80 hover:text-white font-medium transition-all group"
              onClick={scrollToTop}
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/10 transition-all"></div>
            </Link>
            <Link
              href="/about"
              className="relative px-5 py-2 text-white/80 hover:text-white font-medium transition-all group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/10 transition-all"></div>
            </Link>
            <Link
              href="/contact"
              className="ml-4 btn-emerald py-2.5 px-6 text-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-card p-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 font-medium transition-all"
              onClick={(e) => { scrollToTop(e); setMobileMenuOpen(false); }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 font-medium transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block btn-emerald text-center py-3 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
