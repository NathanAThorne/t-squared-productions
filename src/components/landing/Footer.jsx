import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import QuoteForm from './QuoteForm';

export default function Footer() {
  const [formOpen, setFormOpen] = useState(false);
  
  return (
    <footer className="bg-[#050508] py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="text-4xl font-bold">
                <span className="text-white">T</span>
                <sup className="text-[#00bcd4] text-xl relative -top-3">2</sup>
              </span>
              <span className="text-white/80 ml-2 text-lg tracking-wider">PRODUCTIONS</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Specialized church production services, integration solutions, and team training. 
              Empowering ministries to deliver exceptional worship experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3">
              {['Services', 'Events', 'About Us'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-white/50 hover:text-[#00bcd4] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6 tracking-wide">CONTACT US</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => setFormOpen(true)}
                  className="flex items-center gap-3 text-white/50 hover:text-[#00bcd4] transition-colors text-sm"
                >
                  <Calendar className="w-4 h-4 text-[#00bcd4]" />
                  Schedule Consultation
                </button>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-[#00bcd4]" />
                Upper Marlboro, MD
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} T² Productions. All Rights Reserved.
          </p>
        </div>
        </div>

        <QuoteForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
        </footer>
        );
        }