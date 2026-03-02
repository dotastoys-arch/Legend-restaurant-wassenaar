import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
          alt="Sfeervol restaurant interieur"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-legend-gold font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4 block">
            Welkom bij
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-serif mb-6 leading-none tracking-tight">
            Legend
          </h1>
          <p className="text-xl md:text-3xl text-white/90 font-serif italic mb-10">
            Chinees • Thais • Indisch
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm md:text-base font-medium tracking-wide"
        >
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-legend-gold" />
            <span>Van Hogendorpstraat 61, Wassenaar</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-legend-gold"></div>
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-legend-gold" />
            <span>Vandaag geopend tot 21:00</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="bg-legend-gold text-legend-dark hover:bg-yellow-500 px-8 py-4 rounded-full font-semibold tracking-wider uppercase transition-colors"
          >
            Bekijk het Menu
          </a>
          <a
            href="#reserveren"
            className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold tracking-wider uppercase transition-colors backdrop-blur-sm"
          >
            Tafel Reserveren
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
