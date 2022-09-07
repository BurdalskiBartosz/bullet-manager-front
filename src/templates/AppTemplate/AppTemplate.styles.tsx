import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.dark};
	padding: 1.5rem 2rem;
`;

export const Main = styled.main`
	position: relative;
	display: flex;
	align-items: flex-start;
`;

export const PageWrapper = styled.div`
	padding: 2rem 0 2rem 4rem;
`;
