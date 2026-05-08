import { useRef, useEffect } from 'react';

export function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { el.classList.add('is-revealed'); io.unobserve(el); }
      });
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}
