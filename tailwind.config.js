module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    textColor: {
      'blue': '#3E6CDA',
      'yellow': '#ffed4a',
      'red': '#d62b2b',
      'green':'#00ff00'
    },
    extend: {
      colors: {
	trueGray: {
	    750: '#2d2d2d',	
	    400: '#a3a3a3',	
	},
	red: {
	    650: '#d62b2b',	
	},
	blue: {
	    pg: '#3E6CDA',	
	},
      },
      spacing: {
         '43': '10.75rem',
         '96': '24rem',
         '144': '36rem',
         '192': '48rem',
         '240': '60rem',
         '288': '72rem',
      },
      keyframes: {
        'fade-in-down': {
          '0%,100%': {
            opacity: '1',
            transform: 'translateY(-100%)',
          },
          '50%': {
            opacity: '0',
            transform: 'translateY(100%)',
        },
      }
  },
  animation: {
      'fade-in-down': 'fade-in-down 2s infinite'
  }
    },
    
    fontFamily: {
          'display' : 'Playfair Display',
          'trade'    : 'Trade Gothic',	    
    },
  },
  variants: {},
};
