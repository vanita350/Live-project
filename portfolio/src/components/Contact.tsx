import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle2, Loader2, Copy, Check } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL: FormState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setForm(INITIAL);
    setTimeout(() => setStatus('idle'), 6000);
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(v => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors(v => ({ ...v, [field]: undefined }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('bharadiyavanitar@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute left-1/2 top-1/3 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 mb-4">
            Let's <span className="gradient-text">Build Something Great Together</span>
          </h2>

          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            I'm a passionate Full Stack Web Developer seeking full-time opportunities,
            internships, and freelance projects. Feel free to reach out if you'd like
            to collaborate or discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {/* Info cards */}
            <div className="card p-5 border border-zinc-800/60 space-y-4">
              <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">
                Contact Info
              </h3>
              <div className="space-y-3">
                <button
                  onClick={copyEmail}
                  className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-zinc-800/40 border border-zinc-700/40 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <p className="text-xs text-zinc-500 font-medium">Email</p>
                    <p className="text-sm text-zinc-300 font-medium truncate">bharadiyavanitar@gmail.com</p>
                  </div>
                  <div className="flex-shrink-0 text-zinc-600 group-hover:text-indigo-400 transition-colors">
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </div>
                </button>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-800/40 border border-zinc-700/40">
                  <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium">Location</p>
                    <p className="text-sm text-zinc-300 font-medium">Chaparabhata , Surat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="card p-5 border border-zinc-800/60">
              <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-4">
                Find Me Online
              </h3>
              <div className="space-y-2.5">
                {[
                  {
                    icon: Github,
                    label: 'GitHub',
                    sub: 'github.com/vanita350',
                    href: 'https://github.com/vanita350',
                    color: 'hover:border-zinc-600 hover:bg-zinc-800/60',
                    iconColor: 'text-zinc-300',
                  },
                  {
                    icon: Linkedin,
                    label: 'LinkedIn',
                    sub: 'linkedin.com/in/vanita-bharadiya',
                    href: 'https://www.linkedin.com/in/vanita-bharadiya',
                    color: 'hover:border-sky-500/40 hover:bg-sky-500/5',
                    iconColor: 'text-sky-400',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    sub: 'bharadiyavanitar@gmail.com',
                    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=bharadiyavanitar@gmail.com',
                    color: 'hover:border-indigo-500/40 hover:bg-indigo-500/5',
                    iconColor: 'text-indigo-400',
                  },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl border border-zinc-800/60 transition-all duration-200 group ${s.color}`}
                  >
                    <s.icon className={`w-4 h-4 ${s.iconColor}`} />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-zinc-300">{s.label}</p>
                      <p className="text-xs text-zinc-600 truncate">{s.sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            {/* <div className="card p-5 border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-400">Available Now</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Currently open to full-time roles, contract work, and interesting freelance projects. Typical response time: <span className="text-zinc-300 font-medium">&lt; 24 hours</span>.
              </p>
            </div> */}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card p-7 border border-zinc-800/60">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-2">Message Sent!</h3>
                  <p className="text-zinc-400 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1.5">
                        Full Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={handleChange('name')}
                        placeholder="Your Full Name"
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-800/60 border text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/60 transition-all ${errors.name ? 'border-red-500/60' : 'border-zinc-700/60 focus:border-indigo-500/50'
                          }`}
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1.5">
                        Email <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={handleChange('email')}
                        placeholder="yourname@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-800/60 border text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/60 transition-all ${errors.email ? 'border-red-500/60' : 'border-zinc-700/60 focus:border-indigo-500/50'
                          }`}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1.5">
                      Subject <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={handleChange('subject')}
                      placeholder="Project collaboration, Job opportunity..."
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-800/60 border text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/60 transition-all ${errors.subject ? 'border-red-500/60' : 'border-zinc-700/60 focus:border-indigo-500/50'
                        }`}
                    />
                    {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
                  </div>
                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1.5">
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={handleChange('message')}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-800/60 border text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/60 transition-all resize-none ${errors.message ? 'border-red-500/60' : 'border-zinc-700/60 focus:border-indigo-500/50'
                        }`}
                    />
                    <div className="flex items-center justify-between mt-1">
                      {errors.message ? (
                        <p className="text-xs text-red-400">{errors.message}</p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs text-zinc-600">{form.message.length}/500</span>
                    </div>
                  </div>
                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full justify-center py-3.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-xs text-zinc-600 text-center">
                    Or reach me directly at{' '}
                    <a
                      href="mailto:bharadiyavanitar@gmail.com"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                    >
                      bharadiyavanitar@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
