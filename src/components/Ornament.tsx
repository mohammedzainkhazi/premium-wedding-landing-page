export function GoldLine({ className = "" }: { className?: string }) {
  return <div className={`gold-line ${className}`} />;
}

export function Flourish({ className = "mx-auto h-8 w-48 text-[#c5a35a]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 32" fill="none" aria-hidden>
      <path
        d="M8 16h70M232 16h-70"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M92 16c8-10 16-10 24 0 8 10 16 10 24 0 8-10 16-10 24 0"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="120" cy="16" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function EightStar({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 1.5l1.6 6.4L20 12l-6.4 4.1L12 22.5l-1.6-6.4L4 12l6.4-4.1L12 1.5z" />
      <path d="M12 4.2l1.1 4.6L18 12l-4.9 3.2L12 19.8l-1.1-4.6L6 12l4.9-3.2L12 4.2z" opacity=".35" />
    </svg>
  );
}

export function Crescent({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14.2 3.1a9 9 0 1 0 6.2 14.6 8 8 0 1 1-6.2-14.6z" />
    </svg>
  );
}

export function ArchFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 200 280"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M8 272 V110 C8 48 54 12 100 12 C146 12 192 48 192 110 V272"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M14 272 V112 C14 54 56 18 100 18 C144 18 186 54 186 112 V272"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.5"
      />
    </svg>
  );
}
