import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
`;

export const BreadLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	margin-right: 1rem;
	font-size: 2.5rem;
`;
