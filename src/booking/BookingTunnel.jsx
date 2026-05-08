import { useState, useEffect } from 'react';
import { Stepper } from './Stepper';
import { Recap } from './Recap';
import { StepDates } from './StepDates';
import { StepServices } from './StepServices';
import { StepGuest } from './StepGuest';
import { StepPayment } from './StepPayment';
import { SERVICES, NIGHT_RATE, CLEANING_FEE } from './services';
import { computeNights } from './utils';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';
import { Logo } from '../components/Logo';

export function BookingTunnel({ onBack }) {
  const [step, setStep] = useState(0);
  const [stay, setStay] = useState({ arrival: '', departure: '', guests: 2 });
  const [selectedServices, setSelectedServices] = useState(new Set());
  const [guest, setGuest] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [payment, setPayment] = useState({ card: '', expiry: '', cvc: '', name: '' });
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [step]);

  const nights = Math.max(1, computeNights(stay.arrival, stay.departure));
  const room = nights * NIGHT_RATE;
  const servicesTotal = SERVICES.filter(s => selectedServices.has(s.id))
                                .reduce((sum, s) => sum + s.price, 0);
  const total = room + CLEANING_FEE + servicesTotal;

  const canContinue = (() => {
    if (step === 0) return !!stay.arrival && !!stay.departure && computeNights(stay.arrival, stay.departure) >= 1;
    if (step === 2) return guest.firstName && guest.lastName && guest.email && guest.phone;
    if (step === 3) return payment.card.replace(/\s/g, '').length >= 13 && payment.expiry.length >= 5 && payment.cvc.length >= 3 && payment.name;
    return true;
  })();

  const next = () => {
    if (step === 3) { setConfirmed(true); return; }
    setStep(s => Math.min(3, s + 1));
  };
  const prev = () => (step === 0 ? onBack() : setStep(s => s - 1));

  if (confirmed) {
    return (
      <div className="min-h-screen bg-ink text-bone flex flex-col">
        <BookingHeader onHome={onBack} />
        <div className="flex-1 flex items-center justify-center px-6 py-20 text-center">
          <div className="max-w-[560px] reveal is-revealed">
            <div className="orn text-[18px] mb-6">·  ·  ·</div>
            <h2 className="font-serif text-[clamp(34px,4.6vw,56px)] leading-[1.05] text-bone">
              Votre parenthèse <em className="italic gold-leaf">est confirmée.</em>
            </h2>
            <p className="mt-6 text-[14.5px] font-light text-bone/65 leading-[1.85]">
              Un email de confirmation vient d'être envoyé à <span className="text-bone/90">{guest.email}</span>.
              Notre conciergerie vous contactera sous 3 heures pour finaliser les détails de votre séjour.
            </p>
            <div className="hairline mt-10 opacity-50" />
            <div className="mt-8 flex justify-center">
              <button onClick={onBack}
                      className="cta inline-flex items-center justify-center px-10 py-4 text-[10.5px] uppercase font-sans font-light">
                <span>Retourner à l'accueil
                  <svg width="26" height="6" viewBox="0 0 26 6" fill="none" aria-hidden="true">
                    <path d="M0 3 H 22 M 19 1 L 25 3 L 19 5" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink text-bone relative">
      {/* faint backdrop glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[60vh] w-[60vh] rounded-full opacity-30"
             style={{ background: 'radial-gradient(closest-side, rgba(212,175,55,.18), transparent 70%)' }} />
        <div className="absolute -left-40 top-1/2 h-[50vh] w-[50vh] rounded-full opacity-20"
             style={{ background: 'radial-gradient(closest-side, rgba(212,175,55,.12), transparent 70%)' }} />
        <div className="absolute inset-0 grain" />
      </div>

      <BookingHeader onHome={onBack} />

      <main className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-20">
        {/* Title */}
        <div className="text-center max-w-[760px] mx-auto">
          <div className="text-[10px] tracking-[.5em] uppercase text-gold/80">Réservation directe</div>
          <h1 className="mt-5 font-serif font-normal leading-[1.05] text-[clamp(34px,5vw,68px)] tracking-[-.01em] text-bone">
            Réservez <em className="italic gold-leaf">Osmose</em>
          </h1>
          <p className="mt-5 text-[14px] sm:text-[15px] font-light text-bone/60 leading-[1.85]">
            Meilleur tarif garanti en direct. Confirmation immédiate, paiement sécurisé.
          </p>
        </div>

        {/* Tunnel container */}
        <div className="mt-12 sm:mt-16 border border-bone/10 bg-black/40 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px]">
            {/* Left: stepper + step content */}
            <div className="p-6 sm:p-10 lg:p-12">
              <Stepper current={step} />

              <div className="mt-12">
                {step === 0 && <StepDates stay={stay} setStay={setStay} />}
                {step === 1 && <StepServices selectedServices={selectedServices} setSelectedServices={setSelectedServices} />}
                {step === 2 && <StepGuest guest={guest} setGuest={setGuest} />}
                {step === 3 && <StepPayment payment={payment} setPayment={setPayment} total={total} />}
              </div>

              <div className="hairline mt-12 opacity-40" />

              <div className="mt-7 flex items-center justify-between gap-4">
                <button type="button" onClick={prev}
                        className="inline-flex items-center gap-2 text-[10.5px] tracking-[.4em] uppercase text-bone/55 hover:text-bone transition nav-link">
                  <ArrowLeftIcon /> Retour
                </button>

                <button type="button" onClick={next} disabled={!canContinue}
                        className={[
                          'cta inline-flex items-center justify-center px-8 sm:px-10 py-4 text-[10.5px] uppercase font-sans font-light',
                          !canContinue ? 'opacity-40 cursor-not-allowed' : '',
                        ].join(' ')}>
                  <span>
                    {step === 3 ? `Confirmer · ${total}€` : 'Continuer'}
                    <ArrowRightIcon />
                  </span>
                </button>
              </div>
            </div>

            {/* Right: recap */}
            <div className="border-t lg:border-t-0 lg:border-l border-bone/10 p-6 sm:p-10 lg:p-8 bg-black/20">
              <Recap stay={stay} selectedServices={selectedServices} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function BookingHeader({ onHome }) {
  return (
    <header className="relative z-20 px-6 sm:px-10 lg:px-16 pt-7 pb-5 border-b border-bone/10">
      <div className="flex items-center justify-between gap-6">
        <button onClick={onHome} className="flex items-center gap-3 nav-link">
          <Logo />
          <span className="hidden sm:inline text-[10px] tracking-[.4em] uppercase text-bone/45 font-light pl-1">Dijon</span>
        </button>

        <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[.32em] uppercase text-bone/65 font-light">
          <button onClick={onHome} className="nav-link hover:text-bone transition">Expérience</button>
          <button onClick={onHome} className="nav-link hover:text-bone transition">Galerie</button>
          <button onClick={onHome} className="nav-link hover:text-bone transition">Services</button>
          <span className="text-gold">Réserver</span>
        </nav>

        <button onClick={onHome}
                className="text-[10px] tracking-[.4em] uppercase text-bone/55 hover:text-bone transition nav-link">
          ← Accueil
        </button>
      </div>
    </header>
  );
}
