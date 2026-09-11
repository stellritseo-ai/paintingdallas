'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X, MapPin, ArrowUpRight } from 'lucide-react';

export const ProjectDetailModal: React.FC = () => {
  const { selectedProject, closeProjectModal, openEstimateModal, language } = useLanguage();

  if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 min-[400px]:p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={closeProjectModal}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className="relative bg-[#020F1D] text-white max-w-4xl w-full overflow-hidden z-10 rounded-2xl sm:rounded-[2rem] border border-white/20 shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Full Image Frame (No heading, no description) */}
        <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-black/90 overflow-hidden">
          <img
            src={selectedProject.image}
            alt={selectedProject.title || 'Commercial Project'}
            className="w-full max-h-[70vh] object-contain"
          />

          {/* Close button */}
          <button
            type="button"
            onClick={closeProjectModal}
            className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4 flex size-9 sm:size-10 items-center justify-center rounded-full bg-black/60 hover:bg-[#EF3340] text-white transition-all cursor-pointer backdrop-blur-md border border-white/20 z-20 hover:scale-105"
            aria-label="Close modal"
          >
            <X className="size-4 sm:size-5" />
          </button>

          {/* Top Badges */}
          <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-4 flex items-center gap-1.5 sm:gap-2 z-10 pointer-events-none flex-wrap max-w-[calc(100%-56px)]">
            <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 bg-[#EF3340] text-white text-[9.5px] sm:text-[10.5px] font-mono font-black uppercase tracking-wider rounded-full shadow-md">
              {selectedProject.categoryLabel}
            </span>
            <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
              {selectedProject.sqft}
            </span>
          </div>

          {/* Lower Location Badge */}
          <div className="absolute bottom-3.5 sm:bottom-4 left-3.5 sm:left-4 flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full z-10">
            <MapPin className="size-3 sm:size-3.5 text-[#EF3340]" />
            <span>{selectedProject.location}</span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-5 bg-[#020F1D] border-t border-white/10 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
          <button
            type="button"
            onClick={closeProjectModal}
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase text-slate-400 hover:text-white transition-colors cursor-pointer text-center"
          >
            {language === 'en' ? 'Close' : 'Cerrar'}
          </button>

          <button
            type="button"
            onClick={() => {
              closeProjectModal();
              openEstimateModal();
            }}
            className="h-11 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-7 text-xs font-extrabold uppercase tracking-wider shadow-[0_6px_20px_rgba(239,51,64,0.35)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <span>{language === 'en' ? 'Request Similar Project Proposal' : 'Cotizar Proyecto Similar'}</span>
            <ArrowUpRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
