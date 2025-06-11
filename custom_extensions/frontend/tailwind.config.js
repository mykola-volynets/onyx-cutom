/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#2563eb', // blue used for buttons/icons
        'brand-primary-hover': '#1e4ed8',
        'brand-accent': '#0097ff',
      },
      backgroundImage: {
        'app-gradient': 'linear-gradient(180deg,var(--gradient-start, #FFF9F5) 0%,var(--gradient-mid1, #ECECFF) 35%,var(--gradient-mid2, #C8E4FF) 70%,var(--gradient-end, #EAF6FF) 100%)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
}; 