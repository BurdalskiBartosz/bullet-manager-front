import Icon from 'components/atoms/Icon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLi = styled.li`
	cursor: pointer;
`;

export const StyledLink = styled(Link)`
	display: flex;
	color: ${({ theme }) => theme.colors.primaryFont};
	text-decoration: none;
	align-items: center;
	padding: 0.5rem 0 0.5rem 1.5rem;

	${({ theme: { animations, colors } }) =>
		animations.menuTransition(colors.primaryFont, colors.light)}
`;

export const StyledIcon = styled(Icon)`
	margin-right: 1rem;
`;
