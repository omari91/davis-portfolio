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

      <footer className="bg-slate-950/95 px-6 py-16 text-center text-slate-300">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white">Let&apos;s build growth that lasts.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            I&apos;m open to account management, corporate sales, and client success opportunities.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#" className="rounded-full border border-white/30 bg-white/10 p-3 backdrop-blur-xl transition hover:bg-sky-500/25">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:contact@davis.com" className="rounded-full border border-white/30 bg-white/10 p-3 backdrop-blur-xl transition hover:bg-sky-500/25">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
