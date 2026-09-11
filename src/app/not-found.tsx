import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Building2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020F1D] text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex size-16 items-center justify-center rounded-2xl bg-[#EF3340]/15 text-[#EF3340] border border-[#EF3340]/30 shadow-lg">
          <Building2 className="size-8" />
        </div>

        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EF3340] block mb-2">
            [ 404 // DIRECTORY RECORD NOT FOUND ]
          </span>
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white">
            Page Not Found
          </h1>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            The commercial specification or page you requested could not be located in the Painting Dallas directory.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-6 py-3 text-xs font-extrabold tracking-wide uppercase shadow-[0_6px_20px_rgba(239,51,64,0.35)] transition-all duration-200"
        >
          <ArrowLeft className="size-3.5" />
          <span>Return To Headquarters</span>
        </Link>
      </div>
    </div>
  );
}
