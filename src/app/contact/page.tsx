"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Louisville, Kentucky",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "info@libecciolimited.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "(502) 555-0100",
    },
  ];

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
            <div className="inline-block glass-emerald px-4 py-2 rounded-full mb-6">
              <span className="text-white text-sm font-semibold tracking-wider uppercase">
                Get In Touch
              </span>
            </div>
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5rem' }}
                      >
                        <option value="" className="bg-navy-dark">Select a topic</option>
                        <option value="acquisition" className="bg-navy-dark">Property Acquisition</option>
                        <option value="development" className="bg-navy-dark">Development Partnership</option>
                        <option value="management" className="bg-navy-dark">Property Management</option>
                        <option value="investment" className="bg-navy-dark">Investment Opportunities</option>
                        <option value="other" className="bg-navy-dark">Other</option>
                      </select>
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

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((item) => (
                <div key={item.label} className="glass-card p-6 flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald/20 flex items-center justify-center text-emerald group-hover:bg-emerald/30 transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
