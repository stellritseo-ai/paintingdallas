'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const TinySparkleIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#EF3340] fill-[#EF3340] shrink-0" viewBox="0 0 24 24">
    <path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const isEs = language === 'es';

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    propertyType: 'Commercial Office Building',
    timeframe: 'Urgent (within 24-48 hours)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-[60px] bg-white border-b border-slate-100 overflow-hidden font-['Inter',sans-serif]">
      <div id="free-estimate" className="pointer-events-none absolute -top-24" />

      {/* Subtle radial dot grid texture like brown */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-[#EF3340]/10 border border-[#EF3340]/30 text-[#EF3340] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
            <TinySparkleIcon /> {isEs ? 'Solicitar Cotización' : 'Request a Quote'} <TinySparkleIcon />
          </span>
          <h2 className="text-[20px] min-[400px]:text-[22px] sm:text-[26px] md:text-3xl lg:text-[36px] font-extrabold text-[#0F172A] leading-tight mt-0 sm:mt-[-10px] mb-[5px] tracking-tight capitalize whitespace-normal sm:whitespace-nowrap">
            {isEs ? 'Obtenga Su ' : 'Get Your Free, '}
            <span className="text-[#062F57]">{isEs ? 'Cotización Sin Compromiso' : 'No-Obligation Quote'}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            {isEs ? (
              <>
                Díganos lo que necesita — pintura comercial interior, exterior, pisos epóxicos o renovación de edificios —
                <br className="hidden sm:inline" /> y le brindaremos una cotización honesta y competitiva en 24 horas.
              </>
            ) : (
              <>
                Tell us what you need — commercial interior, exterior, epoxy flooring, or building repaints —
                <br className="hidden sm:inline" /> and we'll provide an honest, competitive quote within 24 hours.
              </>
            )}
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Contact Info Card */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#062F57] via-[#041E38] to-[#021020] text-white p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-white/15">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#EF3340]/15 blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/20 text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EF3340] animate-pulse" />
                Dallas Office &amp; 50-Mile Dispatch
              </span>

              <h3 className="text-2xl font-black uppercase tracking-wider text-white">
                {isEs ? 'Información de Contacto' : 'Contact Info'}
              </h3>
              <p className="mt-3 text-sm text-white/90 font-medium leading-relaxed">
                Painting Dallas — Commercial Painting Specialists • Serving DFW Facilities &amp; Commercial Properties.
              </p>

              <ul className="mt-8 space-y-6">
                <Item
                  icon={Phone}
                  label={isEs ? 'Línea Directa Comercial' : 'Direct Phone & Commercial Hotline'}
                  value="(469) 360-5805"
                  href="tel:4693605805"
                  isCall
                />
                <Item
                  icon={Mail}
                  label={isEs ? 'Correo Electrónico de Estimaciones' : 'Direct Estimating Email'}
                  value="info@paintingdallas.com"
                  href="mailto:info@paintingdallas.com"
                />
                <Item
                  icon={MapPin}
                  label={isEs ? 'Oficina de Despacho DFW' : 'DFW Dispatch Office'}
                  value="Dallas, TX 75201"
                />
                <Item
                  icon={ShieldCheck}
                  label={isEs ? 'Plazo de Respuesta' : 'Commercial Turnaround'}
                  value={isEs ? 'Presupuesto Detallado en 24 Horas' : 'Itemized Line-Item Bid within 24 Hours'}
                />
              </ul>
            </div>

            <div className="relative mt-10 pt-6 border-t border-white/15 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#EF3340] shrink-0" />
              <span className="text-[10px] uppercase font-bold tracking-wider text-white/90">
                Licensed · Insured · Bonded · $5,000,000 Aggregate
              </span>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-center">
            {submitted ? (
              <div className="grid place-items-center text-center py-16">
                <div className="grid place-items-center h-16 w-16 rounded-full bg-emerald-500/15 text-emerald-600 mb-5 shadow-sm">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black text-[#0F172A] uppercase tracking-wider">
                  {isEs ? 'Solicitud Recibida' : 'Request Received'}
                </h3>
                <p className="mt-3 text-sm text-slate-600 font-semibold max-w-sm">
                  {isEs
                    ? 'Responderemos dentro de las 24 horas. Para urgencias, llame al (469) 360-5805.'
                    : "We'll respond within 24 hours. For urgent commercial needs, call (469) 360-5805."}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-[#062F57] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B477D] transition-colors cursor-pointer"
                >
                  {isEs ? 'Enviar Otra Solicitud' : 'Submit Another Request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label={isEs ? 'Nombre Completo *' : 'Full Name *'}
                    name="name"
                    placeholder="Marcus Vance"
                    required
                    value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <Field
                    label={isEs ? 'Número de Teléfono *' : 'Phone Number *'}
                    name="phone"
                    type="tel"
                    placeholder="(469) 360-5805"
                    required
                    value={formData.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <Field
                    label={isEs ? 'Correo Electrónico Laboral *' : 'Email Address *'}
                    name="email"
                    type="email"
                    placeholder="yourname@company.com"
                    required
                    value={formData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <Field
                    label={isEs ? 'Dirección / Ciudad en DFW *' : 'Address / City *'}
                    name="address"
                    placeholder="Dallas, TX"
                    required
                    value={formData.address}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />

                  <div>
                    <Label>{isEs ? 'Tipo de Propiedad' : 'Property Type'}</Label>
                    <select
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-4 focus:ring-[#062F57]/10 focus:border-[#062F57] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Commercial Office Building">
                        {isEs ? 'Edificio de Oficinas Corporativo' : 'Commercial Office Building'}
                      </option>
                      <option value="Industrial & Warehouse">
                        {isEs ? 'Nave Industrial y Almacén' : 'Industrial & Warehouse'}
                      </option>
                      <option value="Retail & Shopping Center">
                        {isEs ? 'Centro Comercial y Tienda' : 'Retail & Shopping Center'}
                      </option>
                      <option value="Commercial Facility Repaint">
                        {isEs ? 'Repintado de Instalación Comercial' : 'Commercial Facility Repaint'}
                      </option>
                      <option value="Specialty Epoxy & Metal">
                        {isEs ? 'Pisos Epóxicos y Recubrimientos Metálicos' : 'Specialty Epoxy & Metal'}
                      </option>
                      <option value="Multi-Tenant Commercial">
                        {isEs ? 'Inmueble Comercial Multi-Inquilino' : 'Multi-Tenant Commercial'}
                      </option>
                      <option value="Other Commercial">
                        {isEs ? 'Otro Proyecto Comercial' : 'Other Commercial'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <Label>{isEs ? '¿Con qué urgencia requiere el servicio?' : 'How soon do you need service?'}</Label>
                    <select
                      name="timeframe"
                      required
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      suppressHydrationWarning
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-4 focus:ring-[#062F57]/10 focus:border-[#062F57] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Urgent (within 24-48 hours)">
                        {isEs ? 'Urgente (dentro de 24-48 horas)' : 'Urgent (within 24-48 hours)'}
                      </option>
                      <option value="Within 1 week">
                        {isEs ? 'Dentro de 1 semana' : 'Within 1 week'}
                      </option>
                      <option value="Within 2 weeks">
                        {isEs ? 'Dentro de 2 semanas' : 'Within 2 weeks'}
                      </option>
                      <option value="Within 30 days">
                        {isEs ? 'Dentro de 30 días' : 'Within 30 days'}
                      </option>
                      <option value="Flexible / Planning">
                        {isEs ? 'Flexible / Fase de Planificación' : 'Flexible / Planning'}
                      </option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <Label>{isEs ? 'Descripción Breve del Trabajo' : 'Brief Description of the Job'}</Label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      suppressHydrationWarning
                      placeholder={
                        isEs
                          ? 'Cuéntenos lo que necesita — pintura interior, exterior, metraje cuadrado aproximado, turnos nocturnos o especificaciones de pintura...'
                          : 'Tell us what you need — commercial interior, exterior, approximate square footage, off-hours phasing, or specific paint specs...'
                      }
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-4 focus:ring-[#062F57]/10 focus:border-[#062F57] focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340] hover:from-[#EF3340] hover:to-[#D8222F] text-white px-6 py-4 text-xs font-black uppercase tracking-wider shadow-md hover:brightness-105 cursor-pointer transition-all duration-300 disabled:opacity-75"
                >
                  <span>{submitting ? (isEs ? 'Enviando...' : 'Submitting...') : (isEs ? 'Enviar Solicitud →' : 'Submit Request →')}</span>
                  <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-[11px] text-slate-500 font-semibold">
                  {isEs
                    ? 'Responderemos dentro de las 24 horas. Para urgencias, llame al (469) 360-5805.'
                    : "We'll respond within 24 hours. For urgent needs, call (469) 360-5805."}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

function Item({
  icon: Icon,
  label,
  value,
  href,
  isCall,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  isCall?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <div
        className={`grid place-items-center h-10 w-10 rounded-xl text-white shrink-0 transition-all duration-300 ${
          isCall
            ? 'bg-[#EF3340] text-white shadow-sm'
            : 'bg-white/10 border border-white/10 hover:bg-white/15'
        }`}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="text-left">
        <div className="text-[9px] uppercase tracking-wider text-white/70 font-bold">
          {label}
        </div>
        <div
          className={`font-bold leading-tight ${
            isCall ? 'text-lg text-white font-mono' : 'text-sm text-white/95'
          }`}
        >
          {value}
        </div>
      </div>
    </div>
  );

  return href ? (
    <li>
      <a
        href={href}
        className="block hover:translate-x-1.5 transition-transform duration-200"
      >
        {inner}
      </a>
    </li>
  ) : (
    <li>{inner}</li>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  value,
  onChange,
  className = '',
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        suppressHydrationWarning
        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-4 focus:ring-[#062F57]/10 focus:border-[#062F57] focus:bg-white transition-all"
      />
    </div>
  );
}
