module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white':"#FFFFFF",
      'black':'#000000',
      'orange1': '#FFC301',
      'orange2': "#FF6533",
      'orange3': "#FF8E1E",
      'blue1': '#9CD2EE',
      'blue2': '#00ACEE',
      'darkGray': '#232222',
      'lightGray': '#F7F7F7'
    },
    extend: {
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
