/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,css}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg':
          "url('https://pages.trip.com/images/home-background/head-banner-bg-new-1920.webp')",
        'hotel-bg':
          "url('https://pages.trip.com/Hotels/images/V8HomePageBackGround.webp')",
      },
      backgroundPosition: {
        'top-15': 'center top -15rem',
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
