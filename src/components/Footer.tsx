import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-legend-dark text-white/80 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl tracking-widest uppercase text-white">
              Legend
            </h3>
            <p className="font-serif italic text-lg text-legend-gold">
              Chinees • Thais • Indisch
            </p>
            <p className="text-sm leading-relaxed">
              Uw culinaire bestemming in Wassenaar voor authentieke pan-Aziatische gerechten. Wij verwelkomen u graag in ons sfeervolle restaurant.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-legend-gold shrink-0 mt-0.5" />
                <span className="text-sm">
                  Van Hogendorpstraat 61<br />
                  2242 KX Wassenaar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-legend-gold shrink-0" />
                <a href="tel:0705179362" className="text-sm hover:text-white transition-colors">
                  070 517 9362
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white">
              Openingstijden
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Maandag</span>
                <span>Gesloten</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Dinsdag - Zondag</span>
                <span>16:00 - 21:00</span>
              </li>
            </ul>
            <p className="text-xs text-white/50 italic">
              * Tijden kunnen afwijken op feestdagen
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white">
              Onze Service
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-legend-red"></div>
                <span>Ter plaatse eten</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-legend-gold"></div>
                <span>Afhalen (Take-away)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                <span>Bezorging</span>
              </li>
            </ul>
            <a
              href="https://m.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-legend-gold hover:text-white transition-colors underline underline-offset-4"
            >
              Volg ons op Facebook
            </a>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Legend Restaurant Wassenaar. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
