import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, Video, Lightbulb } from 'lucide-react';
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Volume2,
    title: "AUDIO",
    description: "Crystal-clear sound systems for concerts, special events, and live recordings. State-of-the-art equipment operated by industry professionals.",
    gradient: "from-[#00bcd4] to-[#1a237e]"
  },
  {
    icon: Video,
    title: "VIDEO",
    description: "Professional videography and live streaming services. Multi-camera setups, LED walls, and projection mapping to capture every moment.",
    gradient: "from-[#1a237e] to-[#ffd700]"
  },
  {
    icon: Lightbulb,
    title: "LIGHTING",
    description: "Transformative lighting design and special effects. From elegant ambient lighting to dynamic concert shows and rigging solutions.",
    gradient: "from-[#ffd700] to-[#00bcd4]"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold tracking-[0.3em] text-[#00bcd4] mb-4">
            WHAT WE DO
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            QUALITY YOU CAN <span className="text-[#ffd700]">TRUST</span>
          </h3>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-lg">
            You have a story to tell and we're here to help. Our highly trained teams 
            are passionate about delivering remarkable experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 h-full group hover:bg-white/10 transition-all duration-500 hover:border-[#00bcd4]/50 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 tracking-wide">
                  {service.title}
                </h4>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}