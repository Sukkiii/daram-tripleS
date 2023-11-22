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
          "url('//ak-d.tripcdn.com/images/1mc7412000am8free45B7_R_400_400_R5_D.jpg_.webp')",
      },
      borderRadius: {
        lg: '32px',
      },
      margin: {
        '-50px': '-50px',
      },
      width: {
        '1160px': '1160px',
      },
    },
  },
  plugins: [],
}
