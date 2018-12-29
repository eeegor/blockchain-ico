/**
 *
 * Theme
 *
 * INFO: All size values in this theme are px
 */
export const colors = {
	primaryDarkBlue: '#061258',
	primaryLightBlue: '#3866FF',
	primaryPurple: '#6F3BFF',
	primaryTeal: '#06CFC5',
	primaryGreen: '#3BE3AE',
	primaryRed: '#F54269',
	primaryText: '#101530',
	secondaryText: '#33394A',
	text: '#5D616F',
	lightText: '#A3A6AD',
	secondaryBg: '#18223C',
	primaryBg: '#33394A',
	platformBg: '#EAEBED',
	websiteBg: '#F6F7FB',
	divider: '#EAEBED',
	bitcoin: '#F7931A',
	litecoin: '#88CBF5',
	etherium: '#5F88A8',
	buttonPrimary: '#2B60FF',
	buttonPrimaryBg: '#3870FF'
};

export const fonts = {
	gtCinetype: 'GTCinetype-Regular',
	gtCinetypeItalic: 'GTCinetype-Italic',
	gtCinetypeBold: 'GTCinetype-Bold',
	gtCinetypeBoldItalic: 'GTCinetype-Bold-Italic',
	gtCinetypeLight: 'GTCinetype-Light',
	gtCinetypeLightItalic: 'GTCinetype-Light-Italic',
	gtCinetypeMono: 'GTCinetype-Mono',
	rubik: 'Rubik-Regular',
	rubikMedium: 'Rubik-Medium'
};

export const theme = {
	colors,
	fonts,
	fontSizeDefault: [16, 18],
	borderRadius: 4,
	container: {
		maxWidth: 1030
	},
	grid: {
		maxWidth: 1030,
		gridGap: 30
	},
	space: [0, 4, 8, 16, 32, 64, 128, 256],
	shadows: {
		small: '0px 2px 3px 0px rgba(0, 14, 70, .1)',
		medium: '2px 4px 5px rgba(0, 14, 70, .17)',
		large: '4px 12px 24px rgba(0, 14, 70, .11)',
		button: '0 14px 17px rgba(0, 4, 18, .16)'
	},
	media: {
		xSmall: 320,
		small: 480,
		tablet: 767,
		desktop: 1024,
		large: 1280,
		xLarge: 1440
	},
	headerHeight: {
		mobile: 60,
		tablet: 84
	}
};
