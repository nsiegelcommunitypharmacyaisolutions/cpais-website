// PharmMeshLogo.jsx
// Drop-in React component for the PharmMesh mark + optional wordmark.
//
// Usage:
//   <PharmMeshLogo />                           // mark + wordmark, light
//   <PharmMeshLogo mode="dark" />               // inverted for dark backgrounds
//   <PharmMeshLogo wordmark={false} size={48}/> // mark only at 48px
//   <PharmMeshLogo stacked />                   // mark over wordmark
//
// The "cargo" prop swaps what the cradle is catching (default: leaf).
// Available: 'leaf' | 'coin' | 'pill' | 'heart' | 'pulse' | 'drop' | 'atom' | 'spark'
//
// Requires Inter Tight in the page (Google Fonts:
//   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600&display=swap" />)
// Falls back to system-ui if not available.

import React from 'react';

const TEAL = '#0B5E6B';
const TEAL_LIGHT = '#4FB4AF';
const AMBER = '#E8A53A';
const INK = '#0F2847';
const SLATE = '#55708A';
const SLATE_DARK = '#AAB8C7';
const PAPER = '#FBFCFD';

// ── Cargo shapes ─────────────────────────────────────────────
// All centered on (0,0), fit in ~36px box. Swap by passing `cargo` prop.
const cargoShapes = {
  leaf: (fill) => (
    <g transform="rotate(-18)">
      <path d="M 0 -18 C -11 -8 -11 8 0 18 C 11 8 11 -8 0 -18 Z" fill={fill} />
      <line x1="0" y1="-18" x2="0" y2="18" stroke={INK} strokeWidth="1" opacity="0.3" />
    </g>
  ),
  coin: (fill) => (
    <g>
      <circle cx="0" cy="0" r="16" fill={fill} />
      <circle cx="0" cy="0" r="10" fill="none" stroke={INK} strokeWidth="1.3" opacity="0.25" />
    </g>
  ),
  pill: (fill) => (
    <g transform="rotate(-30)">
      <rect x="-18" y="-9" width="36" height="18" rx="9" fill={fill} />
      <line x1="0" y1="-9" x2="0" y2="9" stroke={INK} strokeWidth="1.2" opacity="0.35" />
    </g>
  ),
  heart: (fill) => (
    <path
      d="M 0 16 C -16 4 -18 -10 -10 -14 C -4 -16 0 -12 0 -8 C 0 -12 4 -16 10 -14 C 18 -10 16 4 0 16 Z"
      fill={fill}
    />
  ),
  pulse: (fill) => (
    <path
      d="M -18 0 L -8 0 L -4 -12 L 2 12 L 6 -6 L 10 0 L 18 0"
      stroke={fill}
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  drop: (fill) => (
    <path
      d="M 0 -18 C -10 -4 -12 6 -8 12 A 10 10 0 0 0 8 12 C 12 6 10 -4 0 -18 Z"
      fill={fill}
    />
  ),
  atom: (fill) => (
    <g>
      <ellipse cx="0" cy="0" rx="18" ry="7" fill="none" stroke={fill} strokeWidth="2.5" transform="rotate(30)" />
      <ellipse cx="0" cy="0" rx="18" ry="7" fill="none" stroke={fill} strokeWidth="2.5" transform="rotate(-30)" />
      <circle cx="0" cy="0" r="5" fill={fill} />
    </g>
  ),
  spark: (fill) => (
    <path
      d="M 0 -18 L 4 -4 L 18 0 L 4 4 L 0 18 L -4 4 L -18 0 L -4 -4 Z"
      fill={fill}
    />
  ),
};

// ── Mark ─────────────────────────────────────────────────────
export function PharmMeshMark({ size = 64, mode = 'light', cargo = 'leaf', title = 'PharmMesh' }) {
  const onDark = mode === 'dark';
  const threadColor = onDark ? TEAL_LIGHT : TEAL;
  const cargoFn = cargoShapes[cargo] || cargoShapes.leaf;

  const threads = [
    { y: 48, sag: 4 },
    { y: 68, sag: 12 },
    { y: 88, sag: 22 },
    { y: 108, sag: 34 },
    { y: 128, sag: 48 },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      role="img"
      aria-label={title}
      style={{ display: 'block' }}
    >
      <title>{title}</title>
      {threads.map((t, i) => (
        <path
          key={i}
          d={`M 22 ${t.y} Q 110 ${t.y + t.sag * 2} 198 ${t.y}`}
          stroke={threadColor}
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          opacity={0.45 + i * 0.14}
        />
      ))}
      <g transform="translate(110 180)">{cargoFn(AMBER)}</g>
    </svg>
  );
}

// ── Wordmark (HTML text, NOT inside the SVG — better hinting/kerning) ─
export function PharmMeshWordmark({ size = 28, mode = 'light' }) {
  const onDark = mode === 'dark';
  return (
    <span
      style={{
        fontFamily: "'Inter Tight', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        fontWeight: 600,
        fontSize: size,
        letterSpacing: '-0.028em',
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ color: onDark ? SLATE_DARK : SLATE, fontWeight: 500 }}>Pharm</span>
      <span style={{ color: onDark ? TEAL_LIGHT : TEAL }}>Mesh</span>
    </span>
  );
}

// ── Lockup (mark + wordmark) ─────────────────────────────────
export default function PharmMeshLogo({
  size = 40,
  mode = 'light',
  wordmark = true,
  stacked = false,
  cargo = 'leaf',
}) {
  const wordmarkSize = Math.round(size * 0.72);
  if (!wordmark) return <PharmMeshMark size={size} mode={mode} cargo={cargo} />;

  return (
    <span
      style={{
        display: 'inline-flex',
        flexDirection: stacked ? 'column' : 'row',
        alignItems: stacked ? 'center' : 'center',
        gap: stacked ? size * 0.18 : size * 0.32,
        lineHeight: 1,
      }}
    >
      <PharmMeshMark size={size} mode={mode} cargo={cargo} />
      <PharmMeshWordmark size={wordmarkSize} mode={mode} />
    </span>
  );
}
