// Filtro SVG compartido: desenfoque + grano para las palabras rojas (ref. Gills).
// Usar `style={{ filter: 'url(#redGrain)' }}`; montar una sola vez por página.
export default function RedGrainFilter() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <filter id="redGrain" x="-10%" y="-20%" width="120%" height="140%">
        <feGaussianBlur stdDeviation="14" result="b" />
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" result="n" />
        <feDisplacementMap in="b" in2="n" scale="22" />
      </filter>
    </svg>
  );
}
