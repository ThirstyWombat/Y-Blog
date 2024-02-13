/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			colors: {
				lightBlue: '#B8DEF4',
				darkReddit: '#0B1416',
				darkRedditLighter: '#0D1B1E',
				darkRedditDarker: '#162a2e',
				primary: '#0045AC',
				primaryLighter: '#1870F4',
				darkBlue: '#042539',
				paynesGrey: '#3C677C',
				green: '#13ce66',
				yellow: '#ffc82c',
				'gray-dark': '#273444',
				gray: '#8492a6',
				'gray-light': '#d3dce6',
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
};
