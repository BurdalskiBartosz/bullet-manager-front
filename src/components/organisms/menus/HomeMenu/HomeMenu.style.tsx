import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	border-bottom: 2px solid black;
`;

export const StyledUl = styled.ul`
	max-width: 200px;
	background-color: red;
	display: flex;
	flex-grow: 1;
	justify-content: space-between;
	list-style: none;
	padding: 0;
	margin: 0;
	margin-left: auto;
`;

export const StyledHomeLink = styled(Link)`
	display: block;
	padding: 1rem;
`;
