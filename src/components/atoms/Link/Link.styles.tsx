import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
	font-weight: bold;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.dark};
	font-size: 1.2rem;
`;

export default StyledLink;
