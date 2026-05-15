/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pm: {
          teal: '#0B5E6B',
          'teal-light': '#4FB4AF',
          'teal-deep': '#063B45',
          amber: '#E8A53A',
          'amber-deep': '#C28526',
          ink: '#0F2847',
          'ink-deep': '#0A1A2E',
          slate: '#55708A',
          'slate-light': '#AAB8C7',
          paper: '#FBFCFD',
          'paper-warm': '#F7F9FB',
          hairline: '#E6EBF1',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Inter Tight"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        prose: '680px',
        wide: '960px',
      },
    },
  },
  plugins: [],
};
