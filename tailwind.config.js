/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limitless: {
          darkest: '#030308',
          black: '#060710',
          card: 'rgba(10, 11, 24, 0.45)',
          navy: '#0b1026',
          deepBlue: '#0d1b3e',
          electric: '#00a8ff',
          cyan: '#55e6ff',
          neonCyan: '#00f7ff',
          purple: '#9d4edd',
          deepPurple: '#7b2cbf',
          hollowPurple: '#b5179e',
          glowPurple: 'rgba(157, 78, 221, 0.5)',
          redAka: '#ff0055',
          redGlow: 'rgba(255, 0, 85, 0.5)',
          glow: 'rgba(157, 78, 221, 0.4)',
          border: 'rgba(157, 78, 221, 0.3)',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 24s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'purple-pulse': 'purplePulse 2.5s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(157, 78, 221, 0.6))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 35px rgba(85, 230, 255, 0.95))' },
        },
        purplePulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(157, 78, 221, 0.7)) drop-shadow(0 0 40px rgba(255, 0, 85, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 35px rgba(85, 230, 255, 0.9)) drop-shadow(0 0 60px rgba(181, 23, 158, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'hollow-purple': '0 0 35px 2px rgba(157, 78, 221, 0.6)',
        'cyan-glow': '0 0 25px -5px rgba(85, 230, 255, 0.5)',
        'aka-red': '0 0 30px rgba(255, 0, 85, 0.6)',
        'domain-heavy': '0 0 60px 10px rgba(157, 78, 221, 0.45)',
      },
    },
  },
  plugins: [],
}
