import { typography, typographyBreakpoints } from '../variables/typography';

const createComplexStyle = (key, obj) => {
	return obj.reduce((acc, val, i) => {
		if (i === 0) acc += `${key}: ${val};`;
		else acc += `${typographyBreakpoints[i - 1]} { ${key}: ${val}; }`;
		return acc;
	}, '');
};

const createStyle = variant => {
	return Object.keys(variant).reduce((acc, key) => {
		if (typeof variant[key] === 'object')
			acc += createComplexStyle(key, variant[key]);
		else acc += `${key}: ${variant[key]};`;
		return acc;
	}, '');
};

export const textVariants = Object.keys(typography).reduce((acc, variant) => {
	acc[variant] = createStyle(typography[variant]);
	return acc;
}, {});
