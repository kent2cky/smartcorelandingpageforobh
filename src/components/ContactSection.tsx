import React, { useState } from 'react';
import { COMPANY } from '../data/company.ts';
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState('Web applications solutions');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Hello Smartcore Infosys!\n\nName: ${name || 'Prospective Client'}\nService: ${selectedService}\n\nProject details: ${message || 'I would like to request a quote and consultation.'}`;
    const targetUrl = `https://wa.me/${COMPANY.contact.whatsapp}?text=${encodeURIComponent(formattedText)}`;
    
    // Set confirmation
    setSentNotice(true);
    // Open WhatsApp
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-[#faf9fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#532dbe] uppercase">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14] [text-wrap:balance]">
            Let's Discuss Your Software Solution
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
            Have questions or ready to request a quote? Reach out directly through any of our channels below or send us a WhatsApp message.
          </p>
        </div>

        {/* 2-Column Grid with generous spacing and softer shadows */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct channels with soft shadows */}
          <div className="lg:col-span-5 space-y-5">
            {/* WhatsApp Card */}
            <div className="p-7 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-soft-card hover:shadow-soft-hover transition-all duration-300 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-soft-sm">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Instant Messaging
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">WhatsApp</h3>
                <p className="text-base text-slate-600 mt-1">
                  +{COMPANY.contact.whatsapp}
                </p>
                <div className="mt-3.5">
                  <a
                    href={COMPANY.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#532dbe] hover:text-[#43239e]"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-7 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-soft-card hover:shadow-soft-hover transition-all duration-300 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#532dbe] flex items-center justify-center shrink-0 shadow-soft-sm">
                <Phone className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Phone Call
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Direct Telephone</h3>
                <p className="text-base text-slate-600 mt-1">
                  {COMPANY.contact.phone} ({COMPANY.contact.phoneFormatted})
                </p>
                <div className="mt-3.5">
                  <a
                    href={COMPANY.contact.phoneTel}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#532dbe] hover:text-[#43239e]"
                  >
                    <span>Call Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-7 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-soft-card hover:shadow-soft-hover transition-all duration-300 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#532dbe] flex items-center justify-center shrink-0 shadow-soft-sm">
                <Mail className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Email Inquiries
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Official Email</h3>
                <p className="text-base text-slate-600 mt-1 truncate">
                  {COMPANY.contact.email}
                </p>
                <div className="mt-3.5">
                  <a
                    href={`mailto:${COMPANY.contact.email}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#532dbe] hover:text-[#43239e]"
                  >
                    <span>Send Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-7 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-soft-card hover:shadow-soft-hover transition-all duration-300 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#532dbe] flex items-center justify-center shrink-0 shadow-soft-sm">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Office Location
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Onitsha Office</h3>
                <p className="text-base text-slate-600 mt-1">
                  {COMPANY.contact.address}
                </p>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  Hours: {COMPANY.contact.openingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quote / WhatsApp Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-soft-card hover:shadow-soft transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Request a Tailored Quote
            </h3>
            <p className="text-base text-slate-600 mt-2 font-normal">
              Fill in your requirement below and click the button to send it directly to our engineering desk on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="client-name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Your Name or Business Name
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  placeholder="e.g. Maduka Enterprise"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 text-base focus:outline-none focus:ring-2 focus:ring-[#532dbe] focus:border-transparent transition-all bg-slate-50/50"
                />
              </div>

              <div>
                <label htmlFor="service-select" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 text-base focus:outline-none focus:ring-2 focus:ring-[#532dbe] focus:border-transparent transition-all bg-white"
                >
                  <option value="Web applications solutions">Web applications solutions (Request a quote)</option>
                  <option value="Mobile applications solutions">Mobile applications solutions (Request a quote)</option>
                  <option value="Custom made AI workflow solutions">Custom made AI workflow solutions (Request a quote)</option>
                  <option value="Training in different tech skills">Training in different tech skills (Request a quote)</option>
                  <option value="Comprehensive Enterprise Software">Comprehensive Enterprise Software (Request a quote)</option>
                </select>
              </div>

              <div>
                <label htmlFor="project-message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Brief Project Details or Questions
                </label>
                <textarea
                  id="project-message"
                  rows={4}
                  required
                  placeholder="Tell us what you want to achieve or streamline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 text-base focus:outline-none focus:ring-2 focus:ring-[#532dbe] focus:border-transparent transition-all bg-slate-50/50 resize-none"
                />
              </div>

              {sentNotice && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-sm text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Connecting to WhatsApp... If WhatsApp didn't open automatically, click the button below.</span>
                </div>
              )}

              {/* Main Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-5 text-base sm:text-lg font-bold text-white bg-[#532dbe] hover:bg-[#43239e] active:scale-[0.99] rounded-2xl shadow-soft hover:shadow-soft-hover transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span>Chat on WhatsApp</span>
              </button>

              <p className="text-center text-xs text-slate-400">
                You will be connected instantly to <span className="font-semibold text-slate-600">+{COMPANY.contact.whatsapp}</span> on WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
