import { tGenericIndexSignature } from '../../types/shared';
import { media } from '../breakpoints';
import { colors } from '../variables/colors';

const { sm, lg, xl } = media;

const typographyBreakpoints = [sm, lg, xl];

type tTypography<T> = {
	[key: string]: {
		tag: tTags;
		styles: T;
	};
};

export type tTags = 'h1' | 'h2' | 'h3' | 'p' | 'label';

export type tVariants = 'header' | 'label' | 'inputError';

export const typography: tTypography<
	tGenericIndexSignature<string | string[]>
> = {
	header: {
		tag: 'h1',
		styles: {
			'font-size': ['3.5rem', '4rem', '5rem'],
			'line-height': ['4.7rem', '5.7rem', '6.7rem'],
			'letter-spacing': '0.00em',
			'font-weight': '400'
		}
	},
	label: {
		tag: 'label',
		styles: {
			'font-size': '1.2rem',
			'line-height': '1.6rem',
			'letter-spacing': '0.00em',
			'font-weight': 'bold',
			'margin-bottom': '1rem',
			color: colors.gray
		}
	},
	inputError: {
		tag: 'p',
		styles: {
			'font-size': '1rem',
			'line-height': '1.4rem',
			'letter-spacing': '0.002em',
			'font-weight': '400',
			color: colors.danger
		}
	}
};

const createStylesWithBreakpoints = (key: string, obj: string[]) => {
	return obj.reduce((acc, val, i) => {
		if (i === 0) acc += `${key}: ${val};`;
		else acc += `${typographyBreakpoints[i - 1]} { ${key}: ${val}; }`;
		return acc;
	}, '');
};

const createStyle = (styles: object) => {
	return Object.entries(styles).reduce((acc, [key, value]) => {
		if (value instanceof Array)
			acc += createStylesWithBreakpoints(key, value);
		else acc += `${key}: ${value};`;
		return acc;
	}, '');
};
export const variants = Object.entries(typography).reduce(
	(acc, [key, value]) => {
		acc[key] = {
			tag: value.tag,
			styles: createStyle(value.styles)
		};
		return acc;
	},
	{} as tTypography<string>
);
