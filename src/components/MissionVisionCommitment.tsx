'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Target, Compass, ShieldCheck } from 'lucide-react';

export const MissionVisionCommitment: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      roman: 'I',
      icon: Target,
      title: t.missionVision.missionTitle,
      text: t.missionVision.missionText,
      accent: 'border-[#EF3340]/40 text-[#EF3340]',
    },
    {
      roman: 'II',
      icon: Compass,
      title: t.missionVision.visionTitle,
      text: t.missionVision.visionText,
      accent: 'border-white/40 text-white',
    },
    {
      roman: 'III',
      icon: ShieldCheck,
      title: t.missionVision.commitmentTitle,
      text: t.missionVision.commitmentText,
      accent: 'border-[#EF3340]/40 text-[#EF3340]',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#03182E] text-white relative border-b border-white/10 overflow-hidden">
      {/* Subtle luxury ambient lighting accents */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#062F57]/30 blur-[160px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl">
        <div className="eyebrow mb-4">
          <span className="eyebrow-line bg-[#EF3340]" />
          <span className="text-[#EF3340] font-black tracking-widest text-[11px] uppercase">
            {t.missionVision.tag} • OPERATIONAL FOUNDATION
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.roman}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#020F1D]/80 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#EF3340]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-xs font-black tracking-widest text-[#EF3340]">
                      [ {pillar.roman} // PILLAR ]
                    </span>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.text}
                  </p>
                </div>

                <div className="w-10 h-[2px] bg-[#EF3340] mt-8 group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
