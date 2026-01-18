import React from 'react';
import { motion } from 'framer-motion';

const eventTypes = [
  {
    title: "WEEKLY WORSHIP SERVICES",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80",
    gradient: "from-[#ffd700]/80 to-transparent"
  },
  {
    title: "CONFERENCES & REVIVALS",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
    gradient: "from-[#00bcd4]/80 to-transparent"
  },
  {
    title: "SPECIAL EVENTS & OUTREACH",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    gradient: "from-[#1a237e]/80 to-transparent"
  }
];

export default function EventTypesSection() {
  return (
    <section id="events" className="py-24 md:py-32 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold tracking-[0.3em] text-[#00bcd4] mb-4">
            SERVING YOUR MINISTRY
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            EVERY SERVICE, <span className="text-[#ffd700]">EVERY MOMENT</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.title}
              className="relative h-80 md:h-96 rounded-3xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${event.image}')` }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient}`} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-end p-8">
                <motion.h4 
                  className="text-xl md:text-2xl font-bold text-white tracking-wide"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {event.title}
                </motion.h4>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-3xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}