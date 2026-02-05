import React from 'react';
import { Award, Briefcase, CheckCircle2, Heart, Scale, ShieldCheck, TrendingUp } from 'lucide-react';

export default function CredibilityPage() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Credibility Signals</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Validation, benchmarks, and trust markers.</h1>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="liquid-panel rounded-2xl p-6">
            <Award className="h-6 w-6 text-sky-700" />
            <p className="mt-3 text-lg font-semibold text-slate-900">Awards</p>
            <p className="mt-2 text-sm text-slate-600">Recognized by mentors and senior colleagues for reliability and people-centered delivery.</p>
          </div>
          <div className="liquid-panel rounded-2xl p-6">
            <Scale className="h-6 w-6 text-sky-700" />
            <p className="mt-3 text-lg font-semibold text-slate-900">Standards</p>
            <p className="mt-2 text-sm text-slate-600">Values-driven professionalism with clear ethics, discretion, and service integrity.</p>
          </div>
          <div className="liquid-panel rounded-2xl p-6">
            <ShieldCheck className="h-6 w-6 text-sky-700" />
            <p className="mt-3 text-lg font-semibold text-slate-900">Benchmarks</p>
            <p className="mt-2 text-sm text-slate-600">Progress tracked against consistency goals: communication quality and trust retention.</p>
          </div>
          <div className="liquid-panel rounded-2xl p-6">
            <CheckCircle2 className="h-6 w-6 text-sky-700" />
            <p className="mt-3 text-lg font-semibold text-slate-900">Validation Method</p>
            <p className="mt-2 text-sm text-slate-600">Validated through client feedback, retention outcomes, mentor input, and performance reviews.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="liquid-panel rounded-2xl p-6">
            <Heart className="h-6 w-6 text-sky-700" />
            <p className="mt-3 text-lg font-semibold text-slate-900">Integrity</p>
            <p className="mt-2 text-sm text-slate-600">Shaped by cultural and church upbringing: honesty, compassion, and service to others.</p>
          </div>
          <div className="liquid-panel rounded-2xl p-6">
            <Briefcase className="h-6 w-6 text-sky-700" />
            <p className="mt-3 text-lg font-semibold text-slate-900">Service Leadership</p>
            <p className="mt-2 text-sm text-slate-600">People-centered leadership rooted in empathy, support, and organizational effectiveness.</p>
          </div>
          <div className="liquid-panel rounded-2xl p-6">
            <TrendingUp className="h-6 w-6 text-sky-700" />
            <p className="mt-3 text-lg font-semibold text-slate-900">Continuous Learning</p>
            <p className="mt-2 text-sm text-slate-600">Growth mindset across sales, leadership, client engagement, and mentorship.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
