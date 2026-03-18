import { motion } from 'framer-motion';
import { GraduationCap, Award, Code2 } from 'lucide-react';

const stats = [
  {
    icon: GraduationCap,
    value: '8.00',
    label: 'CGPA',
    color: 'from-cyan-400 to-blue-500',
    glowColor: 'shadow-cyan-500/20',
  },
  {
    icon: Award,
    value: '92.06%',
    label: 'Diploma %',
    color: 'from-purple-400 to-pink-500',
    glowColor: 'shadow-purple-500/20',
  },
  {
    icon: Code2,
    value: '4+',
    label: 'Projects',
    color: 'from-emerald-400 to-teal-500',
    glowColor: 'shadow-emerald-500/20',
  },
];

export function Stats() {
  return (
    <section id="stats" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover-lift overflow-hidden">
                {/* Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${stat.color} opacity-5`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} p-0.5 mb-6 ${stat.glowColor} shadow-lg`}>
                  <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Value */}
                <h3 className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
