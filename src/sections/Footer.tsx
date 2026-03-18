import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/yelgatekunal0', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/kunal-yelgate', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:yelgatekunal@gmail.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/5">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00D9FF]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-white/40"
          >
            © {new Date().getFullYear()} Kunal Yelgate. Built with{' '}
            <Heart className="w-3 h-3 inline text-red-500 fill-red-500" /> using React + Vite.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-[#00D9FF] hover:border-[#00D9FF]/30 hover:bg-[#00D9FF]/5 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
