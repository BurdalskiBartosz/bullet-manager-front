import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import StyledLink from './Link.styles';

type tProps = {
	children: string;
	link: string;
	external?: boolean;
};

const Link: FC<tProps> = ({ children, link, external }) => {
	const { t } = useTranslation();
	const textContent = t(children);
	return external ? (
		<StyledLink as="a" href={link}>
			{textContent}
		</StyledLink>
	) : (
		<StyledLink to={link}>{textContent}</StyledLink>
	);
};
export default Link;
