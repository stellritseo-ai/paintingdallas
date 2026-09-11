'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Star,
  Building2,
  CheckCircle2,
  Quote,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Award,
} from 'lucide-react';

// Official Google "G" 4-color SVG Icon (Duke Precision Standard)
export function GoogleGIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

interface CommercialReview {
  id: string;
  name: string;
  initials: string;
  role: string;
  company: string;
  facility: string;
  rating: number;
  timeAgo: string;
  quote: string;
}

const row1Reviews: CommercialReview[] = [
  {
    id: 'r1-1',
    name: 'Marcus Vance',
    initials: 'MV',
    role: 'Director of Asset Management',
    company: 'Crestline Commercial Partners',
    facility: '120,000 sq ft Campus',
    rating: 5,
    timeAgo: '4 days ago',
    quote:
      'Painting Dallas repainted our 4-story corporate headquarters entirely on night and weekend shifts. Zero tenant disruptions, surgical surface masking, and spotless cleanups every morning.',
  },
  {
    id: 'r1-2',
    name: 'Sarah Jenkins',
    initials: 'SJ',
    role: 'Senior Property Manager',
    company: 'DFW Logistics Corridor',
    facility: 'High-Cube Distribution Center',
    rating: 5,
    timeAgo: '1 week ago',
    quote:
      'Their industrial spraying crews coated over 85,000 square feet of structural steel deck and high-traffic epoxy loading docks ahead of our tenant move-in deadline. True commercial pros.',
  },
  {
    id: 'r1-3',
    name: 'Robert Sterling',
    initials: 'RS',
    role: 'General Contractor Superintendent',
    company: 'Apex Build Group Dallas',
    facility: 'Retail Lifestyle Center',
    rating: 5,
    timeAgo: '2 weeks ago',
    quote:
      'I have hired dozens of painters in Texas over 20 years. Painting Dallas is the only contractor that strictly focuses on commercial specs with bilingual site superintendents who hit every milestone on time.',
  },
  {
    id: 'r1-4',
    name: 'David Holbrook',
    initials: 'DH',
    role: 'Facilities Director',
    company: 'Legacy Park Medical Center',
    facility: 'Clinical Healthcare Facility',
    rating: 5,
    timeAgo: '3 weeks ago',
    quote:
      'Zero-VOC scuff-resistant coatings applied across occupied medical office suites with zero odor complaints. Their crew safety compliance and communication were second to none.',
  },
];

const row2Reviews: CommercialReview[] = [
  {
    id: 'r2-1',
    name: 'Carlos Mendoza',
    initials: 'CM',
    role: 'Commercial Operations Lead',
    company: 'Metroplex Industrial REIT',
    facility: 'Multi-Tenant Business Park',
    rating: 5,
    timeAgo: '5 days ago',
    quote:
      'The exterior tilt-up concrete repaint transformed our 1990s business park into an upscale corporate asset. Lease inquiries surged within two weeks of project completion.',
  },
  {
    id: 'r2-2',
    name: 'Elena Rostova',
    initials: 'ER',
    role: 'Commercial Developer',
    company: 'North Dallas Urban Lofts',
    facility: 'Adaptive Reuse Complex',
    rating: 5,
    timeAgo: '2 weeks ago',
    quote:
      'Meticulous masonry restoration and elastomeric coatings on historic brick facades. They respected the architectural profile while delivering an impervious weather shield.',
  },
  {
    id: 'r2-3',
    name: 'Timothy Wright',
    initials: 'TW',
    role: 'VP of Commercial Operations',
    company: 'Frisco Gateway Retail REIT',
    facility: 'Shopping Promenade',
    rating: 5,
    timeAgo: '3 weeks ago',
    quote:
      'Prompt transparent bidding, rigorous boom lift safety barriers, and zero overspray on parked customer vehicles. Painting Dallas sets the gold standard for commercial exterior painting.',
  },
  {
    id: 'r2-4',
    name: 'Arthur Sterling',
    initials: 'AS',
    role: 'Commercial Construction Manager',
    company: 'Trinity River Real Estate Group',
    facility: 'Corporate Office Tower',
    rating: 5,
    timeAgo: '1 month ago',
    quote:
      'From submittal review to final walkaround, their team operated like an elite commercial division. Uncompromising quality and strict compliance with Texas commercial safety standards.',
  },
];

