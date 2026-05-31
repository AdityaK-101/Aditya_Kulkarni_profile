import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-40 w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="glass-strong relative mx-auto flex max-w-7xl items-center rounded-full px-4 py-3 shadow-soft sm:px-5">
        <Link to="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-black text-xs text-paper dark:bg-paper dark:text-ink">
            AK
          </span>
          <span className="hidden sm:block">Aditya Kulkarni</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-2 md:flex md:pr-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-ink text-paper dark:bg-paper dark:text-ink' : 'text-muted hover:bg-black/5 dark:hover:bg-white/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:ml-0">
          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open ? (
          <div className="absolute left-4 right-4 top-full mt-3 rounded-[1.5rem] border border-border bg-[var(--surface-strong)] p-3 shadow-soft md:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-[1rem] px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-ink text-paper dark:bg-paper dark:text-ink' : 'text-muted hover:bg-black/5 dark:hover:bg-white/10'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}