module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px'
    },
    extend: {
      colors: {
        'dark-blue': '#0a192f',
        'dark-blue-bg': '#112240',
        'blue-white': '#caf0f8',
        'grey': '#8d99ae',
        'light-blue': '#00b4d8',
        'light-grey': '#112240'
      },
      backgroundImage: {
        'typeplusplus': "url('/src/assets/type++.JPG')",
        'no1fan': "url('/src/assets/no1fan.JPG')",
        'turtle': "url('/src/assets/turtle.JPG')",
      }
    },
  },
  plugins: [],
}
