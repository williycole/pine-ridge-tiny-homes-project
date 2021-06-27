  // tailwind.config.js
  module.exports = {
    darkMode: false, // or 'media' or 'class'
      theme: {
        fontFamily: {
          'primaryFont': ['Lato', 'sans-serif'],
          'secondayFont': ['Roboto', 'sans-serif']
        },
        height: {
          sm: '8px',
          md: '16px',
          lg: '24px',
          xl: '48px',
        },
        borderWidth: {
          DEFAULT: '1px',
          '0': '0',
          '1': '1px',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '5': '5px',
          '6': '6px',
          '7': '7px',
          '8': '8px',
        },
        extend: {
          colors:{
            lightTanOpac: '#e5e5e5d8',
            lightTan: '#F5F5F5',
            darkTan: '#F2EEEB',
            gray: '#333333',
            grayShadow: '#2b2a2a',
            green: '#2A5C47',
            backgroundOpac: '#999393ad',
          },
          textColor: {
            lightTanOpac: '#e5e5e5d8',
            lightTan: '#F5F5F5',
            darkTan: '#F2EEEB',
            gray: '#333333',
            grayShadow: '#2b2a2a',
            green: '#2A5C47',
            backgroundOpac: '#999393ad',
          },
        },
      },
      variants: {
        extend: {},
      },
      plugins: [],
   }