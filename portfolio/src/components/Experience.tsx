import { Briefcase, GraduationCap, Code2, CheckCircle2, Award } from 'lucide-react';

type TimelineItem = {
  type: 'work' | 'education' | 'certification';
  role: string;
  org: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

const timeline: TimelineItem[] = [
  {
    type: 'work',
    role: 'Full Stack Web Developer ',
    org: 'Hidden Ideas Infotech',
    period: '4 Months Internship',
    location: 'Surat, Gujarat',
    description:
      'Completed a 4-month internship as a Full Stack Web Developer, contributing to responsive web applications using modern frontend and backend technologies.',
    highlights: [
      'Developed responsive user interfaces using HTML5, CSS3, JavaScript, React.js, Bootstrap, and Tailwind CSS.',
      'Built REST APIs using Node.js and Express.js.',
      'Integrated MongoDB for CRUD operations and data management.',
      'Worked with Git, GitHub, VS Code, and Postman during development and testing.',
      'Followed MVC architecture and collaborated with the development team on real-world projects.',
    ],
  },

  {
    type: 'education',
    role: 'Bachelor of Computer Applications (BCA)',
    org: 'Swarrnim Startup & Innovation University (SSIU)',
    period: '2023 – 2026',
    location: 'Gandhinagar, Gujarat',
    description:
      'Currently in the final year of the Bachelor of Computer Applications (BCA) program, specializing in Full Stack Web Development.',
    highlights: [
      'Learning Full Stack Web Development using React.js, Node.js, Express.js, and MongoDB.',
      'Completed a 4-month Full Stack Web Developer Internship at Hidden Ideas Infotech.',
      'Built multiple full-stack web applications following MVC architecture and REST APIs.',
      'Studied Data Structures & Algorithms (DSA) using C and C++.',
    ],
  },
  {
    type: 'education',
    role: 'Higher Secondary (Commerce)',
    org: 'Geetanjali Science School, Botad',
    period: '2023',
    location: 'Botad, Gujarat',
    description:
      'Completed Higher Secondary Education in the Commerce stream.',
    highlights: [
      'Successfully completed Class 12 (Commerce).',
      'Developed a strong foundation in analytical and problem-solving skills.',
    ],
  },
  {
    type: 'certification',
    role: 'Full-Stack Web Development Certification',
    org: 'Red & White Multimedia Education, Surat',
    period: '2024 – 2025',
    location: 'Surat, Gujarat',
    description:
      'Successfully completed a professional Full-Stack Web Development certification program with hands-on training in modern web technologies.',
    highlights: [
      'Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Tailwind CSS.',
      'Backend: Node.js, Express.js, REST APIs, and Middleware.',
      'Database: MongoDB, LocalStorage, and JSON-based Storage.',
      'Built multiple full-stack projects using MVC architecture, Git, and GitHub.',
    ],
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
};

const colorMap = {
  work: {
    dot: 'bg-indigo-500 border-indigo-400/50',
    card: 'border-indigo-500/20 hover:border-indigo-400/40',
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    icon: 'text-indigo-400',
  },
  education: {
    dot: 'bg-violet-500 border-violet-400/50',
    card: 'border-violet-500/20 hover:border-violet-400/40',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    icon: 'text-violet-400',
  },
  certification: {
    dot: 'bg-violet-500 border-violet-400/50',
    card: 'border-violet-500/20 hover:border-violet-400/40',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    icon: 'text-violet-400',
  },
};

const capabilities = [
  { label: 'HTML5, CSS3 & JavaScript (ES6+)', pct: 92 },
  { label: 'React.js & Redux', pct: 90 },
  { label: 'Node.js & Express.js', pct: 88 },
  { label: 'MongoDB & CRUD Operations', pct: 85 },
  { label: 'REST APIs & MVC Architecture', pct: 90 },
  { label: 'Git, GitHub & VS Code', pct: 90 },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-violet-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 mb-4">
            Experience &amp; <span className="gradient-text">About</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Passionate Full Stack Web Developer with internship experience in building responsive and user-friendly web applications using React.js, Node.js, Express.js, and MongoDB.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Timeline — left */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, i) => {
                  const Icon = iconMap[item.type];
                  const colors = colorMap[item.type];
                  return (
                    <div key={i} className="relative pl-12">
                      {/* Dot */}
                      <div
                        className={`absolute left-0 top-5 w-8 h-8 rounded-full border-2 ${colors.dot} flex items-center justify-center z-10 bg-zinc-950`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${colors.icon}`} />
                      </div>

                      {/* Card */}
                      <div
                        className={`card p-5 border ${colors.card} hover:-translate-y-0.5 transition-all duration-300`}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div>
                            <h3 className="font-bold text-zinc-100 text-base">{item.role}</h3>
                            <p className="text-sm text-zinc-400 font-medium">{item.org}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold border ${colors.badge}`}>
                              {item.period}
                            </span>
                            <p className="text-xs text-zinc-600 mt-1">{item.location}</p>
                          </div>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <ul className="space-y-1.5">
                          {item.highlights.map((h, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-zinc-400">
                              <CheckCircle2 className={`w-3.5 h-3.5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>        
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* About + Capabilities — right */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio card */}
            <div className="card p-6 border border-zinc-800/60">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative flex-shrink-0">
                  <img
                    src="/vanita.png"
                    alt="vanita bharadiya"
                    className="w-16 h-16 rounded-2xl object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-zinc-950" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-100 text-base">
                    Vanita Bharadiya
                  </h3>

                  <p className="text-sm text-zinc-400">
                    Full Stack Web Developer
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-zinc-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Full Stack Developer Opportunities
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">

                Passionate Full Stack Web Developer with internship experience in building responsive and user-friendly web applications using React.js, Node.js, Express.js, and MongoDB. I enjoy creating clean, responsive, and scalable web applications while continuously learning modern technologies.
              </p>
              <div className="flex gap-3 mt-5">
                <div className="flex-1 text-center px-3 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/40">
                  {/* <div className="text-lg font-bold gradient-text">2+</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Years</div> */}
                  <div className="text-lg font-bold gradient-text">
                    4+ Months
                  </div>

                  <div className="text-xs text-zinc-500">
                    Internship
                  </div>  
                </div>
                <div className="flex-1 text-center px-3 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/40">
                  <div className="text-lg font-bold gradient-text">10+</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Projects</div>
                </div>
                {/* <div className="flex-1 text-center px-3 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/40">
                  <div className="text-lg font-bold gradient-text">30+</div>
                  <div className="text-xs text-zinc-500 mt-0.5">PRs Merged</div>
                </div> */}
              </div>
            </div>

            {/* Capabilities */}
            <div className="card p-6 border border-zinc-800/60">
              <div className="flex items-center gap-2 mb-5">
                <Code2 className="w-4 h-4 text-indigo-400" />
                <h3 className="font-bold text-zinc-200 text-sm uppercase tracking-wide">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-4">
                {capabilities.map(c => (
                  <div key={c.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs text-zinc-300 font-medium">{c.label}</span>
                      <span className="text-xs text-zinc-500 font-mono">{c.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                        style={{ width: `${c.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="card p-6 border border-zinc-800/60">
              <h3 className="font-bold text-zinc-200 text-sm uppercase tracking-wide mb-4">
               Professional Values
              </h3>
              <div className="space-y-2">
                {[

                  'Clean & maintainable code',
                  'Responsive and accessible UI',
                  'REST API & MVC architecture',
                  'Continuous learning and growth',
                  'Team collaboration and problem-solving',

                ].map(v => (
                  <div key={v} className="flex items-center gap-2 text-sm text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
