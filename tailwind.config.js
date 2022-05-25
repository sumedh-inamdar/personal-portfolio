module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      gold: '#ffc300',
      yellow: '#ffd60a',
      navyBlue: '#003566',
      darkBlue: '#001d3d',
      midnightBlue: '#000814'
    },
    extend: {
      flex: {
        2: '2 1 0%'
      },
      boxShadow: {
        gold: '20px 25px gold',
        goldShort: '10px 15px gold'
      }
    }
  },
  plugins: []
};
