import React from 'react';
import { COMPANY } from '../data/company.ts';
import { MessageCircle, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-36 lg:pt-28 lg:pb-44 bg-gradient-to-b from-white via-[#faf9fe] to-white">
      {/* Background ambient lighting - soft, diffused luxury aura */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 -z-10 pointer-events-none transform-gpu overflow-hidden blur-3xl"
      >
        <div className="w-[60rem] h-[36rem] bg-gradient-to-tr from-[#9c7ef7]/15 via-[#532dbe]/10 to-transparent rounded-full opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-14 items-center">
          {/* Left Column: Headline, One-Line Description & Main Action */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 text-left">
            {/* Unboxed subtle editorial kicker */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#532dbe]">
              <span className="w-2 h-2 rounded-full bg-[#532dbe]" />
              <span className="tracking-wider uppercase">Smartcore Infosys</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">Onitsha, Anambra State</span>
            </div>

            {/* Much Larger, Commanding Premium Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.9rem] xl:text-[4.4rem] font-extrabold tracking-tight text-slate-900 leading-[1.08] [text-wrap:balance]">
              We build <span className="text-[#532dbe]">custom software solutions</span> that help you make more money.
            </h1>

            {/* One-Line Description with generous breathing room */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              We build customized software solutions that help individuals and businesses streamline workflows and make more money.
            </p>

            {/* Main Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
              <a
                href={COMPANY.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white bg-[#532dbe] hover:bg-[#43239e] active:scale-[0.98] rounded-2xl shadow-soft hover:shadow-soft-hover transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-5 h-5 opacity-80 shrink-0" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-4 sm:py-5 text-base font-semibold text-slate-700 hover:text-[#532dbe] bg-white hover:bg-slate-50 border border-slate-200/80 rounded-2xl shadow-soft-sm transition-all duration-200"
              >
                Explore Services
              </a>
            </div>

            {/* Value propositions & trust points with extra spacing */}
            <div className="pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center text-[#532dbe] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Tailored to your needs without breaking the bank</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center text-[#532dbe] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Based at 39 New Market Road, Onitsha</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Asset with soft shadow */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ultra-soft ambient aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#532dbe]/10 to-[#9c7ef7]/20 rounded-3xl blur-2xl opacity-60" />
              
              <div className="relative rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-soft-hover">
                <img
                  src="/src/assets/images/hero_smartcore_1793477424426.jpg"
                  alt="Smartcore Infosys software development and innovation workspace"
                  className="w-full h-84 sm:h-96 lg:h-[460px] object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Soft scrim overlay with brand caption */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#9c7ef7] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Smartcore Infosys Engineering</span>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-slate-100 mt-1.5 leading-snug">
                    Turning complex business workflows into high-converting digital systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
