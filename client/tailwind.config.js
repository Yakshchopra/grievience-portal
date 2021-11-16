module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#9FA2B4',
        primary: '#3751FF',
        light: '#F7F8FC',
        outline: '#dfe0eb',
        darkBlack: '#363740',
        navtext: '#A4A6B3',
        tableHover: '#F7F8FF',
        backdrop: 'rgba(0, 0, 0, 0.4);',
        darkBlue: '#131E66',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
