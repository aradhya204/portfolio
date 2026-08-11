/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030712',
        primary: '#3B82F6', // Blue 500
        accent: '#8B5CF6', // Purple 500
        secondary: '#6366F1', // Blue 600 (used for tint)
        cards: '#111827',
        text: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(4rem, 12vw, 12rem)',
        'hero-sub': 'clamp(1.5rem, 3vw, 3rem)',
        'section-title': 'clamp(3rem, 8vw, 8rem)',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'spin-slower': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}
