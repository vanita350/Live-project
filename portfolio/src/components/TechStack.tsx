type Skill = { name: string };

type Category = {
  title: string;
  color: string;
  border: string;
  glow: string;
  dot: string;
  icon: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: 'Programming Languages',
    color: 'from-indigo-500/10 to-indigo-500/5',
    border: 'border-indigo-500/20 hover:border-indigo-400/50',
    glow: 'group-hover:shadow-indigo-500/10',
    dot: 'bg-indigo-400',
    icon: '💻',
    skills: [
      { name: 'JavaScript (ES6+)' },
      { name: 'C' },
      { name: 'C++' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-violet-500/10 to-violet-500/5',
    border: 'border-violet-500/20 hover:border-violet-400/50',
    glow: 'group-hover:shadow-violet-500/10',
    dot: 'bg-violet-400',
    icon: '⚛️',
    skills: [
      { name: 'React.js' },
      { name: 'Media Queries' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
    ],
  },
  {
    title: 'Backend',
    color: 'from-emerald-500/10 to-emerald-500/5',
    border: 'border-emerald-500/20 hover:border-emerald-400/50',
    glow: 'group-hover:shadow-emerald-500/10',
    dot: 'bg-emerald-400',
    icon: '⚙️',
    skills: [
      // { name: 'FastAPI' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      // { name: 'REST API Design' },
      // { name: 'Middleware' },
    ],
  },
  {
    title: 'Database',
    color: 'from-sky-500/10 to-sky-500/5',
    border: 'border-sky-500/20 hover:border-sky-400/50',
    glow: 'group-hover:shadow-sky-500/10',
    dot: 'bg-sky-400',
    icon: '🗄️',
    skills: [
      // { name: 'LocalStorage' },
      { name: 'JSON-based Storage' },
      { name: 'MongoDB' },
    ],
  },
  {
    title: 'Tools & APIs',
    color: 'from-orange-500/10 to-orange-500/5',
    border: 'border-orange-500/20 hover:border-orange-400/50',
    glow: 'group-hover:shadow-orange-500/10',
    dot: 'bg-orange-400',
    icon: '🛠️',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      // { name: 'VS Code' },
      // { name: 'npm' },
    ],
  },
];


function SkillBar({ name }: { name: string }) {
  // Map common skills to emoji icons; fallback to initials
  const icons: Record<string, string> = {
    'JavaScript (ES6+)': '🟨',
    JavaScript: '🟨',
    'React.js': '⚛️',
    'Responsive Design': '📱',
    'Tailwind CSS': '🌬️',
    Bootstrap: '🅱️',
    C: '🔵',
    'C++': '➕➕',
    HTML5: '🟧',
    'CSS3 (Media Queries)': '🎨',
    FastAPI: '🚀',
    'Node.js': '🟢',
    'Express.js': '🚂',
    'REST API Design': '🔗',
    Middleware: '🔀',
    LocalStorage: '💾',
    'JSON-based Storage': '🗄️',
    MongoDB: '🍃',
    Git: '🔧',
    GitHub: '🐙',
    'VS Code': '💠',
    npm: '📦',
    // 'MongoDB': '🍃',
    // 'Express.js': '🚂',
    // 'React.js': '⚛️',
    // 'Node.js': '🟢',
  };

  const icon = icons[name] || icons[name.replace(/\..*/, '')] ||
    name
      .split(' ')
      .map(part => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')
      .toUpperCase();

  return (
    <div className="flex items-center" title={name}>
      <div className="w-12 h-12 rounded-full bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center text-sm font-semibold text-zinc-200">
        <span className="text-2xl">{icon}</span>
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="section-padding relative">
      {/* BG accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Skills & Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 mb-4">
            My Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            A My core technologies include JavaScript, React.js, Node.js, Express.js, MongoDB, HTML5, CSS3, Bootstrap, Tailwind CSS, Git, and REST APIs for building responsive full-stack web applications.
          </p>
        </div>

        {/* Skills grid (flattened, no categories) */}
        {(() => {
          const allSkills = categories.flatMap(cat =>
            cat.skills.map(s => ({ ...s, category: cat.title }))
          );
          return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
              {allSkills.map(skill => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-3 bg-zinc-900/40 rounded-lg border border-zinc-700/50"
                >
                  <SkillBar name={skill.name} />
                  <span className="mt-2 text-xs text-zinc-300 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          );
        })()}

        {/* Additional badges */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm mb-5 font-medium uppercase tracking-widest">
            Also worked with
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              'MongoDB',
              'Express.js',
              'React.js',
              'Node.js',
              'JavaScript',
              'Redux',
              'Bootstrap',
              'Tailwind CSS',
              'Git',
              'GitHub',
              'HTML5',
              'CSS3',
              'REST API',
              'npm',
            ].map(tech => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 text-xs font-medium hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
