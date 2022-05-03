import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import StyledLink from './Link.styles';

type Props = {
	children: string;
	link: string;
	external?: boolean;
};

const Link: FC<Props> = ({ children, link, external }) => {
	const { t } = useTranslation();

	return external ? (
		<StyledLink as="a" href={link}>
			{t(children)}
		</StyledLink>
	) : (
		<StyledLink to={link}>{t(children)}</StyledLink>
	);
};
export default Link;
