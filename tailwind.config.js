module.exports = {
	content: [ './src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}' ],
	theme: {
		extend: {
			fontFamily: {
				Roboto: [ 'Roboto', 'sans-serif' ]
			}
			// // that is animation class
			// animation: {
			// 	fade: 'fadeOut 15s ease-in-out'
			// },
			// // that is actual animation
			// keyframes: {
			// 	fadeOut: {
			// 		'0%': { backgroundColor: '[#ffd000]' },
			// 		'100%': { backgroundColor: 'transparent' }
			// 	}
			// }
		}
	},
	plugins: []
};
