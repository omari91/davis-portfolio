import React, { useState } from 'react';
import { Languages, Linkedin, Mail, Menu, X } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/proof', label: 'Proof' },
  { to: '/credibility', label: 'Credibility' },
  { to: '/vision', label: 'Vision' },
  { to: '/contact', label: 'Contact' },
];

function NavItem({ to, label, end = false, mobile = false, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `rounded-full px-4 py-2 text-sm font-semibold transition ${
          isActive
            ? 'border border-white/70 bg-white/80 text-slate-900 shadow-sm backdrop-blur-xl'
            : 'text-slate-700 hover:bg-white/60 hover:text-slate-900'
        } ${mobile ? 'block w-full text-left text-base' : ''}`
      }
    >
      {label}
    </NavLink>
  );
}

export default function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [locale, setLocale] = useState('EN');

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100 text-slate-800">
      <div className="pointer-events-none fixed -left-20 top-24 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl" />
      <div className="pointer-events-none fixed right-0 top-[34rem] h-96 w-96 rounded-full bg-blue-200/45 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

      <nav className="fixed inset-x-0 top-0 z-50 px-4 py-4">
        <div className="liquid-panel mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-6 py-3">
          <NavLink to="/" className="text-xl font-bold tracking-tight text-slate-900">
            DAVIS<span className="text-sky-600">.</span>
          </NavLink>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="inline-flex items-center rounded-full border border-white/60 bg-white/60 p-1 backdrop-blur-xl">
              {['EN', 'FR'].map((lang) => (
                <button
                  key={lang}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    locale === lang ? 'bg-slate-900 text-white' : 'text-slate-700'
                  }`}
                  onClick={() => setLocale(lang)}
                  aria-label={`Switch language to ${lang}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <NavLink
              to="/contact"
              className="rounded-full border border-white/70 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-900 backdrop-blur-xl transition hover:bg-white"
            >
              Let&apos;s Talk
            </NavLink>
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-lg border border-white/40 bg-white/60 p-2 text-slate-700 backdrop-blur md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="liquid-panel mx-4 mt-4 rounded-2xl p-4 shadow-xl md:hidden">
            <div className="mb-4 flex items-center gap-2 rounded-lg border border-white/65 bg-white/55 px-3 py-2 text-sm text-slate-600">
              <Languages className="h-4 w-4" /> Language: {locale}
            </div>
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavItem key={item.to} {...item} mobile onClick={() => setIsMenuOpen(false)} />
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-28 md:pt-32">
        <Outlet />
      </main>

      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/60 bg-gradient-to-r from-slate-900 to-sky-900 px-6 py-12 text-white shadow-2xl md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Ready To Collaborate</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">Let&apos;s grow your accounts with clarity, consistency, and trust.</h2>
          <p className="mt-4 max-w-2xl text-slate-200">
            Open to account management and client success roles where execution and relationships matter.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <NavLink
              to="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Start A Conversation
            </NavLink>
            <NavLink
              to="/proof"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              See Results
            </NavLink>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950/95 px-6 py-12 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-bold tracking-tight text-white">
              DAVIS<span className="text-sky-400">.</span>
            </p>
            <p className="mt-2 text-sm text-slate-400">Built for measurable growth and long-term client trust.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className="transition hover:text-white">
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Visit LinkedIn profile"
              className="rounded-full border border-white/30 bg-white/10 p-3 backdrop-blur-xl transition hover:bg-sky-500/25"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@davis.com"
              aria-label="Send email"
              className="rounded-full border border-white/30 bg-white/10 p-3 backdrop-blur-xl transition hover:bg-sky-500/25"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-5 text-xs text-slate-500">
          © {new Date().getFullYear()} Davis Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
