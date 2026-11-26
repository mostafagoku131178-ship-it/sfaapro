/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        navy: {
          DEFAULT: '#102A56',
          deep: '#102A56',
          text: '#172554',
          800: '#153163',
          900: '#0F2346',
          950: '#091734',
        },
        skyaccent: {
          DEFAULT: '#38BDF8',
          hover: '#0EA5E9',
        },
        surface: {
          light: '#FFFFFF',
          soft: '#F1F7FF',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-blue': '0 10px 35px -10px rgba(37, 99, 235, 0.14)',
        'card-blue': '0 4px 24px -4px rgba(16, 42, 86, 0.08)',
        'glow-royal': '0 0 25px -5px rgba(37, 99, 235, 0.4)',
      },
    },
  },
  plugins: [],
}
