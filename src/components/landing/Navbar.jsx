import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import QuoteForm from './QuoteForm';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Events', href: '#services' },
  { name: 'About', href: '#about' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-1">
              <span className="text-3xl font-bold">
                <span className="text-white">T</span>
                <sup className="text-[#00bcd4] text-lg relative -top-2">2</sup>
              </span>
              <span className="text-white/80 text-sm tracking-[0.2em] hidden sm:block">PRODUCTIONS</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => setFormOpen(true)}
                className="flex items-center gap-2 text-[#00bcd4] font-medium text-sm hover:text-[#00acc1] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Schedule Consultation
              </button>
              </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a0a0f]/98 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-medium text-white hover:text-[#00bcd4] transition-colors tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  </a>
                  ))}
                  <button 
                  onClick={() => {
                  setMobileMenuOpen(false);
                  setFormOpen(true);
                  }}
                  className="flex items-center gap-2 text-[#ffd700] font-medium text-lg mt-4"
                  >
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                  </button>
                  </div>
                  </motion.div>
                  )}
                  </AnimatePresence>

                  <QuoteForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
                  </>
                  );
                  }