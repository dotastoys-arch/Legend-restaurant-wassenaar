import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const menuData = {
  Voorgerechten: [
    { name: 'Loempia Legend', description: 'Huisgemaakte grote loempia met kip en groenten', price: '€ 6,50' },
    { name: 'Pangsit Goreng', description: 'Krokant gebakken deegkussentjes met vleesvulling (6 stuks)', price: '€ 5,50' },
    { name: 'Tom Yam Kung', description: 'Pikante Thaise soep met garnalen en verse kruiden', price: '€ 7,50' },
    { name: 'Kippensoep', description: 'Klassieke heldere kippensoep', price: '€ 4,50' },
  ],
  Chinees: [
    { name: 'Babi Pangang Speciaal', description: 'Krokant geroosterd varkensvlees in pikante tomatensaus', price: '€ 18,50' },
    { name: 'Foe Yong Hai', description: 'Omelet met kipfilet in zoetzure saus', price: '€ 16,50' },
    { name: 'Tjap Tjoy', description: 'Gemengde verse groenten met kipfilet', price: '€ 16,50' },
    { name: 'Peking Eend', description: 'Geroosterde eend met een zachte pruimensaus', price: '€ 21,50' },
  ],
  Thais: [
    { name: 'Kaeng Khiao Wan Gai (Groene Curry)', description: 'Kipfilet in groene curry met kokosmelk en groenten', price: '€ 19,50' },
    { name: 'Kaeng Phed Nua (Rode Curry)', description: 'Ossenhaas in rode curry met bamboescheuten', price: '€ 21,50' },
    { name: 'Phad Thai', description: 'Gebakken rijstnoedels met garnalen, ei, pinda\'s en taugé', price: '€ 18,50' },
  ],
  Indisch: [
    { name: 'Nasi Rames Speciaal', description: 'Uitgebreide rijstmaaltijd met diverse vlees- en groentegerechten', price: '€ 19,50' },
    { name: 'Daging Roedjak', description: 'Gestoofd rundvlees in een licht pikante saus', price: '€ 18,50' },
    { name: 'Ajam Ketjap', description: 'Kipfilet in een zoete ketjapsaus', price: '€ 17,50' },
    { name: 'Rijsttafel Legend (vanaf 2 pers.)', description: 'Een selectie van onze beste Indische gerechten', price: '€ 28,50 p.p.' },
  ],
  Bijgerechten: [
    { name: 'Witte Rijst', description: '', price: '€ 3,50' },
    { name: 'Nasi of Bami Goreng', description: '', price: '€ 5,50' },
    { name: 'Mihoen Goreng', description: '', price: '€ 7,50' },
    { name: 'Kroepoek', description: '', price: '€ 3,50' },
  ]
};

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>('Chinees');

  return (
    <section id="volledig-menu" className="py-24 bg-legend-paper relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-legend-red font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Ontdek Onze Smaken
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-legend-dark font-serif leading-tight mb-6"
          >
            Uitgebreid Menu
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-1 bg-legend-gold mx-auto mb-8"
          ></motion.div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(menuData) as Array<keyof typeof menuData>).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium tracking-wider uppercase text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-legend-dark text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {menuData[activeCategory].map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0 md:last:border-b">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif text-legend-dark font-medium pr-4">{item.name}</h3>
                    <span className="text-legend-red font-medium whitespace-nowrap">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="text-gray-500 text-sm italic">{item.description}</p>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm italic">
            Heeft u een allergie? Meld het ons. Onze gerechten kunnen sporen van allergenen bevatten.
          </p>
        </div>

      </div>
    </section>
  );
}
