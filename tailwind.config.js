module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'sans-serif']
    },
    extend: {
      letterSpacing: {
        tightest: '-0.075em',
        tightest1: '-.1em'
      },
      colors: {
        shade0: '#f8f9fa',
        shade0Opaque: 'rgba(248, 249, 250, 0.9)',
        shade1: '#e9ecef',
        shade1Opaque: 'rgba(233, 236, 239, 0.5)',
        shade2: '#dee2e6',
        shade3: '#ced4da',
        shade4: '#adb5bd',
        shade5: '#6c757d',
        shade6: '#495057',
        shade7: '#343a40',
        shade8: '#212529',
        blue: '#2563eb',
        blueOpaque: 'rgba(37, 99, 235, 0.5)',
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
        start: '25px 25px',
        finish: '15px 15px'
      }
    }
  },
  plugins: []
};
