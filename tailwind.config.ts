
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
        headline: ['"Open Sans"', 'sans-serif'],
        display: ['"Concert One"', 'cursive'],
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#1E1E1E',
        card: {
          DEFAULT: '#F9F9F9',
          foreground: '#1E1E1E',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#1E1E1E',
        },
        primary: {
          DEFAULT: '#006B3C',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FFD700',
          foreground: '#1E1E1E',
        },
        muted: {
          DEFAULT: '#E0E0E0',
          foreground: '#1E1E1E',
        },
        accent: {
          DEFAULT: '#FFD700',
          foreground: '#1E1E1E',
        },
        destructive: {
          DEFAULT: '#E31B23',
          foreground: '#FFFFFF',
        },
        border: '#E0E0E0',
        input: '#E0E0E0',
        ring: '#006B3C',
        chart: {
          '1': '#006B3C',
          '2': '#FFD700',
          '3': '#E31B23',
          '4': '#1E1E1E',
          '5': '#F9F9F9',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
