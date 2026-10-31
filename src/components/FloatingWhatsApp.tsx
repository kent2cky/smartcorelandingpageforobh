import React, { useState } from 'react';
import { COMPANY } from '../data/company.ts';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Instant WhatsApp Support"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group"
    >
      <a
        href={COMPANY.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-3 px-5 py-3.5 sm:px-6 sm:py-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-sm sm:text-base rounded-full shadow-[0_12px_40px_-5px_rgba(37,211,102,0.4)] hover:shadow-[0_16px_50px_-5px_rgba(37,211,102,0.55)] transition-all duration-300 border-2 border-white/90"
        aria-label="Chat on WhatsApp with Smartcore Infosys"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-[#25D366]" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-75" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white rounded-full" />
        </div>
        <span className="whitespace-nowrap font-bold tracking-tight">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
