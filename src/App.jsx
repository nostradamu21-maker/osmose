import { useState, useCallback } from 'react';
import { COPY } from './copy';
import { GildedCursor } from './components/GildedCursor';
import { Hero } from './components/Hero';
import { Manifeste } from './components/Manifeste';
import { LaSuite } from './components/LaSuite';
import { Experience } from './components/Experience';
import { Galerie } from './components/Galerie';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';

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

  const setTweak = useCallback((key, value) => {
    setTweaks(prev => ({ ...prev, [key]: value }));
  }, []);

  const c = COPY[tweaks.language] || COPY.FR;

  return (
    <div className="gold-cursor">
      <Hero c={c} tweaks={tweaks} setTweak={setTweak} />
      <Manifeste copy={c} />
      <LaSuite copy={c} />
      <Experience copy={c} />
      <Galerie copy={c} />
      <Reservation copy={c} />
      <Footer copy={c} />
      <GildedCursor />
    </div>
  );
}
