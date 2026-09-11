'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Search,
  ClipboardCheck,
  FileText,
  Sparkles,
  Paintbrush,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export const Process: React.FC = () => {
  const { t, language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  const stepIcons = [
    Search,
    ClipboardCheck,
    FileText,
    Sparkles,
    Paintbrush,
    ShieldCheck,
  ];

  const steps = t.process.steps;

  const desktopPositions = [
    { left: '18%', top: '50px' },
    { left: '50%', top: '50px' },
    { left: '82%', top: '50px' },
    { left: '18%', top: '310px' },
    { left: '50%', top: '310px' },
    { left: '82%', top: '310px' },
  ];

  return (
    <section
      id="process"
      className="relative py-[60px] overflow-hidden bg-white border-y border-slate-100 font-['Inter',sans-serif]"
    >
      {/* Background grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #EF3340 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Embedded CSS Animations */}
      <style>{`
        @keyframes electricFlow {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -30; }
        }
        @keyframes sparkFlow {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -45; }
        }
        @keyframes verticalElectricFlow {
          0%   { background-position: 0 0; }
          100% { background-position: 0 -40px; }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(0.96); opacity: 0.15; }
          50%      { transform: scale(1.04); opacity: 0.35; }
        }
        @keyframes pulseGlowLarge {
          0%, 100% { transform: scale(0.98); opacity: 0.05; }
          50%      { transform: scale(1.02); opacity: 0.15; }
        }
        @keyframes painterRoll {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-7px); }
        }
        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.85); }
          50%      { opacity: 1; transform: scale(1.15); }
        }
        @keyframes paintDrip {
          0%   { transform: translateY(0); opacity: 1; }
          80%  { transform: translateY(7px); opacity: 0.8; }
          100% { transform: translateY(11px); opacity: 0; }
        }
        .pulse-glow            { animation: pulseGlow 2s infinite ease-in-out; transform-origin: 75px 60px; }
        .pulse-glow-large      { animation: pulseGlowLarge 3s infinite ease-in-out; transform-origin: 75px 60px; }
        .electric-flow         { stroke-dasharray: 6 6; animation: electricFlow 0.5s infinite linear; }
        .spark-flow            { stroke-dasharray: 12 24; animation: sparkFlow 1.8s infinite linear; }
        .painter-roller-motion { animation: painterRoll 2s infinite ease-in-out; }
        .sparkle-twinkle       { animation: sparkleTwinkle 1.8s infinite ease-in-out; }
        .sparkle-twinkle-delay { animation: sparkleTwinkle 1.8s infinite ease-in-out 0.9s; }
        .paint-drip-motion     { animation: paintDrip 1.5s infinite linear; }
        .mobile-electric-flow {
          background: linear-gradient(to bottom, #EF3340 0%, #EF3340 30%, #FFE2E5 50%, #EF3340 70%, #EF3340 100%);
          background-size: 100% 40px;
          animation: verticalElectricFlow 1.2s infinite linear;
        }
      `}</style>

      <div className="site-shell relative z-10">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14 lg:mb-20">
          {/* Eyebrow badge */}
          <span className="inline-flex items-center gap-2 bg-[#EF3340]/10 border border-[#EF3340]/20 text-[#EF3340] rounded-full px-4 sm:px-5 py-1.5 text-[10.5px] sm:text-[11px] font-black uppercase tracking-widest mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF3340] animate-pulse" />
            {t.process.tag} • {isEs ? 'FLUJO DE TRABAJO EN 6 PASOS' : '6-STAGE WORKFLOW'}
          </span>

          <h2
            className="text-[#0F172A] tracking-tight leading-[1.15] font-black whitespace-normal md:whitespace-nowrap text-2xl sm:text-3xl lg:text-[36px] mt-0 mb-2 sm:mb-3"
          >
            {isEs ? (
              <>
                Completamos Cada Paso con{' '}
                <span className="bg-gradient-to-r from-[#EF3340] to-[#D8222F] bg-clip-text text-transparent">
                  Máxima Precisión.
                </span>
              </>
            ) : (
              <>
                We Complete Every Step With{' '}
                <span className="bg-gradient-to-r from-[#EF3340] to-[#D8222F] bg-clip-text text-transparent">
                  Care &amp; Precision.
                </span>
              </>
            )}
          </h2>

          <p
            className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-medium leading-relaxed mb-8 sm:mb-12 lg:mb-[-69px]"
          >
            {t.process.subtitle}
          </p>
        </div>

        {/* ── 1. DESKTOP: S-Curve Conduit Pipeline with Commercial Icons ─── */}
        <div
          className="hidden lg:block relative w-full h-[520px] select-none"
          style={{ marginBottom: '-100px' }}
        >
          <svg
            viewBox="0 0 1200 360"
            className="absolute top-0 left-0 w-full h-[360px] pointer-events-none z-0"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="40%" stopColor="#475569" />
                <stop offset="60%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
              <linearGradient id="paintSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Drop shadow */}
            <path
              d="M 100 50 L 1050 50 A 65 65 0 0 1 1050 180 L 150 180 A 65 65 0 0 0 150 310 L 1050 310"
              stroke="#0f172a"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.07"
            />
            {/* Outer conduit pipe */}
            <path
              d="M 100 50 L 1050 50 A 65 65 0 0 1 1050 180 L 150 180 A 65 65 0 0 0 150 310 L 1050 310"
              stroke="#334155"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Animated crimson core */}
            <path
              d="M 100 50 L 1050 50 A 65 65 0 0 1 1050 180 L 150 180 A 65 65 0 0 0 150 310 L 1050 310"
              stroke="#EF3340"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Gold spark flow animation */}
            <path
              d="M 100 50 L 1050 50 A 65 65 0 0 1 1050 180 L 150 180 A 65 65 0 0 0 150 310 L 1050 310"
              stroke="#FFE600"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
              className="spark-flow"
            />
            {/* Glossy top reflection */}
            <path
              d="M 100 50 L 1050 50 A 65 65 0 0 1 1050 180 L 150 180 A 65 65 0 0 0 150 310 L 1050 310"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.75"
            />

            {/* ── START ICON: Commercial Property with Boom Lift Painter ──────── */}
            <g transform="translate(6, 4)">
              {/* Commercial Rooftop Penthouse & Antenna */}
              <rect x="12" y="14" width="68" height="6" rx="1" fill="#0F172A" stroke="#1E293B" strokeWidth="1.2" />
              <rect x="18" y="8" width="18" height="6" rx="1" fill="#334155" />
              <line x1="28" y1="4" x2="28" y2="8" stroke="#64748B" strokeWidth="1.2" />

              {/* Multi-story Commercial Facade */}
              <rect x="14" y="20" width="64" height="62" rx="2" fill="#F1F5F9" stroke="#334155" strokeWidth="1.8" />

              {/* Story 2 Commercial Glazing */}
              <rect x="18" y="26" width="16" height="12" rx="1" fill="#BAE6FD" stroke="#334155" strokeWidth="1.2" />
              <line x1="26" y1="26" x2="26" y2="38" stroke="#334155" strokeWidth="1" />
              <rect x="38" y="26" width="16" height="12" rx="1" fill="#BAE6FD" stroke="#334155" strokeWidth="1.2" />
              <line x1="46" y1="26" x2="46" y2="38" stroke="#334155" strokeWidth="1" />

              {/* Story 1 Commercial Windows */}
              <rect x="18" y="44" width="16" height="14" rx="1" fill="#BAE6FD" stroke="#334155" strokeWidth="1.2" />
              <line x1="26" y1="44" x2="26" y2="58" stroke="#334155" strokeWidth="1" />

              {/* Fresh Commercial Red Coating Layer on right facade */}
              <path d="M 54 20 L 78 20 L 78 65 L 54 65 Z" fill="#EF3340" opacity="0.95" />
              <line x1="55" y1="22" x2="77" y2="22" stroke="#FFE2E5" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="56" cy="68" r="1.5" fill="#EF3340" className="paint-drip-motion" />

              {/* Commercial Entrance Doors on Ground Floor */}
              <rect x="22" y="64" width="22" height="18" rx="1" fill="#0F172A" />
              <line x1="33" y1="64" x2="33" y2="82" stroke="#475569" strokeWidth="1" />
              <rect x="19" y="62" width="28" height="2" fill="#334155" />

              {/* Hydraulic Boom Lift Arm */}
              <line x1="72" y1="80" x2="68" y2="60" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="68" y1="60" x2="74" y2="46" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

              {/* Commercial Painter in Lift Basket */}
              <g className="painter-roller-motion">
                {/* OSHA Lift Basket */}
                <rect x="62" y="34" width="22" height="14" rx="1.5" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                <line x1="62" y1="39" x2="84" y2="39" stroke="#F59E0B" strokeWidth="1" />
                <circle cx="83" cy="33" r="1.5" fill="#F59E0B" className="animate-pulse" />

                {/* Commercial Painter */}
                <ellipse cx="73" cy="24" rx="4.5" ry="3" fill="#FFFFFF" stroke="#EF3340" strokeWidth="1" />
                <circle cx="73" cy="27" r="3.5" fill="#FFD2A8" />
                <rect x="69" y="30" width="8" height="8" rx="1" fill="#EF3340" />
                <line x1="71" y1="30" x2="71" y2="38" stroke="#FFE600" strokeWidth="1.2" />
                <line x1="75" y1="30" x2="75" y2="38" stroke="#FFE600" strokeWidth="1.2" />

                {/* Roller Extension Pole */}
                <path d="M 70 32 L 62 26 L 54 22" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <rect x="50" y="19" width="5" height="10" rx="1.5" fill="#EF3340" stroke="#FFFFFF" strokeWidth="0.8" />
                <circle cx="48" cy="18" r="1.2" fill="#FFE600" className="animate-pulse" />
              </g>

              {/* Paint feed connecting into the conduit line */}
              <path d="M 78 50 L 94 50" stroke="#EF3340" strokeWidth="5" strokeLinecap="round" />
            </g>

            {/* ── END ICON: Completed Multi-Story Commercial Complex ──────────── */}
            <g transform="translate(1035, 218)">
              {/* Ambient prestige radial glow */}
              <circle cx="75" cy="60" r="65" fill="#EF3340" opacity="0.08" className="pulse-glow" />
              <circle cx="75" cy="60" r="90" fill="#FFE600" opacity="0.04" className="pulse-glow-large" />

              {/* Rooftop Penthouse & Aircraft Beacon */}
              <rect x="42" y="10" width="38" height="10" rx="1" fill="#1E293B" stroke="#0F172A" strokeWidth="1.2" />
              <line x1="61" y1="2" x2="61" y2="10" stroke="#64748B" strokeWidth="1.5" />
              <circle cx="61" cy="2" r="1.5" fill="#EF3340" className="animate-pulse" />

              {/* Commercial Parapet & Red Crown */}
              <rect x="18" y="20" width="94" height="6" rx="1" fill="#0F172A" />
              <line x1="16" y1="21" x2="114" y2="21" stroke="#EF3340" strokeWidth="2.5" strokeLinecap="round" />

              {/* Main Commercial Facade */}
              <rect x="22" y="26" width="86" height="74" rx="3" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.8" />

              {/* Architectural Red Accent Bay */}
              <rect x="22" y="26" width="24" height="74" rx="2" fill="#EF3340" />
              <rect x="22" y="26" width="24" height="74" fill="url(#paintSheen)" opacity="0.15" />

              {/* Story 3 Ribbon Windows (Warm Executive Glow) */}
              <rect x="52" y="32" width="22" height="12" rx="1.5" fill="#FEF08A" stroke="#1E293B" strokeWidth="1.2" />
              <line x1="63" y1="32" x2="63" y2="44" stroke="#1E293B" strokeWidth="1" />
              <rect x="78" y="32" width="24" height="12" rx="1.5" fill="#FEF08A" stroke="#1E293B" strokeWidth="1.2" />
              <line x1="90" y1="32" x2="90" y2="44" stroke="#1E293B" strokeWidth="1" />
              <polygon points="53,33 62,33 53,42" fill="#FFFFFF" opacity="0.6" />

              {/* Story 2 Executive Suite Windows */}
              <rect x="27" y="34" width="14" height="12" rx="1.5" fill="#FEF08A" stroke="#FFFFFF" strokeWidth="1.2" />
              <rect x="52" y="50" width="22" height="12" rx="1.5" fill="#FEF08A" stroke="#1E293B" strokeWidth="1.2" />
              <line x1="63" y1="50" x2="63" y2="62" stroke="#1E293B" strokeWidth="1" />
              <rect x="78" y="50" width="24" height="12" rx="1.5" fill="#FEF08A" stroke="#1E293B" strokeWidth="1.2" />
              <line x1="90" y1="50" x2="90" y2="62" stroke="#1E293B" strokeWidth="1" />
              <polygon points="79,51 88,51 79,60" fill="#FFFFFF" opacity="0.6" />

              {/* Ground Floor Commercial Grand Lobby */}
              <rect x="50" y="68" width="52" height="28" rx="1" fill="#0F172A" />
              <rect x="46" y="66" width="60" height="3" rx="1" fill="#EF3340" />
              <rect x="54" y="72" width="18" height="24" fill="#BAE6FD" opacity="0.85" />
              <rect x="76" y="72" width="22" height="24" fill="#BAE6FD" opacity="0.85" />
              <line x1="63" y1="72" x2="63" y2="96" stroke="#0F172A" strokeWidth="1.2" />
              <line x1="87" y1="72" x2="87" y2="96" stroke="#0F172A" strokeWidth="1.2" />
              <circle cx="48" cy="74" r="2" fill="#FEF08A" className="animate-pulse" />
              <circle cx="104" cy="74" r="2" fill="#FEF08A" className="animate-pulse" />

              {/* Plaza Curb Base */}
              <rect x="14" y="99" width="102" height="4" rx="1.5" fill="#334155" />
              <line x1="10" y1="103" x2="120" y2="103" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />

              {/* Shimmering Commercial Finish Sparkles */}
              <path d="M 62 -2 L 64 4 L 70 6 L 64 8 L 62 14 L 60 8 L 54 6 L 60 4 Z" fill="#FFE600" className="sparkle-twinkle" />
              <path d="M 12 16 L 14 20 L 18 21 L 14 22 L 12 26 L 10 22 L 6 21 L 10 20 Z" fill="#FFE600" className="sparkle-twinkle-delay" />
              <path d="M 118 24 L 120 28 L 124 29 L 120 30 L 118 34 L 116 30 L 112 29 L 116 28 Z" fill="#FFE600" className="sparkle-twinkle" />

              {/* Floating Verified Commercial Completion Shield */}
              <g transform="translate(32, 90)">
                <rect x="0" y="0" width="76" height="18" rx="9" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="10" cy="9" r="5" fill="#FFFFFF" />
                <path d="M 7.5 9 L 9.5 11 L 12.5 7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <text x="18" y="12" fill="#FFFFFF" fontSize="6.8" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.4">100% COMMERCIAL</text>
              </g>
            </g>
          </svg>

          {/* 6 Step Nodes */}
          {steps.map((s, i) => {
            const pos = desktopPositions[i];
            const Icon = stepIcons[i];
            return (
              <div
                key={s.title}
                className="absolute group cursor-default transition-all duration-300"
                style={{ left: pos.left, top: pos.top }}
              >
                {/* Circle node */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] rounded-full bg-white shadow-[0_10px_32px_rgba(15,23,42,0.08)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-6px_rgba(239,51,64,0.25)] group-hover:border-[#EF3340]/30">
                  {/* Step number badge */}
                  <div className="absolute -top-2.5 -right-1 w-5 h-5 rounded-full bg-[#EF3340] flex items-center justify-center shadow-md border-2 border-white">
                    <span className="text-white text-[9px] font-black leading-none">{i + 1}</span>
                  </div>
                  {/* Outer halo */}
                  <div className="absolute -inset-3 rounded-full border border-[#EF3340]/15 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  {/* Inner ring */}
                  <div className="absolute inset-1 rounded-full border border-transparent group-hover:border-[#EF3340]/30 transition-all duration-300" />
                  {/* Icon */}
                  <Icon className="h-7 w-7 text-slate-400 group-hover:text-[#EF3340] transition-colors duration-300" />
                </div>

                {/* Text block below node */}
                <div className="absolute top-[48px] -translate-x-1/2 text-center w-[220px] flex flex-col items-center pt-1">
                  <h3 className="font-extrabold text-[14px] sm:text-[15px] text-[#0F172A] leading-tight mt-1 mb-1.5 group-hover:text-[#EF3340] transition-colors duration-300 uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium px-1">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 2. MOBILE: Vertical Conduit Timeline with Commercial Icons ──── */}
        <div className="relative grid gap-7 sm:gap-8 pl-16 max-w-md mx-auto lg:hidden pt-8">
          {/* Animated vertical conduit - terminates cleanly inside the finale card */}
          <div className="absolute left-[27px] top-6 bottom-[72px] sm:bottom-[76px] w-2.5 pointer-events-none z-0">
            <div className="absolute inset-0 bg-slate-900/10 rounded-full blur-[2px]" />
            <div className="absolute inset-0 bg-[#334155] rounded-full" />
            <div className="absolute inset-[2px] rounded-full mobile-electric-flow" />
            <div className="absolute left-[3px] top-[2px] bottom-[2px] w-[1.5px] bg-white/75 rounded-full" />
          </div>

          {/* Top Mobile Commercial Building Painter */}
          <div className="absolute left-0 -top-7 pointer-events-none z-10 w-16 h-16">
            <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
              <rect x="10" y="14" width="60" height="5" rx="1" fill="#0F172A" />
              <rect x="12" y="19" width="56" height="50" rx="2" fill="#F1F5F9" stroke="#334155" strokeWidth="1.5" />
              <rect x="16" y="24" width="14" height="10" fill="#BAE6FD" stroke="#334155" strokeWidth="1" />
              <rect x="36" y="24" width="14" height="10" fill="#BAE6FD" stroke="#334155" strokeWidth="1" />
              {/* Fresh red coat */}
              <path d="M 46 19 L 68 19 L 68 55 L 46 55 Z" fill="#EF3340" />
              {/* Painter in basket */}
              <rect x="52" y="32" width="20" height="12" rx="1.5" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.2" />
              <circle cx="62" cy="24" r="3" fill="#FFD2A8" />
              <ellipse cx="62" cy="22" rx="4" ry="2.5" fill="#FFFFFF" stroke="#EF3340" strokeWidth="0.8" />
              <g className="painter-roller-motion">
                <line x1="60" y1="28" x2="48" y2="20" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="44" y="18" width="5" height="8" rx="1" fill="#EF3340" stroke="#FFFFFF" strokeWidth="0.8" />
              </g>
              <circle cx="40" cy="72" r="2" fill="#EF3340" className="animate-pulse" />
            </svg>
          </div>

          {steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={s.title} className="relative flex flex-col group text-left">
                {/* Circle node */}
                <div className="absolute -left-[56px] top-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-[#EF3340]/30">
                  {/* Step badge */}
                  <div className="absolute -top-1.5 -right-0.5 w-4 h-4 rounded-full bg-[#EF3340] flex items-center justify-center border border-white shadow-xs">
                    <span className="text-white text-[8px] font-black">{i + 1}</span>
                  </div>
                  <div className="absolute inset-0.5 rounded-full border border-transparent group-hover:border-[#EF3340]/40 transition-colors duration-300" />
                  <div className="absolute -inset-2 rounded-full border border-[#EF3340]/20 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  <Icon className="h-5 w-5 text-slate-400 group-hover:text-[#EF3340] transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="pl-4 py-0.5">
                  <h3 className="font-extrabold text-sm sm:text-base text-[#0F172A] leading-tight mt-0 mb-1 group-hover:text-[#EF3340] transition-colors duration-300 uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-sm">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Completed Commercial Property Finale on Mobile */}
          <div className="relative flex flex-col group text-left mt-1 pt-1">
            <div className="absolute -left-[60px] top-0 w-14 h-14 rounded-2xl bg-white shadow-[0_6px_20px_rgba(16,185,129,0.25)] border-2 border-emerald-500 flex items-center justify-center z-10 overflow-hidden p-1">
              <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
                <rect x="8" y="16" width="64" height="4" rx="1" fill="#0F172A" />
                <rect x="12" y="20" width="56" height="50" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                <rect x="12" y="20" width="16" height="50" fill="#EF3340" />
                <rect x="34" y="26" width="14" height="10" rx="1" fill="#FEF08A" stroke="#1E293B" strokeWidth="0.8" />
                <rect x="52" y="26" width="14" height="10" rx="1" fill="#FEF08A" stroke="#1E293B" strokeWidth="0.8" />
                <rect x="34" y="42" width="14" height="10" rx="1" fill="#FEF08A" stroke="#1E293B" strokeWidth="0.8" />
                <rect x="52" y="42" width="14" height="10" rx="1" fill="#FEF08A" stroke="#1E293B" strokeWidth="0.8" />
                <rect x="32" y="56" width="34" height="14" fill="#0F172A" />
                <path d="M 40 4 L 42 8 L 46 9 L 42 10 L 40 14 L 38 10 L 34 9 L 38 8 Z" fill="#FFE600" className="sparkle-twinkle" />
              </svg>
            </div>
            <div className="pl-4 py-0.5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[9.5px] font-black text-emerald-700 uppercase tracking-widest mb-1 shadow-2xs">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {isEs ? 'Propiedad Comercial Terminada' : 'Commercial Facility Completed'}
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-[#0F172A] leading-tight mt-0 mb-1">
                {isEs ? 'Edificio Totalmente Renovado' : 'Fully Transformed Commercial Building'}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-sm">
                {isEs
                  ? 'Acabado comercial de alto rendimiento, inspección aprobada y garantía de mano de obra por escrito activada.'
                  : 'High-performance commercial coating, final walkthrough approved, and written multi-year warranty activated.'}
              </p>
            </div>
          </div>

        </div>

        {/* ── Bottom Estimate CTA ────────────────────────────────────────── */}
        <div className="mt-10 sm:mt-12 lg:mt-0 text-center">
          <button
            type="button"
            onClick={openEstimateModal}
            className="inline-flex items-center gap-2 bg-[#EF3340] hover:bg-[#D8222F] text-white rounded-full px-7 py-3.5 text-xs sm:text-[13px] font-black uppercase tracking-wider shadow-[0_8px_25px_rgba(239,51,64,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer relative z-20 lg:mt-[-200px] lg:mb-[-100px]"
          >
            <span>{isEs ? 'Comenzar Su Proyecto Comercial' : 'Start Your Commercial Project'}</span>
            <ArrowRight className="size-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
