import React from 'react';
import { motion } from 'motion/react';

const menuItems = [
  {
    category: 'Chinees',
    title: 'Klassieke Babi Pangang',
    description: 'Krokant geroosterd varkensvlees, met de hand gewokt en geserveerd in onze huisgemaakte, lichtzoete en hartige saus. Een ware klassieker.',
    price: '€ 18,50',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    category: 'Thais',
    title: 'Groene Curry met Kip',
    description: 'Een perfecte balans van zoet, zuur en pittig. Malse kipfilet in een geurige groene curry met kokosmelk, verse basilicum en knapperige groenten.',
    price: '€ 19,50',
    image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=1000&auto=format&fit=crop',
  },
  {
    category: 'Indisch',
    title: 'Rijsttafel Legend',
    description: 'Een uitgebreide proeverij van de Indische archipel. Rijke boemboes, zacht gegaard rundvlees (Rendang), kipsaté en diverse authentieke bijgerechten.',
    price: '€ 28,50 p.p.',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 bg-legend-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-legend-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Proef de Passie
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6"
          >
            Onze Menu Highlights
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-1 bg-legend-red mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 mb-6 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-legend-red text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <h3 className="text-2xl font-serif text-legend-gold">{item.title}</h3>
                  <span className="text-lg font-medium text-white/90">{item.price}</span>
                </div>
                <p className="text-white/60 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 italic font-serif mb-6">
            "Voor de volledige beleving nodigen wij u graag uit in ons restaurant. Liever thuis genieten? Wij verzorgen ook afhaal en bezorging."
          </p>
          <a
            href="tel:0705179362"
            className="inline-block border border-legend-gold text-legend-gold hover:bg-legend-gold hover:text-legend-dark px-8 py-3 rounded-full font-semibold tracking-wider uppercase transition-colors"
          >
            Bestel Telefonisch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
