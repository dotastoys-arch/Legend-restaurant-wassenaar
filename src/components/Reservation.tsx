import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, User, CheckCircle2, Mail, Phone } from 'lucide-react';

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section id="reserveren" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-legend-red font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Wees Welkom
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-legend-dark font-serif leading-tight mb-6"
          >
            Reserveer een Tafel
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-1 bg-legend-gold mx-auto mb-8"
          ></motion.div>
          <p className="text-gray-600 font-serif italic text-lg max-w-2xl mx-auto">
            Verzeker uzelf van een plek in ons restaurant en laat ons u meenemen op een culinaire reis door Azië.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-legend-paper p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle2 size={64} className="text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-serif text-legend-dark mb-4">Reservering Ontvangen</h3>
              <p className="text-gray-600 mb-8">
                Beste {formData.name}, we kijken ernaar uit u te verwelkomen. Hier is een overzicht van uw aanvraag:
              </p>
              
              <div className="bg-white rounded-xl p-6 mb-8 text-left max-w-md mx-auto border border-gray-100 shadow-sm">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-3">
                    <User size={18} className="text-legend-gold" />
                    <span><strong>Naam:</strong> {formData.name}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Calendar size={18} className="text-legend-gold" />
                    <span><strong>Datum:</strong> {formData.date}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock size={18} className="text-legend-gold" />
                    <span><strong>Tijd:</strong> {formData.time}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users size={18} className="text-legend-gold" />
                    <span><strong>Aantal:</strong> {formData.guests} {parseInt(formData.guests) === 1 ? 'persoon' : 'personen'}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-legend-gold" />
                    <span><strong>E-mail:</strong> {formData.email}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-legend-gold" />
                    <span><strong>Telefoon:</strong> {formData.phone}</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-gray-500 mb-8 italic">
                We hebben een bevestiging gestuurd naar <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-legend-red hover:text-red-800 font-medium tracking-wider uppercase text-sm underline underline-offset-4"
              >
                Nieuwe reservering maken
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Naam
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-legend-gold focus:border-legend-gold bg-white text-gray-900"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 uppercase tracking-wider">
                    E-mailadres
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-legend-gold focus:border-legend-gold bg-white text-gray-900"
                      placeholder="uw@email.nl"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Telefoonnummer
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Phone size={18} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-legend-gold focus:border-legend-gold bg-white text-gray-900"
                      placeholder="06 12345678"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Aantal Personen
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Users size={18} />
                    </div>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-legend-gold focus:border-legend-gold bg-white text-gray-900 appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Persoon' : 'Personen'}</option>
                      ))}
                      <option value="9+">9+ Personen (Neem telefonisch contact op)</option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Datum
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Calendar size={18} />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-legend-gold focus:border-legend-gold bg-white text-gray-900"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Tijd
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Clock size={18} />
                    </div>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      min="16:00"
                      max="21:00"
                      value={formData.time}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-legend-gold focus:border-legend-gold bg-white text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-legend-dark hover:bg-black text-white px-8 py-4 rounded-lg font-semibold tracking-wider uppercase transition-colors"
                >
                  Reservering Aanvragen
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Voor groepen groter dan 8 personen, of reserveringen voor vandaag, vragen wij u vriendelijk om telefonisch contact op te nemen via <a href="tel:0705179362" className="text-legend-red hover:underline">070 517 9362</a>.
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
