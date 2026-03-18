import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const typingTexts = [
  'Web Developer',
  'CS Student at SGGSIE&T',
  'Frontend Enthusiast',
  'Open to Internships',
];

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orb 1 - Cyan */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Orb 2 - Purple */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        
        {/* Orb 3 - Cyan/Purple mix */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.08) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)',
          }}
          animate={{
            x: [0, 40, -50, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
        />
      </div>

      {/* Dot Grid Overlay */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">Kunal Yelgate</span>
          </h1>
        </motion.div>

        {/* Typing Animation Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <div className="h-10 flex items-center justify-center">
            <span className="text-xl sm:text-2xl text-[#00D9FF] font-medium">
              {displayText}
            </span>
            <span className="w-0.5 h-6 bg-[#00D9FF] ml-1 animate-typing" />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build clean, functional web experiences and turn ideas into real products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className="bg-[#00D9FF] text-[#050510] font-semibold hover:bg-[#00D9FF]/90 hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300"
            onClick={() => handleScroll('#projects')}
          >
            View My Work
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-[#00D9FF]/50 text-[#00D9FF] hover:bg-[#00D9FF]/10 hover:border-[#00D9FF] transition-all duration-300"
            asChild
          >
            <a href="/resume.pdf" target="_blank" download className="flex items-center gap-2">
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
          
          <Button
            size="lg"
            className="bg-[#8B5CF6] text-white font-semibold hover:bg-[#8B5CF6]/90 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
            onClick={() => handleScroll('#contact')}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center gap-4"
        >
          {[
            { icon: Github, href: 'https://github.com/yelgatekunal0', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/kunal-yelgate', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:yelgatekunal@gmail.com', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-[#00D9FF] hover:border-[#00D9FF]/30 hover:bg-[#00D9FF]/5 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => handleScroll('#about')}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-[#00D9FF] transition-colors"
          whileHover={{ y: 3 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
