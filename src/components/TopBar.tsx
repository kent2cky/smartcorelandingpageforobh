import React, { useState } from 'react';
import { COMPANY } from '../data/company.ts';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export const TopBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Hours & Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100/90 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 gap-8">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group"
          >
            <span className="w-10 h-10 rounded-xl bg-[#532dbe] flex items-center justify-center text-white shadow-soft-sm group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold text-lg">S</span>
            </span>
            <span className="text-[#532dbe] font-extrabold tracking-tight text-xl sm:text-2xl">
              Smartcore <span className="text-slate-900 font-semibold">Infosys</span>
            </span>
          </a>

          {/* Zone 2: Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#532dbe] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Main Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={COMPANY.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#532dbe] hover:bg-[#43239e] active:scale-[0.98] rounded-xl shadow-soft-sm hover:shadow-soft transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={COMPANY.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 text-white bg-[#532dbe] rounded-lg shadow-sm"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#532dbe] hover:bg-purple-50 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-purple-100 shadow-xl px-4 pt-2 pb-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-purple-50 hover:text-[#532dbe] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100">
            <a
              href={COMPANY.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-white bg-[#532dbe] hover:bg-[#43239e] rounded-xl shadow-md shadow-[#532dbe]/25 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
