import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-legend-paper relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-legend-red font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Vind Ons
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-legend-dark font-serif leading-tight mb-6"
          >
            Bedrijfsgegevens
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-1 bg-legend-gold mx-auto mb-8"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-serif text-legend-dark mb-8">Legend Chinees Thais Indisch Restaurant</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-legend-paper flex items-center justify-center shrink-0">
                  <MapPin className="text-legend-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 uppercase tracking-wider text-sm">Adres</h4>
                  <p className="text-gray-600">
                    Van Hogendorpstraat 61<br />
                    2242 KX Wassenaar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-legend-paper flex items-center justify-center shrink-0">
                  <Phone className="text-legend-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 uppercase tracking-wider text-sm">Telefoon</h4>
                  <a href="tel:0705179362" className="text-legend-red hover:text-red-800 transition-colors text-lg">
                    070 517 9362
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-legend-paper flex items-center justify-center shrink-0">
                  <Clock className="text-legend-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 uppercase tracking-wider text-sm">Openingstijden</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex justify-between w-48">
                      <span>Maandag</span>
                      <span className="font-medium text-legend-red">Gesloten</span>
                    </li>
                    <li className="flex justify-between w-48">
                      <span>Dinsdag - Zondag</span>
                      <span>16:00 - 21:00</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-legend-paper flex items-center justify-center shrink-0">
                  <Facebook className="text-legend-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 uppercase tracking-wider text-sm">Social Media</h4>
                  <a href="https://m.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-legend-gold transition-colors">
                    Volg ons op Facebook
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 group"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop")' }}
            ></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center text-white p-8 text-center">
              <MapPin size={48} className="text-legend-gold mb-4 drop-shadow-md" />
              <p className="font-medium mb-2 text-lg drop-shadow-md">Interactieve Kaart</p>
              <p className="text-sm text-white/90 drop-shadow-md">Van Hogendorpstraat 61, Wassenaar</p>
              <a 
                href="https://maps.google.com/?q=Van+Hogendorpstraat+61,+2242+KX+Wassenaar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-legend-gold text-legend-dark px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-white transition-colors shadow-lg"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
