import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#050505',
        graphite: '#181818',
        charcoal: '#252525',
        gold: '#D0B27B',
        cream: '#F7F1E3',
      },
      boxShadow: {
        soft: '0 16px 40px rgba(0, 0, 0, 0.25)',
        glow: '0 0 48px rgba(208, 178, 123, 0.18)',
      },
      backgroundImage: {
        'hero-dark': 'linear-gradient(180deg, rgba(5,5,5,0.95), rgba(24,24,24,0.85))',
      },
      borderRadius: {
        xl: '24px',
      },
    },
  },
  plugins: [],
};

export default config;
