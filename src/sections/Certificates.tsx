import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'December 2024',
    description: 'Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
    link: '#',
    color: 'from-violet-400 to-purple-500',
  },
  {
    title: 'Python for Data Science',
    issuer: 'Coursera',
    date: 'October 2024',
    description: 'Learned Python programming, data analysis with Pandas, and data visualization.',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    link: '#',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'August 2024',
    description: 'Fundamentals of cloud computing and AWS services.',
    skills: ['Cloud Computing', 'AWS', 'EC2', 'S3'],
    link: '#',
    color: 'from-orange-400 to-amber-500',
  },
  {
    title: 'Machine Learning Fundamentals',
    issuer: 'DataCamp',
    date: 'June 2024',
    description: 'Introduction to machine learning algorithms and model building.',
    skills: ['Python', 'Scikit-learn', 'ML Algorithms'],
    link: '#',
    color: 'from-emerald-400 to-teal-500',
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Professional Development
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group h-full p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 hover-lift">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-cyan-400 mb-3">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-muted-foreground"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0 h-auto"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    View Certificate
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
