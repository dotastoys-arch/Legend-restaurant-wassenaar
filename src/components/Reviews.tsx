import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: 'dacu',
    date: '11 maanden geleden',
    text: 'My favourite Chinese place in the area! I’m always amazed by the friendliness of the staff! Great people and a very tasty food. The atmosphere is very nice, reminds me of an old Chinese restaurant.',
    rating: 5,
  },
  {
    author: 'R van A',
    date: 'een jaar geleden',
    text: 'Na een dagje Duinrell, gegeten bij Legend. Authentieke Chinese restaurant met nog zelfs het rode tapijt! Zulke kom je niet vaak meer tegen. Heerlijk eten, zelfs mijn neefje die enorm kieskeurig is gaf het eten een 9 :)',
    rating: 5,
  },
  {
    author: 'Hugo M. Nijhof',
    date: '2 jaar geleden',
    text: 'Standard Dutch Chinese Asian restaurant with a similar menu. Staff is friendly...',
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-legend-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-legend-red font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Wat Gasten Zeggen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl text-legend-dark font-serif leading-tight mb-6"
          >
            Ervaringen van Onze Gasten
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-1 bg-legend-gold mx-auto mb-8"
          ></motion.div>
          
          <div className="flex items-center justify-center gap-2 text-legend-dark">
            <span className="text-4xl font-serif font-bold">4,4</span>
            <div className="flex text-legend-gold">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
              <Star size={24} fill="currentColor" className="opacity-50" />
            </div>
            <span className="text-gray-500 ml-2">(264 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full"
            >
              <div className="flex text-legend-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic font-serif text-lg leading-relaxed flex-grow mb-6">
                "{review.text}"
              </p>
              <div className="mt-auto border-t border-gray-100 pt-4">
                <p className="font-semibold text-legend-dark">{review.author}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
