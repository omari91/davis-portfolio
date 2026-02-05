import React from 'react';
import { BarChart3, ClipboardCheck, Gauge, TrendingUp } from 'lucide-react';

export default function ProofPage() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Problem / Solution / Impact</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Outcome story with measurable proof.</h1>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="fade-in-up liquid-panel rounded-2xl bg-rose-50/55 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-700">Problem</p>
            <p className="mt-3 font-semibold text-slate-900">A high-value client account was left in limbo after an unexpected exit.</p>
            <p className="mt-2 text-sm text-slate-700">With limited experience, I faced elevated churn risk and immediate trust pressure.</p>
          </div>
          <div className="fade-in-up liquid-panel rounded-2xl bg-sky-50/55 p-6" style={{ animationDelay: '0.08s' }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">Solution</p>
            <p className="mt-3 font-semibold text-slate-900">I volunteered to take ownership, learn quickly, and communicate transparently.</p>
            <p className="mt-2 text-sm text-slate-700">Disciplined organization and proactive follow-ups stabilized the relationship.</p>
          </div>
          <div className="fade-in-up liquid-panel rounded-2xl bg-emerald-50/55 p-6" style={{ animationDelay: '0.16s' }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Impact</p>
            <p className="mt-3 font-semibold text-slate-900">The account was retained and later expanded.</p>
            <p className="mt-2 text-sm text-slate-700">This became a defining example of ownership under pressure.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="liquid-panel rounded-2xl bg-white/60 p-5">
            <Gauge className="h-5 w-5 text-sky-700" />
            <p className="mt-2 text-2xl font-bold text-slate-900">75%</p>
            <p className="text-sm text-slate-600">Latency reduction (36h to 9h)</p>
          </div>
          <div className="liquid-panel rounded-2xl bg-white/60 p-5">
            <BarChart3 className="h-5 w-5 text-sky-700" />
            <p className="mt-2 text-2xl font-bold text-slate-900">1.4x</p>
            <p className="text-sm text-slate-600">Renewal throughput (5 to 7/month)</p>
          </div>
          <div className="liquid-panel rounded-2xl bg-white/60 p-5">
            <TrendingUp className="h-5 w-5 text-sky-700" />
            <p className="mt-2 text-2xl font-bold text-slate-900">20%</p>
            <p className="text-sm text-slate-600">Year-over-year account growth</p>
          </div>
          <div className="liquid-panel rounded-2xl bg-white/60 p-5">
            <ClipboardCheck className="h-5 w-5 text-sky-700" />
            <p className="mt-2 text-2xl font-bold text-slate-900">12h/wk</p>
            <p className="text-sm text-slate-600">Time saved via better workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
}