// Quadruple loop to guarantee seamless infinite scrolling on all screens (up to 4K displays)
const row1Quad = [...row1Reviews, ...row1Reviews, ...row1Reviews, ...row1Reviews];
const row2Quad = [...row2Reviews, ...row2Reviews, ...row2Reviews, ...row2Reviews];

export const Testimonials: React.FC = () => {
  const { t, language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#F8FAFC] text-[#0F172A] py-[60px] border-b border-slate-200/80 font-['Inter',sans-serif]"
    >
      {/* Micro-dot ambient background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #062F57 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle luxury ambient lighting accents */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[480px] w-[520px] -translate-x-1/2 rounded-full bg-[#062F57]/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-0 h-[420px] w-[450px] rounded-full bg-[#EF3340]/5 blur-[150px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl mb-12 lg:mb-14">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#062F57]/15 rounded-full px-4 py-1.5 text-[11px] font-mono font-extrabold uppercase tracking-[0.16em] text-[#062F57] shadow-2xs mb-4">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.testimonials.tag} • {isEs ? 'VERIFICACIÓN DE CLIENTES' : 'CLIENT VERIFICATION'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-[#0F172A] leading-tight capitalize">
            {isEs ? (
              <>
                Validado por Líderes de{' '}
                <span className="bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340] bg-clip-text text-transparent">
                  Instalaciones en Texas.
                </span>
              </>
            ) : (
              <>
                Validated by Texas{' '}
                <span className="bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340] bg-clip-text text-transparent">
                  Facility Leaders.
                </span>
              </>
            )}
          </h2>

          <p className="mt-3.5 text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-600 max-w-2xl mx-auto font-normal">
            {isEs
              ? 'Comentarios directos de ejecutivos de bienes raíces comerciales, contratistas generales y gerentes de instalaciones en Dallas-Fort Worth.'
              : 'Direct feedback from commercial real estate executives, general contractors, and facility directors across Dallas-Fort Worth.'}
          </p>

          {/* Premium Google Verified Review Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-full border border-slate-200/90 bg-white/95 backdrop-blur-xs px-5 sm:px-6 py-2.5 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-2">
              <GoogleGIcon className="size-4.5" />
              <span className="text-xs font-bold text-[#0F172A]">Google Reviews</span>
            </div>

            <div className="h-3.5 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-black text-[#0F172A]">5.0</span>
            </div>

            <div className="h-3.5 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-1.5 text-emerald-700">
              <CheckCircle2 className="size-3.5 text-emerald-600 fill-emerald-50" />
              <span className="text-[11px] font-mono text-slate-600 uppercase font-bold tracking-wider">
                100% {isEs ? 'Comercial' : 'Commercial Facility'} Reviews
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Row Continuous Sliding Marquee with Edge Fade Masks */}
      <div className="relative w-full overflow-hidden space-y-5">
        {/* Precision Left Edge Gradient Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-48 z-20 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent"
        />

        {/* Precision Right Edge Gradient Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-48 z-20 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent"
        />

        {/* Row 1: Right-to-Left */}
        <div className="marquee-container">
          <div className="animate-marquee flex gap-5 py-2 [animation-duration:55s] hover:[animation-play-state:paused]">
            {row1Quad.map((rev, i) => (
              <div
                key={`r1-${rev.id}-${i}`}
                className="w-[290px] min-[380px]:w-[340px] sm:w-[410px] shrink-0 rounded-2xl sm:rounded-[1.5rem] border border-slate-200/90 bg-white p-4 sm:p-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] ring-1 ring-black/[0.02] flex flex-col justify-between transition-all duration-300 hover:border-[#062F57]/30 hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.12)] hover:-translate-y-1 group"
              >
                <div>
                  {/* Card Header: Author & Verified Google Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#062F57] to-[#0A4B8A] text-white font-mono font-black text-xs shadow-xs ring-2 ring-[#062F57]/10">
                        {rev.initials}
                      </div>
                      <div>
                        <div className="text-xs sm:text-[13px] font-black uppercase text-[#0F172A] tracking-tight group-hover:text-[#062F57] transition-colors">
                          {rev.name}
                        </div>
                        <div className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium truncate max-w-[170px] sm:max-w-[200px]">
                          {rev.role}
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-semibold text-slate-600 shrink-0">
                      <GoogleGIcon className="size-3.5" />
                      <span className="hidden sm:inline">Google</span>
                      <CheckCircle2 className="size-3 text-emerald-600" />
                    </div>
                  </div>

                  {/* Rating Stars & Timestamp */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="size-3.5 text-amber-400 fill-amber-400" />
                      ))}
                      <span className="ml-1 text-[11px] font-black text-slate-800">
                        5.0
                      </span>
                    </div>
                    <span className="text-[10.5px] font-mono text-slate-400 font-medium">
                      {rev.timeAgo}
                    </span>
                  </div>

                  {/* Quote Paragraph */}
                  <div className="relative">
                    <Quote className="size-3.5 text-[#062F57]/20 mb-1" />
                    <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 font-normal line-clamp-4">
                      "{rev.quote}"
                    </p>
                  </div>
                </div>

                {/* Card Footer: Company & Facility Scope Chip */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2 text-[10.5px] sm:text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Building2 className="size-3.5 text-[#062F57] shrink-0" />
                    <span className="font-bold text-[#062F57] truncate max-w-[170px] sm:max-w-[210px]">
                      {rev.company}
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#EF3340]/6 border border-[#EF3340]/15 text-[#EF3340] text-[9.5px] font-black uppercase tracking-wider shrink-0">
                    {rev.facility}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left-to-Right */}
        <div className="marquee-container">
          <div
            className="animate-marquee flex gap-5 py-2 [animation-duration:55s] hover:[animation-play-state:paused]"
            style={{ animationDirection: 'reverse' }}
          >
            {row2Quad.map((rev, i) => (
              <div
                key={`r2-${rev.id}-${i}`}
                className="w-[290px] min-[380px]:w-[340px] sm:w-[410px] shrink-0 rounded-2xl sm:rounded-[1.5rem] border border-slate-200/90 bg-white p-4 sm:p-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] ring-1 ring-black/[0.02] flex flex-col justify-between transition-all duration-300 hover:border-[#EF3340]/35 hover:shadow-[0_16px_36px_-6px_rgba(239,51,64,0.12)] hover:-translate-y-1 group"
              >
                <div>
                  {/* Card Header: Author & Verified Google Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E293B] to-[#334155] text-white font-mono font-black text-xs shadow-xs ring-2 ring-[#1E293B]/10">
                        {rev.initials}
                      </div>
                      <div>
                        <div className="text-xs sm:text-[13px] font-black uppercase text-[#0F172A] tracking-tight group-hover:text-[#EF3340] transition-colors">
                          {rev.name}
                        </div>
                        <div className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium truncate max-w-[170px] sm:max-w-[200px]">
                          {rev.role}
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-semibold text-slate-600 shrink-0">
                      <GoogleGIcon className="size-3.5" />
                      <span className="hidden sm:inline">Google</span>
                      <CheckCircle2 className="size-3 text-emerald-600" />
                    </div>
                  </div>

                  {/* Rating Stars & Timestamp */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="size-3.5 text-amber-400 fill-amber-400" />
                      ))}
                      <span className="ml-1 text-[11px] font-black text-slate-800">
                        5.0
                      </span>
                    </div>
                    <span className="text-[10.5px] font-mono text-slate-400 font-medium">
                      {rev.timeAgo}
                    </span>
                  </div>

                  {/* Quote Paragraph */}
                  <div className="relative">
                    <Quote className="size-3.5 text-[#EF3340]/25 mb-1" />
                    <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 font-normal line-clamp-4">
                      "{rev.quote}"
                    </p>
                  </div>
                </div>

                {/* Card Footer: Company & Facility Scope Chip */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2 text-[10.5px] sm:text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Building2 className="size-3.5 text-[#EF3340] shrink-0" />
                    <span className="font-bold text-[#062F57] truncate max-w-[170px] sm:max-w-[210px]">
                      {rev.company}
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#EF3340]/6 border border-[#EF3340]/15 text-[#EF3340] text-[9.5px] font-black uppercase tracking-wider shrink-0">
                    {rev.facility}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Credential Strip & References Callout */}
      <div className="site-shell relative z-10 max-w-7xl mt-12 sm:mt-14">
        <div className="rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-xs p-5 sm:p-6 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
              <span>100% Commercial Scope Only</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="size-4 text-[#062F57] shrink-0" />
              <span>OSHA-30 Certified Supervisors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
              <span>$5,000,000 Liability Coverage</span>
            </div>
          </div>

          <button
            type="button"
            onClick={openEstimateModal}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#062F57] hover:text-[#EF3340] transition-colors cursor-pointer group"
          >
            <span>{isEs ? 'Solicitar Referencias de Proyectos' : 'Request Commercial References'}</span>
            <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

