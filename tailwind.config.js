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
      }
    },
    fontFamily: {
          'display' : 'Playfair Display',
          'trade'    : 'Trade Gothic',	    
    },
  },
  variants: {},
};
