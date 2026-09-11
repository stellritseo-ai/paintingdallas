'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Building2, Warehouse, Store, Hospital, Building, ShieldCheck, Award, Factory } from 'lucide-react';

const commercialSectors = [
  { id: 1, name: 'Corporate Office Towers', icon: Building2, tag: 'High-Rise Envelopes' },
  { id: 2, name: 'Logistics Distribution Hubs', icon: Warehouse, tag: 'Industrial & Epoxy' },
  { id: 3, name: 'Retail Centers & Plazas', icon: Store, tag: 'Storefronts & Canopies' },
  { id: 4, name: 'Healthcare & Medical Centers', icon: Hospital, tag: 'Zero-VOC Odorless' },
  { id: 5, name: 'Commercial Campuses', icon: Building, tag: 'Turnkey Phasing' },
  { id: 6, name: 'Industrial Manufacturing', icon: Factory, tag: 'Steel & High-Bay' },
  { id: 7, name: 'Commercial Real Estate Assets', icon: ShieldCheck, tag: 'Property Management' },
  { id: 8, name: 'Historic Commercial Renewal', icon: Award, tag: 'Restoration & Prep' },
];

const marqueeItems = [...commercialSectors, ...commercialSectors];

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-y border-black/[0.08] bg-[#F1F5F9]/60 backdrop-blur-xl pt-10 pb-[20px]">
      {/* Subtle Center Spotlight Glow (Duke Pattern) */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-[750px] rounded-full bg-[#062F57]/5 blur-[110px]"
        aria-hidden="true"
      />

      {/* Header Container */}
      <div className="site-shell relative z-10 mb-8 flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#062F57]/20 bg-[#062F57]/5 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#062F57] shadow-xs">
            <Sparkles className="size-3 text-[#EF3340]" />
            <span>Commercial Infrastructure Standard</span>
          </div>
          <h2 className="mt-2.5 text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl lg:text-[1.75rem]">
            Trusted Across Premier Dallas Commercial Properties
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-2xl mb-0 md:mb-[-35px]">
            High-durability architectural coatings, elastomeric exterior finishes, and heavy-duty epoxy floor systems formulated for high-traffic Texas business facilities.
          </p>
        </div>

        {/* Live Commercial Verification Pill (Duke Pattern) */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5 rounded-full border border-black/10 bg-white px-3.5 sm:px-4 py-2 text-[10.5px] min-[360px]:text-xs font-bold text-[#0F172A] shadow-xs max-w-full">
          <span className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="truncate">100% Commercial Only • 0% Residential</span>
        </div>
      </div>

      {/* Infinite Seamless Marquee Slider (Duke Pattern) */}
      <div className="relative z-10 w-full py-2">
        <div className="marquee-container">
          <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
            {marqueeItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.id}-${idx}`}
                  className="group flex h-20 w-56 sm:h-22 sm:w-64 shrink-0 items-center gap-3.5 rounded-2xl border border-black/10 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#062F57]/40 hover:shadow-[0_10px_25px_-5px_rgba(6,47,87,0.12)]"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#062F57]/5 text-[#062F57] group-hover:bg-[#EF3340] group-hover:text-white transition-colors shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div className="text-left overflow-hidden">
                    <div className="text-xs font-bold text-[#0F172A] truncate">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium truncate">
                      {item.tag}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
