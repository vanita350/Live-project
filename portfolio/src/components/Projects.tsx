import { ExternalLink, Github, Star, Zap } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  longDesc: string;
  image: string;
  tags: string[];
  features: string[];
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
  gradient: string;
  tagStyle: string;
};

const projects: Project[] = [
  {
    title: 'Luxury Fashion Store',
    description: 'Modern Luxury Fashion E-Commerce Store',
    longDesc:
      'A modern and responsive luxury fashion e-commerce storefront featuring product browsing, category-based shopping, search and filtering, shopping cart management, quick product views, customer reviews, flash sales, and an elegant interactive UI.',
    image: '/luxury Fashion Store.png',
    tags: ['React.js', 'JavaScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Product search & filtering',
      'Shopping cart management',
      'Category-based product browsing',
      'Quick product view modal',
      'Responsive mobile-friendly design',
      'Interactive animations & UI',
    ],
    liveUrl: 'https://luxury-fashion-store-eight.vercel.app/',
    repoUrl: 'https://github.com/vanita350/Live-project',
    featured: true,
    gradient: 'from-violet-600/20 via-indigo-600/10 to-transparent',
    tagStyle: 'tag-violet',
  },
  // {
  //   title: 'ShopForge',
  //   description: 'Modern E-Commerce Platform',
  //   longDesc:
  //     'A scalable e-commerce solution with a polished storefront, cart management, Stripe checkout integration, order tracking, and an admin dashboard.',
  //   image:
  //     'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   tags: ['Next.js', 'Tailwind', 'FastAPI', 'MongoDB', 'Stripe', 'Redux'],
  //   features: [
  //     'Stripe payment & webhooks',
  //     'Infinite scroll + Pagination',
  //     'Admin CRUD dashboard',
  //     'LocalStorage cart persistence',
  //   ],
  //   liveUrl: '#',
  //   repoUrl: '#',
  //   gradient: 'from-violet-600/20 via-indigo-600/10 to-transparent',
  //   tagStyle: 'tag-violet',
  // },
  // {
  //   title: 'DataPulse Analytics',
  //   description: 'Real-Time Analytics Dashboard',
  //   longDesc:
  //     'An interactive analytics platform that visualizes complex datasets with beautiful charts, customizable widgets, CSV export, and live WebSocket feeds.',
  //   image:
  //     'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   tags: ['React', 'Recharts', 'Node.js', 'Redis', 'Supabase', 'Zustand'],
  //   features: [
  //     'Live WebSocket data feed',
  //     'Custom chart builder',
  //     'CSV/PDF export pipeline',
  //     'Filterable date ranges',
  //   ],
  //   liveUrl: '#',
  //   repoUrl: '#',
  //   gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
  //   tagStyle: 'tag-emerald',
  // },
  // {
  //   title: 'AuthVault',
  //   description: 'Enterprise Auth & API Gateway',
  //   longDesc:
  //     'A production-ready authentication microservice with multi-tenant support, role-based access control, refresh token rotation, and a rate-limited API gateway.',
  //   image:
  //     'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   tags: ['Node.js', 'Express', 'JWT', 'PostgreSQL', 'Docker', 'Redis'],
  //   features: [
  //     'Refresh token rotation',
  //     'RBAC with permission scopes',
  //     'Rate limiting via Redis',
  //     'Multi-tenant architecture',
  //   ],
  //   liveUrl: '#',
  //   repoUrl: '#',
  //   gradient: 'from-sky-600/20 via-blue-600/10 to-transparent',
  //   tagStyle: 'tag-sky',
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-indigo-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Real-world applications showcasing end-to-end engineering — from architecture decisions to deployed, production-quality features.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group card overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 ${project.featured ? 'lg:col-span-2' : ''
                }`}
            >
              <div className={`${project.featured ? 'flex flex-col md:flex-row' : 'flex flex-col'}`}>
                {/* Image */}
                <div
                  className={`relative overflow-hidden flex-shrink-0 ${project.featured ? 'md:w-2/5 h-52 md:h-auto' : 'h-44'
                    }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`} />
                  {project.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-semibold">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-1.5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                      {project.description}
                    </p>
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{project.longDesc}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map(tag => (
                      <span key={tag} className={project.tagStyle}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-1.5 mb-6">
                    {project.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-xs text-zinc-400">
                        <Zap className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs px-4 py-2.5 flex-1 justify-center"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs px-4 py-2.5 flex-1 justify-center"
                    >
                      <Github className="w-3.5 h-3.5" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
