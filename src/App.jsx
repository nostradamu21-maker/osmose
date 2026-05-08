import { useState, useCallback, useEffect } from 'react';
import { COPY } from './copy';
import { GildedCursor } from './components/GildedCursor';
import { Hero } from './components/Hero';
import { Manifeste } from './components/Manifeste';
import { LaSuite } from './components/LaSuite';
import { Experience } from './components/Experience';
import { Galerie } from './components/Galerie';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';
import { BookingTunnel } from './booking/BookingTunnel';

const DEFAULTS = {
  background: 'velvet',
  headlineStyle: 'italic-accent',
  showVertical: true,
  showSuiteRef: true,
  showScrollCue: true,
  language: 'FR',
  showVeil: true,
  motion: 'cinematic',
};

export default function App() {
  const [tweaks, setTweaks] = useState(DEFAULTS);
  const [view, setView] = useState(() => window.location.hash === '#book' ? 'booking' : 'home');

  useEffect(() => {
    const onHash = () => setView(window.location.hash === '#book' ? 'booking' : 'home');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const setTweak = useCallback((key, value) => {
    setTweaks(prev => ({ ...prev, [key]: value }));
  }, []);

  const openBooking = useCallback(() => {
    window.location.hash = 'book';
    setView('booking');
  }, []);

  const closeBooking = useCallback(() => {
    history.replaceState(null, '', window.location.pathname);
    setView('home');
  }, []);

  const c = COPY[tweaks.language] || COPY.FR;

  if (view === 'booking') {
    return (
      <div className="gold-cursor">
        <BookingTunnel onBack={closeBooking} />
        <GildedCursor />
      </div>
    );
  }

  return (
    <div className="gold-cursor">
      <Hero c={c} tweaks={tweaks} setTweak={setTweak} onBook={openBooking} />
      <Manifeste copy={c} />
      <LaSuite copy={c} />
      <Experience copy={c} />
      <Galerie copy={c} />
      <Reservation copy={c} onBook={openBooking} />
      <Footer copy={c} onBook={openBooking} />
      <GildedCursor />
    </div>
  );
}
