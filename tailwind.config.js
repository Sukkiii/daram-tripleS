/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,css}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg':
          "url('https://pages.trip.com/images/home-background/head-banner-bg-new-1920.webp')",
      },
      borderRadius: {
        lg: '4rem',
      },
      width: {
        'calc(25%-12px)': 'calc(25%-12px)',
      },
    },
  },
  plugins: [],
}
