import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-80px 0px -40% 0px",
      }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // const handleLink = (href: string) => {
  //   setOpen(false);
  //   document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  // };
  const handleLink = (href: string) => {
    setOpen(false);
    setActive(href.slice(1));
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'glass-dark shadow-xl shadow-black/20 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleLink('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-base tracking-tight text-zinc-100 group-hover:text-white transition-colors">
            Vanita <span className="text-indigo-400">Bharadiya</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleLink(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active === link.href.slice(1)
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                  }`}
              >
                {link.label}
                {active === link.href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Vanita_Bharadiya_Full_Stack_Developer_Resume.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs px-4 py-2"
          >
            Resume
          </a>
          <button onClick={() => handleLink('#contact')} className="btn-primary text-xs px-4 py-2">
            Hire Me
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden w-9 h-9 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-white hover:border-indigo-500/60 transition-all"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="glass-dark border-t border-white/5 px-4 py-4 space-y-1">
          {links.map(link => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${active === link.href.slice(1)
                ? 'text-indigo-400 bg-indigo-500/10'
                : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 flex gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 justify-center text-xs py-2.5"
            >
              Resume
            </a>
            <button
              onClick={() => handleLink('#contact')}
              className="btn-primary flex-1 justify-center text-xs py-2.5"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
