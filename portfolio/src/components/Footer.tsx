import { Code2, Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-zinc-800/60 bg-zinc-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-zinc-100">
                Vanita <span className="text-indigo-400">Bharadiya</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 text-center md:text-left max-w-xs leading-relaxed">
              Building thoughtful digital experiences, one component at a time.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs text-zinc-500 hover:text-indigo-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))} 
          </nav>

          {/* Social + back to top */}
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/vanita350', icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com/in/vanita-bharadiya', icon: Linkedin, label: 'LinkedIn' },
              // { href: 'mailto:bharadiyavanitar@gmail.com?subject=Hello%20Vanita', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center text-zinc-500 hover:text-indigo-400 hover:border-indigo-500/40 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:bg-indigo-600/30 hover:border-indigo-400/50 transition-all duration-200 ml-1"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        {/* <div className="mt-8 pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-600">
          <p>
            &copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-red-500/70 fill-current" /> using React &amp; Tailwind
          </p>
        </div> */}
      </div>
    </footer>
  );
}
