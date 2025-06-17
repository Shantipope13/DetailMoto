/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    // Dynamic classes for Framer Motion components
    'border-primary-orange',
    'border-blue-500',
    'border-green-500',
    'border-red-500',
    'bg-primary-orange',
    'bg-blue-500',
    'bg-green-500',
    'bg-red-500',
    'border-t-primary-orange',
    'border-t-blue-500',
    'border-t-green-500',
    'border-t-red-500',
    // Grid column classes
    'md:grid-cols-1',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-1',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
    'lg:grid-cols-5',
    'lg:grid-cols-6'
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF6B00',
        'primary-black': '#1A1A1A',
        // State Colors
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
        info: '#2196F3',
        // Black Colors
        black: {
          primary: '#1A1A1A',
          secondary: '#333333',
          tertiary: '#666666',
        },
        // Grey Colors
        gray: {
          light: '#F5F5F5',
          medium: '#E0E0E0',
          dark: '#9E9E9E',
          charcoal: '#424242',
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.7' }],
        '2xl': ['1.5rem', { lineHeight: '1.6' }],
        '3xl': ['1.875rem', { lineHeight: '1.5' }],
        '4xl': ['2.25rem', { lineHeight: '1.4' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
      ringColor: ['dark'],
      ringOffsetColor: ['dark'],
      ringOffsetWidth: ['dark'],
      ringWidth: ['dark'],
      boxShadow: ['dark'],
    },
  },
};