import React from 'react';
import { motion } from 'framer-motion';
import { Phone, FileText, Sparkles, MessageSquare, Calendar, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: "CONTACT US",
    description: "Reach out with details about your event"
  },
  {
    icon: MessageSquare,
    title: "CONSULTATION",
    description: "Let's discuss your vision together"
  },
  {
    icon: FileText,
    title: "GET A QUOTE",
    description: "Receive a detailed proposal and timeline"
  },
  {
    icon: Calendar,
    title: "PLANNING",
    description: "Walk through venue and finalize details"
  },
  {
    icon: Sparkles,
    title: "VISION TO LIFE",
    description: "We bring your event to the next level"
  },
  {
    icon: PartyPopper,
    title: "CELEBRATE",
    description: "Enjoy your unforgettable event!"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#1a237e]/20 to-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold tracking-[0.3em] text-[#00bcd4] mb-4">
            OUR PROCESS
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            HOW IT <span className="text-[#ffd700]">WORKS</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#00bcd4]/50 to-transparent" />
              )}
              
              <motion.div 
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#ffd700] text-[#0a0a0f] text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                
                {/* Icon Container */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:border-[#00bcd4] transition-colors">
                  <step.icon className="w-7 h-7 text-[#00bcd4]" />
                </div>
                
                <h4 className="text-sm font-bold text-white mb-2 tracking-wide">
                  {step.title}
                </h4>
                <p className="text-white/50 text-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}