export function Backdrop({ kind }) {
  if (kind === 'velvet') {
    return (
      <div className="absolute inset-0 kenburns">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(120% 80% at 70% 40%, rgba(40,28,8,.55) 0%, rgba(15,10,4,.85) 35%, #050505 70%), radial-gradient(60% 60% at 20% 80%, rgba(60,40,12,.35) 0%, transparent 60%), #050505'
        }} />
        <div className="absolute inset-0 opacity-[.55]" style={{
          background: 'repeating-linear-gradient(110deg, rgba(255,210,120,.04) 0px, rgba(255,210,120,.04) 2px, transparent 3px, transparent 36px), repeating-linear-gradient(70deg, rgba(0,0,0,.55) 0px, rgba(0,0,0,.55) 8px, transparent 9px, transparent 60px)'
        }} />
        <div className="absolute -right-40 top-0 h-full w-[55%] opacity-70"
             style={{ background: 'radial-gradient(closest-side, rgba(212,175,55,.25), transparent 70%)' }} />
        <div className="absolute inset-0"
             style={{ background: 'radial-gradient(120% 80% at 50% 50%, transparent 40%, rgba(0,0,0,.85) 100%)' }} />
      </div>
    );
  }

  if (kind === 'marble') {
    return (
      <div className="absolute inset-0 kenburns">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(80% 60% at 60% 30%, #1a1814 0%, #0b0907 55%, #050505 100%)'
        }} />
        <div className="absolute inset-0 opacity-60 mix-blend-screen" style={{
          background: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='m'><feTurbulence type='fractalNoise' baseFrequency='0.012 0.04' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 0.18  0 0 0 0 0.15  0 0 0 0 0.10  0 0 0 1.4 -0.5'/></filter><rect width='100%' height='100%' filter='url(%23m)'/></svg>\")",
          backgroundSize: 'cover'
        }} />
        <div className="absolute left-1/3 top-0 h-full w-[2px] opacity-70" style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(212,175,55,.0) 10%, rgba(212,175,55,.55) 35%, rgba(244,228,161,.9) 50%, rgba(212,175,55,.55) 65%, transparent 95%)',
          filter: 'blur(.6px)',
          transform: 'rotate(-7deg) translateX(-20%)'
        }} />
        <div className="absolute inset-0"
             style={{ background: 'radial-gradient(120% 80% at 50% 60%, transparent 35%, rgba(0,0,0,.85) 100%)' }} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 kenburns">
      <div className="absolute inset-0" style={{ background: '#050505' }} />
      <div className="absolute -left-32 top-1/4 h-[80vh] w-[80vh] rounded-full opacity-60"
           style={{ background: 'radial-gradient(closest-side, rgba(212,175,55,.20), transparent 70%)' }} />
      <div className="absolute right-0 bottom-0 h-[60vh] w-[60vh] rounded-full opacity-50"
           style={{ background: 'radial-gradient(closest-side, rgba(212,175,55,.12), transparent 70%)' }} />
      <div className="absolute inset-0"
           style={{ background: 'radial-gradient(120% 80% at 50% 50%, transparent 30%, rgba(0,0,0,.9) 100%)' }} />
    </div>
  );
}
