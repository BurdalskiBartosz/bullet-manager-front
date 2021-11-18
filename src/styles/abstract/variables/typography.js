import { colors } from './colors';
import { fonts } from './fonts';
import { media } from '../breakpoints/extendedBreakpoints';

const { sm, lg, xl } = media;
export const typographyBreakpoints = [sm, lg, xl];

export const typography = {
	header: {
		'font-size': ['3.5rem', '5rem', '5.6rem'],
		'font-weight': '900',
		'line-height': ['4rem', '4.6rem', '5.3rem'],
		'letter-spacing': '0.00em',
		'margin-bottom': '3rem',
		color: colors.primary,
	},
	sectionHeader: {
		'font-size': ['2.5rem', '3.3rem', '4.5rem'],
		'font-weight': '900',
		'line-height': ['2.6rem', '3.5rem', '5.3rem'],
		'letter-spacing': '0.00em',
		color: colors.primary,
		'font-family': fonts.primary,
	},
	mediumHeader: {
		'font-size': ['1.4rem', '1.8rem', '2rem'],
		'font-weight': '400',
		'line-height': ['2rem', '2.8rem', '3.4rem'],
		'letter-spacing': '0.0em',
		'font-weight': 'bold',
		color: colors.primary,
	},
	paragraph: {
		'font-size': ['1.4rem', '1.5rem', '1.6rem'],
		'font-weight': '400',
		'line-height': ['2.2rem', '2.4rem', '2.6rem'],
		'letter-spacing': '0.00em',
		color: colors.primary,
	},
};
