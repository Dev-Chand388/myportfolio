/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#14B8A6',
        accent: '#F97316',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.2s both',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'text-blue-600',
    'text-teal-600',
    'text-orange-600',
    'text-purple-600',
    'text-green-600',
    'text-yellow-600',
    'text-red-600',
    'bg-blue-600/10',
    'bg-teal-600/10',
    'bg-orange-600/10',
    'bg-purple-600/10',
    'bg-green-600/10',
    'bg-yellow-600/10',
    'bg-red-600/10'
  ]
};