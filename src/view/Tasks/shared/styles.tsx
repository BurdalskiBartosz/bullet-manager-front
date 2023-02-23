import styled from 'styled-components';

export const Box = styled.div`
	position: relative;
	border-radius: 30px;
	background-color: ${({ theme }) => theme.colors.light};
	padding: 3rem;
`;
