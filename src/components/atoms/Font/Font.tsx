import { CSSProperties, FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { tTags, tVariants, variants } from 'styles/typography';

type tProps = {
	children: number | string | string[];
	variant?: tVariants;
	component?: tTags;
	style?: CSSProperties;
	[x: string]: any;
};

type tTagProps = {
	$style: string;
	$overideStyle: string;
};
const StyledTag = styled.p<tTagProps>`
	${(props) => props.$style};
	${(props) => props.$overideStyle};
`;

const Font: FC<tProps> = ({ children, variant, component, style, ...rest }) => {
	const { t } = useTranslation();
	let overideStyle;
	let tag: tTags = 'p';
	let variantStyles;
	const textContent =
		typeof children === 'object' || typeof children === 'number'
			? children
			: t(children);

	if (variant) {
		tag = variants[variant].tag;
		variantStyles = variants[variant].styles;
	}

	if (style) {
		overideStyle = Object.entries(style).reduce((acc, [key, value]) => {
			const correctCSSPropertyName = key
				.split(/(?=[A-Z])/)
				.map((el) => el.toLowerCase())
				.join('-');
			acc += `${correctCSSPropertyName}: ${value};`;
			return acc;
		}, '');
	}
	return (
		<StyledTag
			as={component ?? tag}
			$style={variantStyles ?? ''}
			$overideStyle={overideStyle ?? ''}
			{...rest}
		>
			{textContent}
		</StyledTag>
	);
};

export default Font;
