import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, Video, Lightbulb, Cog, GraduationCap, Settings2 } from 'lucide-react';
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Volume2,
    title: "AUDIO",
    description: "Professional sound systems designed for worship clarity. From sanctuary acoustics to multi-campus audio distribution and live streaming.",
    gradient: "from-[#00bcd4] to-[#1a237e]"
  },
  {
    icon: Video,
    title: "VIDEO & PRESENTATION",
    description: "Broadcast-quality video production, IMAG systems, and seamless presentation software integration for engaging worship experiences.",
    gradient: "from-[#1a237e] to-[#ffd700]"
  },
  {
    icon: Lightbulb,
    title: "LIGHTING & NETWORKING",
    description: "Dynamic worship lighting, stage design, and complete network infrastructure to connect all your production systems seamlessly.",
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
            Your message matters. We provide the technology, training, and support to ensure 
            your congregation experiences worship without distraction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 group hover:bg-white/10 transition-all duration-500 hover:border-[#ffd700]/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00bcd4] to-[#ffd700] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cog className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">AUTOMATION & INTEGRATION</h4>
                  <p className="text-white/60 text-sm">Complete software and hardware automation solutions that streamline your production workflow and create consistent, repeatable results.</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 group hover:bg-white/10 transition-all duration-500 hover:border-[#ffd700]/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffd700] to-[#00bcd4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">TEAM TRAINING</h4>
                  <p className="text-white/60 text-sm">Comprehensive training programs that equip your volunteers and staff with the skills and confidence to run professional-quality services.</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}