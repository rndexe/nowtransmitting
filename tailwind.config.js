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
      },
    },
    fontFamily: {
          'display' : 'Playfair Display',
          'trade'    : 'Trade Gothic',	    
    },
  },
  variants: {},
};
