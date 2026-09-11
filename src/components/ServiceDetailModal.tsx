'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ServiceDetailModal: React.FC = () => {
  const { selectedService, closeServiceModal, openEstimateModal, language } = useLanguage();

  if (!selectedService) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 min-[400px]:p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={closeServiceModal}
      />

      {/* Modal Dialog (Duke Pattern) */}
      <div
        className="relative bg-[#020F1D] text-white max-w-2xl w-full overflow-hidden z-10 rounded-2xl sm:rounded-[2.25rem] border border-white/20 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Visual Cover Canvas */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-950">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020F1D] via-[#020F1D]/60 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={closeServiceModal}
            className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4 flex size-9 items-center justify-center rounded-full bg-black/60 hover:bg-[#EF3340] text-white transition-colors cursor-pointer backdrop-blur-md"
            aria-label="Close modal"
          >
            <X className="size-4" />
          </button>

          {/* Header Overlay */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6">
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="bg-[#EF3340] text-white text-[9.5px] sm:text-[10px] font-mono font-black uppercase tracking-wider px-2.5 sm:px-3 py-0.5 rounded-full">
                SPEC {selectedService.number} • DFW
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-300">
                100% Commercial Only
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase text-white">
              {selectedService.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 space-y-5 sm:space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Scope Narrative */}
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#EF3340] mb-2">
              01 // {language === 'en' ? 'SCOPE OF WORK' : 'ALCANCE TÉCNICO'}
            </h4>
            <p className="text-slate-300 leading-relaxed font-normal text-xs sm:text-sm">
              {selectedService.fullScope}
            </p>
          </div>

          {/* Capabilities Grid */}
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
              02 // {language === 'en' ? 'COMMERCIAL SPECIFICATIONS' : 'ESPECIFICACIONES COMERCIALES'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedService.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Surface Prep Standards */}
          <div className="p-5 bg-[#03182E] rounded-2xl border border-white/10">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#EF3340] mb-2 flex items-center gap-2">
              <ShieldCheck className="size-4 text-[#EF3340]" />
              <span>03 // {language === 'en' ? 'SURFACE PREPARATION & SAFETY' : 'PREPARACIÓN Y SEGURIDAD'}</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {selectedService.prepDetails}
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
            <button
              type="button"
              onClick={closeServiceModal}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase text-slate-400 hover:text-white text-center cursor-pointer"
            >
              {language === 'en' ? 'Close' : 'Cerrar'}
            </button>

            <button
              type="button"
              onClick={() => {
                closeServiceModal();
                openEstimateModal();
              }}
              className="h-11 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-7 text-xs font-extrabold uppercase tracking-wider shadow-[0_6px_20px_rgba(239,51,64,0.35)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              <span>{language === 'en' ? 'Request Proposal For This Spec' : 'Solicitar Propuesta'}</span>
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
