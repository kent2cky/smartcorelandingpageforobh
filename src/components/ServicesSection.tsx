import React from 'react';
import { COMPANY } from '../data/company.ts';
import { Globe, Smartphone, Cpu, GraduationCap, MessageCircle, Check, ArrowRight } from 'lucide-react';

const serviceIcons: Record<string, React.ReactNode> = {
  'web-apps': <Globe className="w-7 h-7" />,
  'mobile-apps': <Smartphone className="w-7 h-7" />,
  'ai-workflows': <Cpu className="w-7 h-7" />,
  'tech-training': <GraduationCap className="w-7 h-7" />,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40 bg-[#faf9fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with generous margins and larger display title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#532dbe] uppercase">
            <span>Our Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-slate-900 tracking-tight leading-[1.12] [text-wrap:balance]">
            Services & Custom Solutions
          </h2>
          <p className="pt-2 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
            Tailored software architecture and tech skills training built to eliminate operational friction and accelerate your earnings.
          </p>
        </div>

        {/* 4 Service Cards with soft shadows, generous whitespace, larger typography */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {COMPANY.services.map((service, index) => {
            const encodedUrl = `https://wa.me/${COMPANY.contact.whatsapp}?text=${encodeURIComponent(
              service.whatsappMsg
            )}`;

            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-8 sm:p-12 bg-white rounded-3xl border border-slate-100 shadow-soft-card hover:shadow-soft-hover transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar inside card: Icon and Soft Pricing Capsule */}
                  <div className="flex items-start justify-between gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#532dbe]/10 text-[#532dbe] flex items-center justify-center group-hover:bg-[#532dbe] group-hover:text-white transition-colors duration-300 shadow-soft-sm">
                      {serviceIcons[service.id]}
                    </div>
                    
                    <div className="text-right">
                      <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block">
                        Pricing
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#532dbe] mt-0.5 block">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Title & Index with larger font */}
                  <div className="mt-8">
                    <span className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
                      Service 0{index + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1.5 tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-8 pt-8 border-t border-slate-100 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Key Highlights & Capabilities
                    </h4>
                    <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#532dbe] shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Main Action Button with soft glow shadow */}
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <a
                    href={encodedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 text-base font-bold text-white bg-[#532dbe] hover:bg-[#43239e] active:scale-[0.99] rounded-2xl shadow-soft hover:shadow-soft-hover transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 opacity-75 shrink-0" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
