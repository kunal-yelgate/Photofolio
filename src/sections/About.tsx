import { motion } from 'framer-motion';
import { Code2, Briefcase, BookOpen } from 'lucide-react';

const stats = [
  {
    icon: Code2,
    value: '4+',
    label: 'Projects Built',
    color: 'from-[#00D9FF] to-[#00B4D8]',
  },
  {
    icon: Briefcase,
    value: 'Open',
    label: 'to Internships',
    color: 'from-[#8B5CF6] to-[#A78BFA]',
  },
  {
    icon: BookOpen,
    value: 'Always',
    label: 'Learning',
    color: 'from-[#10B981] to-[#34D399]',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00D9FF]/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/20 text-[#00D9FF] text-sm font-medium mb-4"
          >
            Get to Know Me
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-white">About </span>
            <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="glass-card-hover p-8 sm:p-10">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed text-center">
              I'm <span className="text-[#00D9FF] font-semibold">Kunal Yelgate</span>, a passionate web developer who loves 
              turning ideas into clean, functional digital experiences. 
              I enjoy building projects from scratch — from designing 
              the UI to writing the logic that makes it all work. 
              My focus is on crafting intuitive interfaces that feel 
              smooth and look great. When I'm not coding, I'm exploring 
              new tech, tinkering with side projects, and constantly 
              pushing myself to grow as a developer.
            </p>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="glass-card-hover p-6 text-center h-full">
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} p-0.5`}>
                  <div className="w-full h-full rounded-xl bg-[#050510] flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Value */}
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-white/60 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
