import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileDown, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yelgatekunal@gmail.com',
    href: 'mailto:yelgatekunal@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yelgatekunal0',
    href: 'https://github.com/yelgatekunal0',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kunal-yelgate',
    href: 'https://linkedin.com/in/kunal-yelgate',
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#00D9FF]/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Get In Touch
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-white">Let's </span>
            <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="glass-card p-8 sm:p-10">
            <form className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/60 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#00D9FF]" />
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#00D9FF]/50 focus:ring-[#00D9FF]/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00D9FF]" />
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#00D9FF]/50 focus:ring-[#00D9FF]/20 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm text-white/60 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#00D9FF]" />
                  Message
                </label>
                <Textarea
                  placeholder="Write your message here..."
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#00D9FF]/50 focus:ring-[#00D9FF]/20 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00D9FF] to-[#00B4D8] text-[#050510] font-semibold hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-white/40 text-sm">or connect via</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/30 hover:bg-[#00D9FF]/5 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-[#00D9FF] group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-xs text-white/40">{social.label}</p>
                    <p className="text-sm text-white/80 group-hover:text-white transition-colors">{social.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-[#00D9FF]/50 text-[#00D9FF] hover:bg-[#00D9FF]/10 hover:border-[#00D9FF] transition-all duration-300 group"
                asChild
              >
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  download
                  className="flex items-center gap-2"
                >
                  <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
