/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: {
          default: '#142d55',
          light: '#4777c4'
        }, 
        customBluetransparent: '#31476a',
        customGray: '#D3D3D3',
        customGrayLight: '#f2f4f7',
      },
    },
  },
  plugins: [],
}

