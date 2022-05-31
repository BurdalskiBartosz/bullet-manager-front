import { tIconNames } from 'components/atoms/Icon/Icon';
import { FC } from 'react';
import Font from 'components/atoms/Font';
import { StyledIcon, StyledLi, StyledLink } from './ListLink.style';

type Props = {
	iconName: tIconNames;
	link: string;
	text: string;
};

const ListLink: FC<Props> = ({ iconName, link, text }) => {
	return (
		<StyledLi>
			<StyledLink to={link}>
				<StyledIcon iconName={iconName} />
				<Font variant="menu">{text}</Font>
			</StyledLink>
		</StyledLi>
	);
};

export default ListLink;
