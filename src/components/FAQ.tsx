'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { HelpCircle, ChevronDown, Phone, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { t, openEstimateModal } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white text-[#0F172A] py-20 lg:py-28 border-b border-black/10"
    >
      {/* Subtle luxury ambient lighting accents */}
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-[420px] w-[450px] rounded-full bg-[#062F57]/5 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-10 h-[380px] w-[480px] rounded-full bg-[#EF3340]/5 blur-[160px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN: Header & Accordion List (Duke Pattern) */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
            <div>
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#062F57]/20 bg-[#062F57]/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest text-[#062F57] shadow-2xs">
                <HelpCircle className="size-3.5 text-[#EF3340]" />
                <span>{t.faq.tag} • PROTOCOLS</span>
              </div>

              {/* Headline */}
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0F172A] leading-tight uppercase">
                Got Questions?{' '}
                <span className="bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340] bg-clip-text text-transparent">
                  We Have Clear Answers.
                </span>
              </h2>

              <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 max-w-2xl">
                {t.faq.subtitle}
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {t.faq.items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white shadow-xs ${
                      isOpen
                        ? 'border-[#062F57] ring-2 ring-[#062F57]/15'
                        : 'border-black/10 hover:border-black/20 hover:shadow-sm'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3 sm:gap-3.5">
                        <span
                          className={`size-2 shrink-0 rounded-full transition-colors ${
                            isOpen ? 'bg-[#EF3340]' : 'bg-slate-300'
                          }`}
                        />
                        <span className="text-sm sm:text-[15px] font-extrabold uppercase text-[#0F172A] tracking-tight leading-snug">
                          {item.question}
                        </span>
                      </div>

                      <div
                        className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 bg-[#062F57]/10 text-[#062F57]' : ''
                        }`}
                      >
                        <ChevronDown className="size-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 pb-5 pt-3.5 sm:px-6 sm:pb-6 bg-slate-50/50">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Dedicated Quick Concierge Card (Duke Pattern) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-[2.25rem] border border-black/10 bg-[#062F57] text-white p-7 sm:p-9 shadow-2xl relative overflow-hidden">
              {/* Specular Ambient Glow */}
              <div className="pointer-events-none absolute -top-10 -right-10 size-48 rounded-full bg-[#EF3340]/20 blur-3xl" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10.5px] font-mono font-bold uppercase tracking-wider text-white">
                  <ShieldCheck className="size-3.5 text-[#EF3340]" />
                  <span>Commercial Support Desk</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                    Need Custom Project Specs?
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                    Our lead commercial estimators provide architectural submittals, safety plans, and turnkey bids delivered within 24 business hours.
                  </p>
                </div>

                {/* Direct Phone Box */}
                <div className="rounded-2xl border border-white/15 bg-[#03182E] p-5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                    DIRECT ESTIMATING HOTLINE
                  </span>
                  <a
                    href="tel:4693605805"
                    className="text-xl sm:text-2xl font-mono font-black text-white hover:text-[#EF3340] transition-colors flex items-center gap-2"
                  >
                    <Phone className="size-5 text-[#EF3340]" />
                    <span>(469) 360-5805</span>
                  </a>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                    <Clock className="size-3 text-emerald-400" />
                    <span>Mon – Sat: 8:00 AM – 5:00 PM • Sun: Closed</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={openEstimateModal}
                  className="w-full py-4 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white text-xs font-extrabold uppercase tracking-wide shadow-[0_6px_20px_rgba(239,51,64,0.35)] transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request A Free Estimate</span>
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
