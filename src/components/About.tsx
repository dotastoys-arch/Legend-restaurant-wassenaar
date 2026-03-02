import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="over" className="py-24 bg-legend-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-legend-red font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                Onze Passie
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-legend-dark font-serif leading-tight mb-6">
                De Harmonie van Drie Keukens
              </h2>
              <div className="w-24 h-1 bg-legend-gold mb-8"></div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed font-serif italic">
              Welkom bij Legend, waar traditie en modern genieten samenkomen in het hart van Wassenaar. Wij nodigen u uit voor een culinaire ontdekkingsreis door de rijke smaken van Azië.
            </p>
            
            <p className="text-base text-gray-600 leading-relaxed">
              Wij zijn bijzonder trots op onze pan-Aziatische expertise. Of u nu verlangt naar de verfijnde nuances van de Kantonese en Szechuan keuken, de perfecte balans van zoet, zuur en pittig in onze authentieke Thaise curries, of de rijke, geurige boemboes van een uitgebreide Indische rijsttafel — bij Legend bereiden we elk gerecht met toewijding en verse ingrediënten. Laat ons u begeleiden naar de perfecte combinatie voor uw diner.
            </p>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-4">
                Onze Specialiteiten
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-legend-red"></div>
                  <span className="font-medium text-gray-800">Klassiek Chinees</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-legend-gold"></div>
                  <span className="font-medium text-gray-800">Authentiek Thais</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-legend-dark"></div>
                  <span className="font-medium text-gray-800">Indische Rijsttafels</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4 mt-12">
              <img
                src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=1000&auto=format&fit=crop"
                alt="Aziatische gerechten"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=1000&auto=format&fit=crop"
                alt="Thaise curry"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=1000&auto=format&fit=crop"
                alt="Wokgerecht"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1000&auto=format&fit=crop"
                alt="Noodles"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-legend-gold rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
