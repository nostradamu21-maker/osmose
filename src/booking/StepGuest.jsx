function Field({ label, value, onChange, type = 'text', placeholder, full }) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="block text-[10px] tracking-[.4em] uppercase text-bone/55 mb-2">{label}</span>
      <input type={type} value={value} placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)}
             className="w-full bg-black/40 border border-bone/15 hover:border-bone/30 focus:border-gold/60 outline-none px-4 py-3.5 text-[14px] font-light text-bone placeholder:text-bone/30 transition-colors" />
    </label>
  );
}

export function StepGuest({ guest, setGuest }) {
  const set = (k) => (v) => setGuest(g => ({ ...g, [k]: v }));
  return (
    <div>
      <div className="text-[10px] tracking-[.5em] uppercase text-gold/75 mb-3">Étape 3</div>
      <h3 className="font-serif text-[clamp(28px,3.6vw,40px)] leading-[1.1] text-bone">
        Vos coordonnées
      </h3>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
        <Field label="Prénom"     value={guest.firstName} onChange={set('firstName')} placeholder="Marie" />
        <Field label="Nom"        value={guest.lastName}  onChange={set('lastName')}  placeholder="Dubois" />
        <Field label="Email"      value={guest.email}     onChange={set('email')} type="email" placeholder="marie.dubois@exemple.fr" />
        <Field label="Téléphone"  value={guest.phone}     onChange={set('phone')} type="tel"   placeholder="+33 6 12 34 56 78" />

        <label className="block sm:col-span-2">
          <span className="block text-[10px] tracking-[.4em] uppercase text-bone/55 mb-2">Demande spéciale (optionnel)</span>
          <textarea rows="4" value={guest.message}
                    onChange={(e) => setGuest(g => ({ ...g, message: e.target.value }))}
                    placeholder="Anniversaire, allergies alimentaires, heure d'arrivée…"
                    className="w-full bg-black/40 border border-bone/15 hover:border-bone/30 focus:border-gold/60 outline-none px-4 py-3.5 text-[14px] font-light text-bone placeholder:text-bone/30 transition-colors resize-none" />
        </label>
      </div>
    </div>
  );
}
