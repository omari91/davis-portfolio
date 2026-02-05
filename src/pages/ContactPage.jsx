import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="px-6 py-16">
      <div className="liquid-panel mx-auto max-w-3xl rounded-3xl p-8 text-center md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Contact</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Let&apos;s connect.</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          I&apos;m open to opportunities in corporate sales, account management, and people-centered leadership roles.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="#" className="rounded-full border border-white/60 bg-white/70 p-3 text-slate-800 backdrop-blur-xl">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:contact@davis.com" className="rounded-full border border-white/60 bg-white/70 p-3 text-slate-800 backdrop-blur-xl">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
