import Icon from 'components/atoms/Icon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const linkStyles = `
	display: flex;
	text-decoration: none;
	align-items: center;
	padding: 0.5rem 0 0.5rem 1.5rem;
`;

export const StyledLi = styled.li`
	cursor: pointer;
`;

export const StyledLink = styled(Link)`
	${linkStyles}
	color: ${({ theme }) => theme.colors.primaryFont};
	${({ theme: { animations, colors } }) =>
		animations.menuTransition(colors.primaryFont, colors.light)}
`;

export const StyledLinkWithFn = styled.button`
	${linkStyles}
	cursor: pointer;
	width: 100%;
	border: none;
	outline: none;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.primaryFont};
	${({ theme: { animations, colors } }) =>
		animations.menuTransition(colors.primaryFont, colors.light)}
`;

export const StyledIcon = styled(Icon)`
	margin-right: 1rem;
`;
