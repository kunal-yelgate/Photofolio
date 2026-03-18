import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, ExternalLink, School } from 'lucide-react';
import { Button } from '@/components/ui/button';

const educationData = [
  {
    degree: 'B.E. in Computer Science & Engineering',
    institution: 'SGGSIE&T, Nanded',
    location: 'Nanded',
    duration: '2022 – Present',
    showScore: false,
    icon: GraduationCap,
  },
  {
    degree: 'Diploma in Electronics & Telecommunication Engineering',
    institution: 'Vilasrao Deshmukh Foundation Group of Institutions of Polytechnic, Latur',
    location: 'Latur',
    duration: '2022 – 2025',
    score: '92.06%',
    showScore: true,
    icon: School,
  },
];

const certifications = [
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    year: '2024',
    verifyLink: '#',
  },
  {
    title: 'C and C++ Programming',
    issuer: 'Coursera',
    year: '2024',
    verifyLink: '#',
  },
  {
    title: 'Mastering HTML5',
    issuer: 'Udemy',
    year: '2024',
    verifyLink: '#',
  },
  {
    title: 'Embedded Systems & IoT',
    issuer: 'NPTEL',
    year: '2024',
    verifyLink: '#',
  },
  {
    title: 'Power BI Fundamentals',
    issuer: 'Microsoft',
    year: '2024',
    verifyLink: '#',
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#00D9FF]/5 blur-[150px] pointer-events-none" />

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
            className="inline-block px-4 py-1.5 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/20 text-[#00D9FF] text-sm font-medium mb-4"
          >
            Academic Journey
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-white">Education & </span>
            <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#00D9FF]" />
              Education
            </h3>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute left-6 top-0 w-0.5 timeline-line"
              />

              {/* Education Cards */}
              <div className="space-y-8">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-[#00D9FF] border-4 border-[#050510] shadow-[0_0_10px_rgba(0,217,255,0.5)]" />

                    {/* Card */}
                    <div className="glass-card-hover p-6 group">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-white group-hover:text-[#00D9FF] transition-colors">
                          {edu.degree}
                        </h4>
                        {edu.showScore && edu.score && (
                          <span className="px-3 py-1 rounded-full bg-[#00D9FF]/20 border border-[#00D9FF]/30 text-[#00D9FF] text-sm font-semibold">
                            {edu.score}
                          </span>
                        )}
                      </div>

                      <p className="text-[#8B5CF6] font-medium mb-3">{edu.institution}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-white/50">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-[#8B5CF6]" />
              Certifications
            </h3>

            {/* Certificate Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="glass-card-hover p-5 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <Award className="w-5 h-5 text-[#8B5CF6]" />
                      <span className="text-xs text-white/40">{cert.year}</span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1 line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-white/50 mb-4">{cert.issuer}</p>

                    <div className="mt-auto">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-full text-[#00D9FF] hover:text-[#00D9FF] hover:bg-[#00D9FF]/10 border border-[#00D9FF]/30 hover:border-[#00D9FF] transition-all duration-300 group"
                        asChild
                      >
                        <a 
                          href={cert.verifyLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1"
                        >
                          Verify
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
