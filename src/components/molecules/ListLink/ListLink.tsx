import { tIconNames } from 'components/atoms/Icon/Icon';
import { FC } from 'react';
import Font from 'components/atoms/Font';
import {
	StyledIcon,
	StyledLi,
	StyledLink,
	StyledLinkWithFn
} from './ListLink.style';

type Props = {
	iconName: tIconNames;
	text: string;
	link?: string;
	fn?: Function;
};

const ListLink: FC<Props> = ({ iconName, link, text, fn }) => {
	return (
		<StyledLi>
			{link && (
				<StyledLink to={link}>
					<StyledIcon iconName={iconName} />
					<Font variant="menu">{text}</Font>
				</StyledLink>
			)}
			{fn && (
				<StyledLinkWithFn onClick={() => fn()}>
					<StyledIcon iconName={iconName} />
					<Font variant="menu">{text}</Font>
				</StyledLinkWithFn>
			)}
		</StyledLi>
	);
};

export default ListLink;
