import React, { useState } from 'react';
import { COMPANY } from '../data/company.ts';
import { Clock, MapPin, Copy, Check, Navigation, MessageCircle, Phone } from 'lucide-react';

export const HoursAndLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${COMPANY.contact.address}, Nigeria`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '39 New Market Road, Onitsha, Anambra State, Nigeria'
  )}`;

  return (
    <section id="location" className="py-24 sm:py-32 lg:py-40 bg-white border-t border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with larger typography and space */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#532dbe] uppercase">
            <span>Visit Or Consult</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14] [text-wrap:balance]">
            Opening Hours & Location
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
            Meet our team at our Onitsha office or connect with us directly via phone and WhatsApp.
          </p>
        </div>

        {/* 2-Column Info & Location Grid with soft shadows and generous whitespace */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          {/* Card 1: Operating Hours (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-white rounded-3xl border border-slate-100 shadow-soft-card hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#532dbe]/10 text-[#532dbe] flex items-center justify-center mb-8 shadow-soft-sm">
                <Clock className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Business Hours
              </h3>
              <p className="text-base text-slate-500 mt-2 font-normal">
                Our office and engineering consultations run on the following schedule:
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between py-3.5 border-b border-slate-100 text-base">
                  <span className="font-semibold text-slate-800">Monday – Friday</span>
                  <span className="font-bold text-[#532dbe]">{COMPANY.contact.openingHours}</span>
                </div>
                <div className="flex items-center justify-between py-3.5 border-b border-slate-100 text-base">
                  <span className="font-semibold text-slate-800">Saturday</span>
                  <span className="font-bold text-[#532dbe]">{COMPANY.contact.openingHours}</span>
                </div>
                <div className="flex items-center justify-between py-3.5 text-base">
                  <span className="font-medium text-slate-500">Sunday</span>
                  <span className="text-slate-400 font-medium">By appointment</span>
                </div>
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-[#faf9fe] border border-purple-100/80 text-sm text-slate-600">
                <p>
                  <strong className="text-[#532dbe] font-semibold">Note:</strong> For urgent quotes or weekend queries, our WhatsApp line is open to receive messages at any time.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <a
                href={COMPANY.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 text-base font-bold text-white bg-[#532dbe] hover:bg-[#43239e] rounded-2xl shadow-soft hover:shadow-soft-hover transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Office Location & Map Directions (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white rounded-3xl border border-slate-100 shadow-soft-card hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#532dbe]/10 text-[#532dbe] flex items-center justify-center shadow-soft-sm">
                  <MapPin className="w-7 h-7" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#532dbe] bg-slate-50 hover:bg-purple-50 border border-slate-200/80 rounded-xl transition-all shadow-soft-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 tracking-tight">
                Our Physical Office
              </h3>
              <p className="text-xl sm:text-2xl font-bold text-[#532dbe] mt-2 tracking-tight">
                {COMPANY.contact.address}
              </p>
              <p className="text-base text-slate-500 mt-2">
                Located centrally on New Market Road in the heart of commercial Onitsha, Anambra State.
              </p>

              {/* Map Preview Graphic */}
              <div className="mt-8 rounded-2xl border border-slate-100 bg-[#faf9fe] overflow-hidden p-6 sm:p-8 shadow-soft-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-base font-bold text-slate-900">
                    <Navigation className="w-5 h-5 text-[#532dbe]" />
                    <span>Onitsha Commercial District</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Easily accessible from Main Market, Upper Iweka, and surrounding parts of Anambra State. Walk-ins and scheduled project consultations welcome during business hours.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2.5 text-xs text-slate-600">
                    <span className="px-3 py-1.5 bg-white border border-slate-200/80 rounded-lg font-medium shadow-soft-sm">
                      Onitsha, Anambra State
                    </span>
                    <span className="px-3 py-1.5 bg-white border border-slate-200/80 rounded-lg font-medium shadow-soft-sm">
                      39 New Market Road
                    </span>
                    <span className="px-3 py-1.5 bg-white border border-slate-200/80 rounded-lg font-medium shadow-soft-sm">
                      Nigeria
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-soft-sm hover:shadow-soft transition-all"
              >
                <Navigation className="w-4 h-4 text-[#532dbe]" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={COMPANY.contact.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-soft-sm hover:shadow-soft transition-all"
              >
                <Phone className="w-4 h-4 text-[#532dbe]" />
                <span>Call {COMPANY.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
