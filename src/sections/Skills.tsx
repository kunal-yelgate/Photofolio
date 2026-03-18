import { motion } from 'framer-motion';
import { Code2, Layout, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'from-[#00D9FF] to-[#00B4D8]',
    skills: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
     
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    color: 'from-[#8B5CF6] to-[#A78BFA]',
    skills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', icon: 'https://www.svgrepo.com/show/452092/react.svg' },
      { name: 'Responsive Design', icon: '💻' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-[#10B981] to-[#34D399]',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
       { name: 'Power BI', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/power-bi-icon.png' },
      { name: 'GitHub Pages', icon: '📄' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },

    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/5 blur-[150px] pointer-events-none" />

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
            What I Work With
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-white">My </span>
            <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
            >
              <div className="glass-card-hover p-6 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} p-0.5`}>
                    <div className="w-full h-full rounded-lg bg-[#050510] flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="skill-chip flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 cursor-default"
                    >
                      {skill.icon.startsWith('http') ? (
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-5 h-5 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <span className="text-lg">{skill.icon}</span>
                      )}
                      <span className="text-sm text-white/80">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
