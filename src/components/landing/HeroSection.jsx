import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&q=80')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/90 via-[#1a237e]/70 to-[#00bcd4]/40" />
      
      {/* Animated Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -10,
              opacity: 0 
            }}
            animate={{ 
              y: window.innerHeight + 10,
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Mark */}
          <motion.div 
            className="mb-8 inline-block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-7xl md:text-8xl font-bold tracking-tight">
              <span className="text-white">T</span>
              <sup className="text-[#00bcd4] text-4xl md:text-5xl relative -top-6 md:-top-8">2</sup>
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            EMPOWERING YOUR
            <span className="block bg-gradient-to-r from-[#00bcd4] to-[#ffd700] bg-clip-text text-transparent">
              WORSHIP EXPERIENCE
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Professional church production services, training, and integration solutions 
            that elevate your ministry's message.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#00bcd4] to-[#1a237e] hover:from-[#00acc1] hover:to-[#151d6b] text-white px-10 py-6 text-lg font-medium rounded-full transition-all duration-300 shadow-2xl shadow-[#00bcd4]/30 hover:shadow-[#00bcd4]/50 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              GET A QUOTE
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToServices}
      >
        <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-colors" />
      </motion.div>
    </section>
  );
}