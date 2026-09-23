'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const EstimateModal: React.FC = () => {
  const { isEstimateOpen, closeEstimateModal, t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: '',
    address: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isEstimateOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleClose = () => {
    setSubmitted(false);
    closeEstimateModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 min-[400px]:p-4 sm:p-6 overflow-y-auto">
      {/* Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog (Duke Pattern) */}
      <div
        className="relative bg-white text-[#0F172A] max-w-xl w-full overflow-hidden z-10 rounded-2xl sm:rounded-[2.25rem] border border-black/10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Strip */}
        <div className="bg-[#062F57] text-white p-5 sm:p-7 relative border-b border-black/10">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 sm:top-5 right-4 sm:right-5 flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="size-4" />
          </button>

          <div className="flex items-center gap-2 mb-2 pr-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EF3340] text-[9.5px] font-mono font-black tracking-wider uppercase text-white shadow-xs shrink-0">
              <ShieldCheck className="size-3" />
              100% Commercial Only
            </span>
            <span className="hidden min-[380px]:inline text-[10px] font-mono text-slate-300 uppercase tracking-wider truncate">
              Dallas &amp; 50-Mile Radius
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-white">
            {t.modal.title}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {t.modal.subtitle}
          </p>
        </div>

        {/* Form Body */}
        <div className="p-4 min-[400px]:p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 mx-auto shadow-md">
                <CheckCircle2 className="size-8" />
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight text-[#0F172A]">
                {t.contact.successTitle}
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                {t.contact.successMessage}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-[#062F57] hover:bg-[#0B477D] text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Close' : 'Cerrar'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 mb-1">
                    {t.contact.fields.name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    suppressHydrationWarning
                    className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-slate-50 text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#062F57]"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 mb-1">
                    {t.contact.fields.company} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    suppressHydrationWarning
                    className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-slate-50 text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#062F57]"
                    placeholder="Company / Facility"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 mb-1">
                    {t.contact.fields.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    suppressHydrationWarning
                    className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-slate-50 text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#062F57]"
                    placeholder="(469) 368-5885"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 mb-1">
                    {t.contact.fields.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    suppressHydrationWarning
                    className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-slate-50 text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#062F57]"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 mb-1">
                  {t.contact.fields.projectType} *
                </label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  suppressHydrationWarning
                  className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-slate-50 text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#062F57]"
                >
                  <option value="">{t.contact.fields.projectTypePlaceholder}</option>
                  {t.contact.fields.projectTypes.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 mb-1">
                  {t.contact.fields.address} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  suppressHydrationWarning
                  className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-slate-50 text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#062F57]"
                  placeholder="Facility Address / Metroplex City"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 mb-1">
                  {t.contact.fields.details}
                </label>
                <textarea
                  rows={2}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  suppressHydrationWarning
                  className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-slate-50 text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#062F57]"
                  placeholder={t.contact.fields.detailsPlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white text-xs font-extrabold uppercase tracking-wider shadow-[0_6px_20px_rgba(239,51,64,0.35)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <span>
                  {submitting ? t.contact.fields.submitting : t.contact.fields.submit}
                </span>
                {!submitting && <ArrowUpRight className="size-4" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
