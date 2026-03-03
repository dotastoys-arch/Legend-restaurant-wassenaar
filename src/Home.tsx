import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import FullMenu from './components/FullMenu';
import Reservation from './components/Reservation';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-legend-paper font-sans text-legend-dark selection:bg-legend-gold/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <FullMenu />
        <Reservation />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
