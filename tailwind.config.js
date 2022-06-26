module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				theme: {
					main: '#FFD000',
					dark: '#030303',
				},
			},
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
		},
	},
	plugins: [],
};

{
	/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link> */
}
