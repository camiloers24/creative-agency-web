// Trazos hechos a mano en rojo FRAME (ref. Gills / Mzia)
type MarkProps = { className?: string };

export function CircleHighlight({ className = '' }: MarkProps) {
  return (
    <svg viewBox="0 0 200 70" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 38C20 16 70 6 112 8C160 10 193 22 190 40C187 58 140 64 96 62C52 60 8 54 12 34C14 22 40 12 74 10"
        stroke="#D80E0E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Scribble({ className = '' }: MarkProps) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 28L104 40L22 52L100 64L30 74L92 86M20 20L98 78M30 88L88 22"
        stroke="#0d0d0d"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function XMark({ className = '' }: MarkProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 8C24 24 38 40 52 54M52 8C38 22 24 38 8 52"
        stroke="#D80E0E"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Heart({ className = '' }: MarkProps) {
  return (
    <svg viewBox="0 0 80 72" fill="none" className={className} aria-hidden="true">
      <path
        d="M40 66C16 48 6 34 8 22C10 8 30 4 40 20C50 4 72 8 72 24C72 38 60 50 40 66Z"
        stroke="#D80E0E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Paperclip({ className = '' }: MarkProps) {
  return (
    <svg viewBox="0 0 40 90" fill="none" className={className} aria-hidden="true">
      <path
        d="M28 30V68C28 78 12 78 12 68V22C12 8 32 8 32 22V64"
        stroke="#9a9a9a"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
