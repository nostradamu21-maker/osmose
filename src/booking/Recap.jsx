import { shortDate, computeNights } from './utils';
import { SERVICES, NIGHT_RATE, CLEANING_FEE } from './services';
import { ShieldIcon } from './icons';

export function Recap({ stay, selectedServices }) {
  const nights = computeNights(stay.arrival, stay.departure);
  const billedNights = Math.max(1, nights);
  const room = billedNights * NIGHT_RATE;
  const services = SERVICES.filter(s => selectedServices.has(s.id));
  const servicesTotal = services.reduce((sum, s) => sum + s.price, 0);
  const total = room + CLEANING_FEE + servicesTotal;

  return (
    <aside className="border border-gold/25 bg-black/40 backdrop-blur-sm p-7 lg:p-8 sticky top-8">
      <div className="text-[10px] tracking-[.5em] uppercase text-gold/80 mb-5">
        Récapitulatif
      </div>

      <div className="font-serif text-[22px] leading-tight text-bone">
        Osmose · Suite signature
      </div>
      <div className="mt-2 text-[10px] tracking-[.4em] uppercase text-bone/50">
        Dijon · 5 étoiles
      </div>

      <div className="hairline my-6 opacity-50" />

      <ul className="space-y-3 text-[12.5px] font-light text-bone/70">
        <li className="flex justify-between"><span>Arrivée</span><span className="text-bone/90">{shortDate(stay.arrival)}</span></li>
        <li className="flex justify-between"><span>Départ</span><span className="text-bone/90">{shortDate(stay.departure)}</span></li>
        <li className="flex justify-between"><span>Voyageurs</span><span className="text-bone/90">{stay.guests}</span></li>
      </ul>

      <div className="hairline my-6 opacity-50" />

      <ul className="space-y-2.5 text-[12.5px] font-light">
        <li className="flex justify-between text-bone/70">
          <span>{NIGHT_RATE}€ × {billedNights} {billedNights > 1 ? 'nuits' : 'nuit'}</span>
          <span className="text-bone/90 tabular-nums">{room}€</span>
        </li>
        <li className="flex justify-between text-bone/70">
          <span>Frais de ménage</span>
          <span className="text-bone/90 tabular-nums">{CLEANING_FEE}€</span>
        </li>
        {services.map(s => (
          <li key={s.id} className="flex justify-between text-bone/70">
            <span>{s.title}</span>
            <span className="text-bone/90 tabular-nums">{s.price}€</span>
          </li>
        ))}
      </ul>

      <div className="hairline my-6 opacity-50" />

      <div className="flex items-end justify-between">
        <span className="text-[10px] tracking-[.5em] uppercase text-bone/55">Total TTC</span>
        <span className="font-serif italic gold-leaf text-[34px] leading-none tabular-nums">{total}€</span>
      </div>

      <div className="mt-6 flex items-center gap-2 text-[9.5px] tracking-[.4em] uppercase text-gold/85">
        <ShieldIcon />
        <span>Meilleur tarif garanti</span>
      </div>
    </aside>
  );
}
