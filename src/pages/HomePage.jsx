import React from 'react';
import { Briefcase, Target } from 'lucide-react';
import Hero from '../components/Hero';
import { profileImage, quickSummary } from '../content';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-6 py-16">
        <div className="liquid-panel mx-auto max-w-6xl rounded-3xl p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Quick Summary</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">For busy recruiters and hiring managers.</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            {quickSummary.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Problem Context</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">A people-first approach backed by discipline.</h2>
            <p className="mt-5 text-slate-600">
              Transitioning into sales was challenging, with high expectations and frequent rejection. I improved by refining communication, actively listening, and treating setbacks as feedback.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="liquid-panel rounded-2xl p-5">
                <Briefcase className="h-6 w-6 text-sky-700" />
                <p className="mt-2 font-semibold text-slate-900">Solution</p>
                <p className="text-sm text-slate-600">Time management, prioritization, and clear client communication habits.</p>
              </div>
              <div className="liquid-panel rounded-2xl p-5">
                <Target className="h-6 w-6 text-sky-700" />
                <p className="mt-2 font-semibold text-slate-900">Impact</p>
                <p className="text-sm text-slate-600">Reliable delivery, stronger relationships, and measurable account progress.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={profileImage} alt="Davis at work" className="h-full w-full rounded-3xl object-cover shadow-2xl" />
            <div className="absolute -bottom-6 right-6 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-lg backdrop-blur-xl">
              <p className="text-sm font-semibold text-sky-900">"People matter. Consistency builds trust."</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
