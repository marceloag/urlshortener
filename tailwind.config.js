/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        shortenbg: "url('/src/images/bg-shorten-desktop.svg')",
        boostbg: "url('/src/images/bg-boost-desktop.svg')"
      },
      colors: {
        chcyan: 'hsl(180, 66%, 49%)',
        chdarkviolet: 'hsl(257, 27%, 26%)',
        chred: 'hsl(0, 87%, 67%)',
        chgray: 'hsl(0, 0%, 75%)',
        chgrayviolet: 'hsl(257, 7%, 63%)',
        chverydarkblue: 'hsl(255, 11%, 22%)',
        chverydarkviolet: 'hsl(260, 8%, 14%)'
      }
    }
  },
  plugins: []
};
