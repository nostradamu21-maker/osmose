import { useRef, useEffect } from 'react';

export function GildedCursor() {
  const dot = useRef(null), ring = useRef(null);

  useEffect(() => {
    let rx = window.innerWidth / 2, ry = window.innerHeight / 2;
    let dx = rx, dy = ry;

    const onMove = (e) => {
      rx = e.clientX; ry = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    };

    const tick = () => {
      dx += (rx - dx) * 0.18;
      dy += (ry - dy) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    };

    const overLink = (e) => {
      const link = e.target.closest?.('a, button, .cta, .nav-link');
      document.body.classList.toggle('cursor-link', !!link);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', overLink);
    const id = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', overLink);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot}  className="cursor-dot" />
    </>
  );
}
