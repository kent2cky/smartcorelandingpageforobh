import React, { useState } from 'react';
import { COMPANY } from '../data/company.ts';
import { Maximize2, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % COMPANY.gallery.length);
  };

  const prevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      (activeImageIndex - 1 + COMPANY.gallery.length) % COMPANY.gallery.length
    );
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 lg:py-40 bg-white border-y border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with generous air and larger heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#532dbe] uppercase">
              <span>Visual Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              Photo Gallery
            </h2>
            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              A glimpse into our software development craft, training sessions, and collaborative work environment.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-medium tracking-wide uppercase">
            <span>Click any photo to enlarge</span>
          </div>
        </div>

        {/* Gallery Grid with softer shadows and generous gaps */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY.gallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-soft-card hover:shadow-soft-hover transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Soft overlay hover effect */}
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <div className="p-3.5 rounded-full bg-white/25 backdrop-blur-md shadow-soft">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[11px] font-semibold text-slate-800 shadow-soft-sm">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#532dbe] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with generous top margin */}
        <div className="mt-16 sm:mt-20 text-center space-y-4">
          <p className="text-base text-slate-500">
            Have a project in mind for web, mobile, or business automation?
          </p>
          <div>
            <a
              href={COMPANY.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-[#532dbe] hover:bg-[#43239e] rounded-2xl shadow-soft hover:shadow-soft-hover transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal with ultra-soft diffused backdrop */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 p-2.5 text-white bg-slate-900/60 hover:bg-slate-900 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation arrows */}
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-5 top-1/2 -translate-y-1/2 z-10 p-3 text-white bg-slate-900/60 hover:bg-slate-900 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-5 top-1/2 -translate-y-1/2 z-10 p-3 text-white bg-slate-900/60 hover:bg-slate-900 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div className="bg-slate-950 flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img
                src={COMPANY.gallery[activeImageIndex].src}
                alt={COMPANY.gallery[activeImageIndex].title}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption & Controls */}
            <div className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#532dbe] uppercase tracking-wider">
                  {COMPANY.gallery[activeImageIndex].category}
                </span>
                <h4 className="text-xl font-bold text-slate-900">
                  {COMPANY.gallery[activeImageIndex].title}
                </h4>
                <p className="text-sm text-slate-600">
                  {COMPANY.gallery[activeImageIndex].description}
                </p>
              </div>

              <a
                href={COMPANY.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#532dbe] hover:bg-[#43239e] rounded-xl shadow-soft whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
