'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, CalendarDays, ArrowUpRight } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const { t, openEstimateModal } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#062F57]/95 backdrop-blur-xl border-t border-white/15 p-2.5 sm:p-3 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex items-center gap-2 sm:gap-2.5 xl:hidden shadow-2xl">
      <a
        href="tel:4693605805"
        className="flex-1 py-2.5 sm:py-3 px-2 rounded-full bg-white text-[#062F57] hover:bg-slate-100 text-[11px] sm:text-xs font-black uppercase tracking-tight sm:tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs transition-colors shrink-0 truncate"
      >
        <Phone className="size-3 sm:size-3.5 text-[#EF3340] shrink-0" />
        <span className="truncate">(469) 360-5805</span>
      </a>

      <button
        type="button"
        onClick={openEstimateModal}
        className="flex-1 py-2.5 sm:py-3 px-2 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white text-[11px] sm:text-xs font-black uppercase tracking-tight sm:tracking-wider flex items-center justify-center gap-1 sm:gap-1.5 shadow-[0_4px_16px_rgba(239,51,64,0.35)] transition-colors cursor-pointer shrink-0 truncate"
      >
        <CalendarDays className="size-3 sm:size-3.5 shrink-0" />
        <span className="truncate">{t.nav.getEstimate}</span>
        <ArrowUpRight className="size-3 sm:size-3.5 shrink-0" />
      </button>
    </div>
  );
};
