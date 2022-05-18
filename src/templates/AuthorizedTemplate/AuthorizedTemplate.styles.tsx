import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.primaryFont};
	overflow: hidden;
	&::before,
	&:after {
		content: '';
		position: absolute;
		right: 0;
		width: 600px;
		height: 600px;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.light};
		box-shadow: ${({ theme }) => theme.shadows.primary};
	}
	&::before {
		top: 0;
		transform: translate(50%, -50%);
	}
	&::after {
		bottom: 0;
		transform: translate(50%, 50%);
	}
`;
