import { motion } from 'framer-motion';
import { Github, ExternalLink, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'PhramAI',
    tagline: 'Pharmacy AI Management Platform',
    description: 'A multi-page frontend platform for AI-powered pharmacy management, featuring a dark luxury design system and Twilio integration for communication features.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/yelgatekunal0',
    featured: true,
  },
  {
    title: 'Smart Calculator Pro',
    tagline: 'Advanced Web Calculator',
    description: 'Fully responsive calculator with advanced DOM manipulation, calculation history via localStorage, and a dark/light mode toggle.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    github: 'https://github.com/yelgatekunal0/calculator-web-app',
    featured: true,
  },
  {
    title: 'FocusFlow',
    tagline: 'Productivity Timer App',
    description: 'Pomodoro-based productivity timer with customizable sessions, focus soundscapes, smart notifications, and weekly progress tracking.',
    tech: ['JavaScript', 'CSS3', 'LocalStorage', 'Web Audio API'],
    github: 'https://github.com/yelgatekunal0/focus-timer',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    tagline: 'Personal Developer Portfolio',
    description: 'This portfolio — built with React, Vite, Tailwind CSS, and Framer Motion. Smooth animations, dark mode, and fully responsive layout.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yelgatekunal0/portfolio',
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8B5CF6]/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] text-sm font-medium mb-4"
          >
            Featured Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-white">My </span>
            <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 h-full flex flex-col group hover:border-[#00D9FF]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(0,217,255,0.1)] transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-full bg-[#00D9FF]/20 border border-[#00D9FF]/30 text-[#00D9FF] text-xs font-medium flex items-center gap-1">
                          <Layers className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00D9FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#8B5CF6]">{project.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-white/20 text-white/80 hover:text-white hover:bg-white/5 hover:border-[#00D9FF]/50 transition-all duration-300 group/btn"
                  asChild
                >
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    View on GitHub
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
