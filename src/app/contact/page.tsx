"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/95 to-navy-dark/80"></div>
        </div>

        {/* Decorative */}
        <div className="glow-orb glow-orb-emerald w-96 h-96 -bottom-20 right-0 opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to discuss your real estate goals? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-navy-dark/20"></div>
        <div className="glow-orb glow-orb-navy w-[500px] h-[500px] top-1/2 -left-40 opacity-10"></div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Contact Form */}
            <div>
              <div className="glass-card p-8 md:p-10">
                <h2 className="text-2xl font-serif font-bold text-white mb-8">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="glass-emerald rounded-2xl p-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-white/80">
                      Thank you for reaching out. We&apos;ll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all"
                          placeholder="(502) 555-0123"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all resize-none"
                        placeholder="Tell us about your real estate goals..."
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full btn-emerald text-lg py-4">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
