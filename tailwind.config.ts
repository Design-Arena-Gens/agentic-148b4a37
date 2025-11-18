import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0f17',
        surface: '#101623',
        muted: '#94a3b8',
        primary: {
          DEFAULT: '#7c9cff',
          foreground: '#0b1020'
        },
        accent: '#22d3ee',
        card: '#0e1420',
        border: '#1f2a3a',
      },
      boxShadow: {
        soft: '0 2px 20px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
