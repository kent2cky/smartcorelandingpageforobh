import React from 'react';
import { COMPANY } from '../data/company.ts';
import { MessageCircle, Users, Target, HeartHandshake, MapPin, ArrowRight } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-white border-y border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with generous margin and larger display typography */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#532dbe] uppercase">
            <span>About Smartcore Infosys</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14] [text-wrap:balance]">
            Software engineered to empower your growth and increase your profitability.
          </h2>
          <p className="pt-2 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            {COMPANY.about.overview}
          </p>
        </div>

        {/* 3 Core Pillars: Generous gaps, softer shadows, large cards */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Pillar 1: Who We Serve */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-100 shadow-soft-card hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#532dbe]/10 flex items-center justify-center text-[#532dbe] mb-6 shadow-soft-sm">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Our Customers</h3>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {COMPANY.about.customers}
              </p>
            </div>
          </div>

          {/* Pillar 2: What Makes Us Different */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-100 shadow-soft-card hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#532dbe]/10 flex items-center justify-center text-[#532dbe] mb-6 shadow-soft-sm">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">What Makes Us Different</h3>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {COMPANY.about.differentiator}
              </p>
            </div>
          </div>

          {/* Pillar 3: Area We Serve */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-100 shadow-soft-card hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#532dbe]/10 flex items-center justify-center text-[#532dbe] mb-6 shadow-soft-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Area We Serve</h3>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Proudly rooted in <strong className="text-slate-900 font-semibold">Onitsha, Anambra State, Nigeria</strong> at 39 New Market Road. We support local enterprises in person while building software solutions for clients across Nigeria and globally.
              </p>
            </div>
          </div>
        </div>

        {/* Action Callout with soft diffused gradient and airy padding */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#532dbe] to-[#3a1d94] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-soft-hover">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to discuss your software project?</h4>
            <p className="text-base text-purple-200 font-normal">
              Tell us about your workflow challenges, and we'll outline a tailored solution.
            </p>
          </div>
          <a
            href={COMPANY.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-[#532dbe] bg-white hover:bg-slate-50 active:scale-[0.98] rounded-2xl shadow-soft transition-all duration-200 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-5 h-5 text-[#532dbe]" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#532dbe]" />
          </a>
        </div>
      </div>
    </section>
  );
};
