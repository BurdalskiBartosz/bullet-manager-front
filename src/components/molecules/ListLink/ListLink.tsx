import { FC } from 'react';
import { tIconNames } from 'components/atoms/Icon/Icon';
import { Font } from 'components';
import {
	StyledIcon,
	StyledLi,
	StyledLink,
	StyledLinkWithFn
} from './ListLink.style';

type tProps = {
	iconName: tIconNames;
	text: string;
	link?: string;
	fn?: Function;
};

const ListLink: FC<tProps> = ({ iconName, link, text, fn }) => {
	const linkContent = (
		<>
			<StyledIcon iconName={iconName} />
			<Font variant="menu">{text}</Font>
		</>
	);

	return (
		<StyledLi>
			{link && <StyledLink to={link}>{linkContent}</StyledLink>}
			{fn && (
				<StyledLinkWithFn onClick={() => fn()}>
					{linkContent}
				</StyledLinkWithFn>
			)}
		</StyledLi>
	);
};

export default ListLink;
