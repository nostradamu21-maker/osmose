import { CardIcon, LockIcon, ShieldIcon } from './icons';

function formatCard(v) {
  return v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
}
function formatExpiry(v) {
  const d = v.replace(/\D/g, '').slice(0, 4);
  if (d.length < 3) return d;
  return d.slice(0, 2) + ' / ' + d.slice(2);
}

function Field({ label, value, onChange, placeholder, type = 'text', mode, inputMode, full }) {
  const handle = (e) => {
    let val = e.target.value;
    if (mode === 'card') val = formatCard(val);
    if (mode === 'expiry') val = formatExpiry(val);
    if (mode === 'cvc') val = val.replace(/\D/g, '').slice(0, 4);
    onChange(val);
  };
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="block text-[10px] tracking-[.4em] uppercase text-bone/55 mb-2">{label}</span>
      <input type={type} value={value} placeholder={placeholder} inputMode={inputMode}
             onChange={handle}
             className="w-full bg-black/40 border border-bone/15 hover:border-bone/30 focus:border-gold/60 outline-none px-4 py-3.5 text-[14px] font-light text-bone placeholder:text-bone/30 tabular-nums transition-colors" />
    </label>
  );
}

export function StepPayment({ payment, setPayment, total }) {
  const set = (k) => (v) => setPayment(p => ({ ...p, [k]: v }));
  return (
    <div>
      <div className="text-[10px] tracking-[.5em] uppercase text-gold/75 mb-3">Étape 4</div>
      <h3 className="font-serif text-[clamp(28px,3.6vw,40px)] leading-[1.1] text-bone">
        Paiement sécurisé
      </h3>
      <p className="mt-3 text-[13px] font-light text-bone/55 inline-flex items-center gap-2">
        <LockIcon className="text-gold/80" />
        Vos données sont chiffrées de bout en bout.
      </p>

      <div className="mt-9 border border-bone/10 bg-black/30 p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="text-[10px] tracking-[.4em] uppercase text-bone/55">Carte bancaire</div>
          <div className="text-bone/55"><CardIcon /></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
          <Field label="Numéro de carte" value={payment.card} onChange={set('card')}
                 placeholder="4242 4242 4242 4242" mode="card" inputMode="numeric" full />
          <Field label="Expiration" value={payment.expiry} onChange={set('expiry')}
                 placeholder="MM / AA" mode="expiry" inputMode="numeric" />
          <Field label="CVC" value={payment.cvc} onChange={set('cvc')}
                 placeholder="123" mode="cvc" inputMode="numeric" />
          <Field label="Nom sur la carte" value={payment.name} onChange={set('name')}
                 placeholder="Marie Dubois" full />
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 text-[11.5px] font-light text-bone/55 leading-[1.7]">
        <span className="text-gold/85 mt-[2px] flex-none"><ShieldIcon /></span>
        <span>
          Paiement traité par Stripe · 3D Secure · Annulation gratuite jusqu'à 7 jours avant l'arrivée.
        </span>
      </div>

      <div className="mt-8 hairline opacity-40" />
      <div className="mt-6 flex items-end justify-between">
        <span className="text-[10px] tracking-[.5em] uppercase text-bone/55">Total à régler</span>
        <span className="font-serif italic gold-leaf text-[34px] leading-none tabular-nums">{total}€</span>
      </div>
    </div>
  );
}
