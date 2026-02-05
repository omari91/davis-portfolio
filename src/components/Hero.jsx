import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroImage, profileImage, tickerItems } from '../content';

function ValidationTicker() {
  return (
    <div className="relative mt-8 overflow-hidden rounded-full border border-white/40 bg-white/20 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl">
      <div className="ticker-track whitespace-nowrap text-sm font-semibold text-white/90">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span key={`${item}-${index}`} className="mx-6 inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-sky-200" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-4 md:pb-24">
      <img src={heroImage} alt="" className="absolute inset-0 -z-30 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950/75 via-slate-900/60 to-slate-900/30" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.35),transparent_54%)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div className="fade-in-up text-white">
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100/80 bg-emerald-50/90 px-4 py-2 text-sm font-semibold text-emerald-900 backdrop-blur">
              <span className="status-dot h-2.5 w-2.5 rounded-full bg-emerald-600" />
              Open to opportunities
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-100/70 bg-sky-50/85 px-4 py-2 text-sm font-semibold text-sky-900 backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Corporate Sales + Account Management
            </span>
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] md:text-6xl">
            People-first execution.
            <span className="block text-sky-200">Measured business outcomes.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-100 md:text-xl">
            I help teams protect key accounts, recover trust quickly, and build reliable growth through disciplined communication.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/75 px-7 py-4 font-semibold text-slate-900 shadow-[0_8px_30px_rgba(2,6,23,0.28)] backdrop-blur-xl transition hover:bg-white"
            >
              Book a conversation <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/proof"
              className="rounded-xl border border-white/45 bg-white/10 px-7 py-4 text-center font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
            >
              See problem-solution-impact
            </Link>
          </div>

          <ValidationTicker />
        </div>

        <div className="fade-in-up md:pl-6" style={{ animationDelay: '0.12s' }}>
          <div className="liquid-panel rounded-3xl p-6 text-white">
            <div className="mb-4 flex items-center justify-between text-white/90">
              <span className="text-sm font-semibold uppercase tracking-wide">Trust Snapshot</span>
              <span className="rounded-full border border-white/35 bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">3+ yrs B2B</span>
            </div>
            <div className="grid gap-5 sm:grid-cols-[96px_1fr]">
              <img src={profileImage} alt="Davis portrait" className="h-24 w-24 rounded-2xl object-cover ring-2 ring-white/40" />
              <div>
                <p className="text-lg font-bold">Davis N.</p>
                <p className="text-sm text-slate-100">Corporate Sales + Account Management</p>
                <p className="mt-2 text-sm text-slate-200">Steps up in pressure moments, builds trust, and owns outcomes.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-white/30 bg-white/10 p-3 backdrop-blur">
                <p className="text-2xl font-bold text-sky-200">100%</p>
                <p className="text-xs text-slate-100">Retention</p>
              </div>
              <div className="rounded-xl border border-white/30 bg-white/10 p-3 backdrop-blur">
                <p className="text-2xl font-bold text-sky-200">20%</p>
                <p className="text-xs text-slate-100">YoY Growth</p>
              </div>
              <div className="rounded-xl border border-white/30 bg-white/10 p-3 backdrop-blur">
                <p className="text-2xl font-bold text-sky-200">9h</p>
                <p className="text-xs text-slate-100">Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
