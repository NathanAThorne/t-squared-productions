import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a237e]/95 via-[#0a0a0f]/90 to-[#00bcd4]/80" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold tracking-[0.3em] text-[#00bcd4] mb-4">
            LET'S CREATE SOMETHING AMAZING
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            READY FOR YOUR
            <span className="block text-[#ffd700]">NEXT EVENT?</span>
          </h3>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Let's discuss how T² Productions can transform your vision into an unforgettable experience.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-[#ffd700] hover:bg-[#ffca28] text-[#0a0a0f] px-12 py-7 text-lg font-bold rounded-full transition-all duration-300 shadow-2xl shadow-[#ffd700]/30 hover:shadow-[#ffd700]/50 group"
            >
              GET A QUOTE
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}