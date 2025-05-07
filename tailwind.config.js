/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'rgb(var(--color-brand-primary) / <alpha-value>)',
          primaryHover: 'rgb(var(--color-brand-primary-hover) / <alpha-value>)',
          primaryLight: 'rgb(var(--color-brand-primary-light) / <alpha-value>)',
          background: 'rgb(var(--color-brand-background) / <alpha-value>)',
          surface: 'rgb(var(--color-brand-surface) / <alpha-value>)',
          surfaceHover: 'rgb(var(--color-brand-surface-hover) / <alpha-value>)',
          text: 'rgb(var(--color-brand-text) / <alpha-value>)',
          textLight: 'rgb(var(--color-brand-text-light) / <alpha-value>)',
          muted: 'rgb(var(--color-brand-muted) / <alpha-value>)',
          border: 'rgb(var(--color-brand-border) / <alpha-value>)',
          success: 'rgb(var(--color-brand-success) / <alpha-value>)',
          warning: 'rgb(var(--color-brand-warning) / <alpha-value>)',
          error: 'rgb(var(--color-brand-error) / <alpha-value>)',
          info: 'rgb(var(--color-brand-info) / <alpha-value>)',
        }
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
      },
      fontFamily: {
        sans: ["'Inter'", "'Helvetica Neue'", "Arial", "sans-serif"],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
