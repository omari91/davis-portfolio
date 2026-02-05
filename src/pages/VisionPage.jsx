import React from 'react';

export default function VisionPage() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div className="liquid-panel rounded-3xl p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Future Vision</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">Scaling client trust into team-level leadership.</h1>
          <p className="mt-5 text-slate-600">
            In the short term, I aim to excel in corporate sales and account management. Long term, I am building toward leadership roles where I can shape strategy, mentor teams, and drive sustainable growth.
          </p>
        </div>
        <div className="liquid-panel rounded-3xl p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">How I want to contribute</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>- Strengthen client relationships through trust and consistency.</li>
            <li>- Mentor team members and support collaborative growth.</li>
            <li>- Build high-performing account teams with clear execution.</li>
            <li>- Keep learning and adapting to new market needs.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
