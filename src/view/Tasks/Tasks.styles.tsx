import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 520px);
	gap: 3rem;
`;

export const ButtonsWrapper = styled.div`
	display: inline-flex;
	gap: 2rem;
	padding: 1.4rem 2rem;
	background-color: rgba(255, 255, 255, 15%);
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	box-shadow: ${({ theme }) => theme.shadows.secondary};
	margin-bottom: 5rem;
`;

export const TasksList = styled.div`
	background-color: white;
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;
