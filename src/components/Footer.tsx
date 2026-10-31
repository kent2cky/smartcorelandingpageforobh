import React from 'react';
import { COMPANY } from '../data/company.ts';
import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-24 pb-16 border-t border-purple-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 border-b border-slate-800/60">
          {/* Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#532dbe] flex items-center justify-center text-white font-extrabold text-lg shadow-soft-sm">
                S
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Smartcore <span className="text-[#9c7ef7]">Infosys</span>
              </span>
            </div>

            <p className="text-base text-slate-400 leading-relaxed max-w-sm font-normal">
              We build customized software solutions that help individuals and businesses streamline workflows and make more money.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3.5">
              <a
                href={COMPANY.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#532dbe] hover:border-[#532dbe] transition-all duration-200"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={COMPANY.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#532dbe] hover:border-[#532dbe] transition-all duration-200"
                aria-label="Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={COMPANY.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-200"
                aria-label="WhatsApp chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-base text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Hours & Location
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Contact & Address
            </h4>
            <div className="space-y-3 text-base text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9c7ef7] shrink-0 mt-0.5" />
                <span>{COMPANY.contact.address}, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#9c7ef7] shrink-0" />
                <a href={COMPANY.contact.phoneTel} className="hover:text-white transition-colors">
                  {COMPANY.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#9c7ef7] shrink-0" />
                <a href={`mailto:${COMPANY.contact.email}`} className="hover:text-white transition-colors truncate">
                  {COMPANY.contact.email}
                </a>
              </div>
              <div className="pt-2 text-sm text-slate-500 font-normal">
                Operating Hours: {COMPANY.contact.openingHours} ({COMPANY.contact.daysOpen})
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {currentYear} Smartcore Infosys. All rights reserved.</p>
          <p>
            Serving Onitsha, Anambra State, Nigeria and clients worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};
