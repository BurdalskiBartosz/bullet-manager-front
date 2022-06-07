import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.primaryFont};
	padding: 1.5rem 2rem;
`;

export const Main = styled.main`
	position: relative;
	display: flex;
	align-items: flex-start;
`;
