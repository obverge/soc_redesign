/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '1/7': '14.2857143%',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.22)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'mun-burgundy': '#832633',
        'mun-grey': '#63666A',
        'mun-gold': '#EAAB00',
        'charity-ball-gold': '#d9b04c',
        'charity-ball-dark-blue': '#00146e',
        'charity-ball-light-blue': '#6796ff',
        surface: '#0f172a',
        'surface-soft': '#111827',
        'surface-strong': '#1f2937',
        'text-primary': '#e2e8f0',
        'text-secondary': '#94a3b8',
        overlay: 'rgba(15,23,42,0.72)',
      },
      fontFamily: {
        norwester: ['Norwester', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
