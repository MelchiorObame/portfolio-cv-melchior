import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:           'var(--bg)',
        'bg-2':       'var(--bg-2)',
        ink:          'var(--ink)',
        'ink-2':      'var(--ink-2)',
        'ink-3':      'var(--ink-3)',
        line:         'var(--line)',
        card:         'var(--card)',
        accent:       'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        secondary:    'var(--secondary)',
        highlight:    'var(--highlight)',
      },
      fontFamily: {
        display: ['"Instrument Serif"', '"Times New Roman"', 'serif'],
        sans:    ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: 'var(--radius)',
      },
      maxWidth: {
        container: 'var(--container)',
      },
    },
  },
  plugins: [],
} satisfies Config
