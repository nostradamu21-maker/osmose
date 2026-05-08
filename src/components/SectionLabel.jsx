export function SectionLabel({ num, label }) {
  return (
    <div className="flex items-center gap-4 text-[10px] tracking-[.5em] uppercase text-gold/75">
      <span className="font-serif italic text-gold/85">{num}</span>
      <span className="h-px w-10 bg-gold/40" />
      <span className="font-light text-bone/55">{label}</span>
    </div>
  );
}
