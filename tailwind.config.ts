import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        ocean: {
          50: '#eef7fb',
          100: '#d6ecf5',
          200: '#aed6ea',
          300: '#7ab8d9',
          400: '#4a95c2',
          500: '#2b77a8',
          600: '#1f5f8c',
          700: '#1a4d72',
          800: '#183f5c',
          900: '#12314a',
          950: '#0a1e30',
        },
        concrete: {
          50: '#f7f6f3',
          100: '#efece5',
          200: '#dcd6c9',
          300: '#c3b9a4',
          400: '#a8997f',
          500: '#8f7f65',
          600: '#736752',
          700: '#5b5343',
          800: '#403a30',
          900: '#2a2620',
        },
        charcoal: {
          50: '#f5f5f5',
          100: '#e6e6e6',
          200: '#c9c9c9',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#3d3d3d',
          700: '#2b2b2b',
          800: '#1f1f1f',
          900: '#141414',
          950: '#0a0a0a',
        },
        offwhite: '#faf9f7',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.28em',
      },
      transitionTimingFunction: {
        'quart-out': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'blueprint':
          "linear-gradient(to right, rgba(43,119,168,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(43,119,168,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
