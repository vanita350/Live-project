import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown, Sparkles } from 'lucide-react';

const ROLES = [
  'Full-Stack Web Developer',
  'React & Node.js Engineer',
  'MongoDB & Express.js Developer',
  'JavaScript Enthusiast',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60
      );
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        35
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, deleting, roleIdx]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/12 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-8 animate-fade-in">
          <Sparkles className="w-3 h-3" />
          Available for new opportunities
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div> */}

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-up">
          <span className="block text-zinc-100">Hi, I'm</span>
          <span className="block gradient-text mt-1">Vanita Bharadiya</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-10 flex items-center justify-center mb-6 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both', opacity: 0 }}>
          <p className="text-lg sm:text-xl md:text-2xl font-mono text-zinc-400">
            <span className="text-indigo-400">&gt;</span>{' '}
            <span className="text-zinc-200">{displayed}</span>
            <span className="inline-block w-0.5 h-5 bg-indigo-400 ml-0.5 animate-pulse align-middle" />
          </p>
        </div>

        {/* Subheading */}
        <p
          className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 leading-relaxed mb-10"
          style={{ animation: 'fadeUp 0.7s ease-out 0.4s forwards', opacity: 0 }}
        >
          Passionate Full-Stack Web Developer specializing in React.js, Node.js, Express.js, and MongoDB. I enjoy building responsive, user-friendly web applications and continuously learning modern web technologies.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
          style={{ animation: 'fadeUp 0.7s ease-out 0.6s forwards', opacity: 0 }}
        >
          <button onClick={scrollToProjects} className="btn-primary group">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={scrollToContact} className="btn-outline">
            Contact Me
            <Mail className="w-4 h-4" />
          </button>
          <a
            href="/Vanita_Bharadiya_Resume.pdf"
            download="Vanita_Bharadiya_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors group"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
        </div>

        {/* Social icons */}
        <div
          className="flex items-center justify-center gap-4"
          style={{ animation: 'fadeUp 0.7s ease-out 0.8s forwards', opacity: 0 }}
        >
          {[
            {
              href: 'https://github.com/vanita350',
              icon: Github,
              label: 'GitHub',
              color: 'hover:bg-zinc-700/60 hover:border-zinc-600',
            },
            {
              href: 'https://www.linkedin.com/in/vanita-bharadiya',
              icon: Linkedin,
              label: 'LinkedIn',
              color: 'hover:bg-sky-500/10 hover:border-sky-500/40',
            },
            {
              href: 'https://mail.google.com/mail/?view=cm&fs=1&to=bharadiyavanitar@gmail.com',
              icon: Mail,
              label: 'Email',
              color: 'hover:bg-indigo-500/10 hover:border-indigo-500/40',
            },

          ].map(({ href, icon: Icon, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`w-11 h-11 rounded-xl glass border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 ${color}`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
          <div className="h-px w-12 bg-gradient-to-r from-zinc-700 to-transparent" />
          <span className="text-xs text-zinc-600 font-medium tracking-widest uppercase">
            Connect
          </span>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto"
          style={{ animation: 'fadeUp 0.7s ease-out 1s forwards', opacity: 0 }}
        >
          {[
            { value: '4+', label: 'Month Exp.' },
            { value: '15+', label: 'Projects Built' },
            { value: '10+', label: 'Tech Stack' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-zinc-500 mt-0.5 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector('#stack')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-indigo-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
