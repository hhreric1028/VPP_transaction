/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        market: {
          navy: '#111a3a',
          indigo: '#24164f',
          blue: '#1f4c8f',
          cyan: '#0e7490',
          line: '#d8dee8',
          panel: '#f6f8fb',
        },
      },
      boxShadow: {
        panel: '0 10px 26px rgba(24, 34, 66, 0.08)',
      },
    },
  },
  plugins: [],
};
