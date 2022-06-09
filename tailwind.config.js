module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#ffc300',
        goldOpaque: 'rgba(255, 195, 0, 0.9)',
        yellow: '#ffd60a',
        yellowOpaque: 'rgba(225, 214, 10, 0.9)',
        navyBlue: '#003566',
        navyBlueOpaque: 'rgba(0, 53, 102, 0.5)',
        darkBlue: '#001d3d',
        midnightBlue: '#000814'
      },
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
