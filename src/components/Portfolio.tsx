import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-legend-red font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Uitgelicht Project
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-legend-dark font-serif leading-tight mb-6"
          >
            Portfolio
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-1 bg-legend-gold mx-auto mb-8"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <a 
            href="https://legend.webdiscovery.nl/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white"
          >
            <div className="relative aspect-video overflow-hidden bg-gray-100">
              {/* Placeholder image that resembles the uploaded screenshot */}
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
                alt="Legend Restaurant Website Preview"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white text-legend-dark px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <span>Bekijk Website</span>
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-serif text-legend-dark mb-2 group-hover:text-legend-red transition-colors">
                    Legend Restaurant
                  </h3>
                  <p className="text-gray-600">
                    Chinees • Thais • Indisch restaurant in Wassenaar.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-legend-gold bg-legend-gold/10 px-3 py-1 rounded-full">
                  Webdesign
                </span>
              </div>
              <p className="text-sm text-gray-500 italic">
                Klik om de live website te bekijken op legend.webdiscovery.nl
              </p>
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
