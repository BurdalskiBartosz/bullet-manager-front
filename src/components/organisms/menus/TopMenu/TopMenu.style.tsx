import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 4rem;
	width: calc(100vw - 240px - 95px);
	height: 90px;
	background-color: rgba(255, 255, 255, 15%);
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	box-shadow: ${({ theme }) => theme.shadows.secondary};
	overflow: hidden;
`;
