/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
        backgroundColor: {
        'swipper-custom': 'radial-gradient(at right top, rgb(241, 229, 34) 10%, rgb(90, 166, 61) 35%, rgb(13, 110, 133) 72%)',
        'blue-gradient': 'linear-gradient(40deg, #0d53bd 40%, #13b0a8 90%)',
      },
      screens: {
        '3xl': '1900px',
      },
    },
  },
  plugins: [],
}
