export function formatDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

export function shortDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function computeNights(arrival, departure) {
  if (!arrival || !departure) return 0;
  const a = new Date(arrival + 'T00:00:00');
  const d = new Date(departure + 'T00:00:00');
  if (Number.isNaN(a.getTime()) || Number.isNaN(d.getTime())) return 0;
  const diff = Math.round((d - a) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}
