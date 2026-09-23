// Inline SVG icons and brand doodles (hearts, stars, flowers, squiggles), per
// the branding guide's recommended motifs. All are decorative unless a label
// is added by the caller.

type IconProps = { className?: string };

const arrowPaths = {
  right: "M5 12h14M13 6l6 6-6 6",
  down: "M12 5v14M6 13l6 6 6-6",
  up: "M12 19V5M6 11l6-6 6 6",
  external: "M7 17 17 7M9 7h8v8",
};

export function Arrow({
  direction = "right",
  className = "h-4 w-4",
}: IconProps & { direction?: keyof typeof arrowPaths }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={arrowPaths[direction]} />
    </svg>
  );
}

export function InstagramGlyph({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CalendarGlyph({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function ClockGlyph({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function PinGlyph({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function MenuGlyph({
  open,
  className = "h-5 w-5",
}: IconProps & { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export function Heart({ className = "h-5 w-5 text-red" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12 21.2s-7.9-4.9-9.8-9.7C.9 8.2 3 4.3 6.8 4.3c2.3 0 3.9 1.4 5 3.1 1.1-1.8 2.9-3.2 5.3-3.1 3.8.2 5.6 4.1 4.3 7.3-1.9 4.7-9.4 9.6-9.4 9.6z"
      />
    </svg>
  );
}

export function Star({ className = "h-5 w-5 text-yellow" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z"
      />
    </svg>
  );
}

export function Flower({
  className = "h-5 w-5 text-green",
  center = "#FDCE03",
}: IconProps & { center?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <g fill="currentColor">
        <circle cx="12" cy="6.2" r="4.2" />
        <circle cx="17.5" cy="10.2" r="4.2" />
        <circle cx="15.4" cy="16.7" r="4.2" />
        <circle cx="8.6" cy="16.7" r="4.2" />
        <circle cx="6.5" cy="10.2" r="4.2" />
      </g>
      <circle cx="12" cy="12" r="3.4" fill={center} />
    </svg>
  );
}

export function Squiggle({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 200 16"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 10c22-7 40 5 62-1s38-7 60-1 40 5 72-2"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// A hand-drawn arrow pointing right, for doodled callouts.
export function DoodleArrow({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="5.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 19c7-4 13 2 20-1s10-3 16-1" />
      <path d="M31 7l12 11-13 11" />
    </svg>
  );
}

// A swooping arrow that points down and to the left (used next to photos).
export function SwoopArrow({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 60 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M56 10C38 5 18 11 12 40" />
      <path d="M4 31l8 11 9-9" />
    </svg>
  );
}
