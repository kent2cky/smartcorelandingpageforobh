import React from 'react';
import { COMPANY } from '../data/company.ts';
import { Ear, PiggyBank, TrendingUp, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const icons = [
  <Ear className="w-6 h-6" key="ear" />,
  <PiggyBank className="w-6 h-6" key="piggy" />,
  <TrendingUp className="w-6 h-6" key="trend" />,
  <MapPin className="w-6 h-6" key="pin" />,
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 sm:py-32 lg:py-40 bg-[#faf9fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#532dbe] uppercase">
            <span>The Smartcore Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14] [text-wrap:balance]">
            Why Choose Smartcore Infosys
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
            We listen to your challenges and build bespoke digital solutions tailored directly to your commercial success.
          </p>
        </div>

        {/* 4 Points Grid with generous gaps and softer shadows */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY.whyChooseUs.map((point, index) => (
            <div
              key={point.title}
              className="p-8 sm:p-9 bg-white rounded-3xl border border-slate-100 shadow-soft-card hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#532dbe]/10 text-[#532dbe] flex items-center justify-center mb-6 shadow-soft-sm">
                  {icons[index]}
                </div>
                <span className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
                  0{index + 1}.
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Inline Action Banner with soft shadow */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-slate-100 shadow-soft flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Let's build something valuable for your business today
            </h4>
            <p className="text-base text-slate-600">
              Reach out directly on WhatsApp to explore how we can tailor a solution to your exact budget.
            </p>
          </div>
          <a
            href={COMPANY.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#532dbe] hover:bg-[#43239e] active:scale-[0.99] rounded-2xl shadow-soft hover:shadow-soft-hover transition-all whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 opacity-75 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
