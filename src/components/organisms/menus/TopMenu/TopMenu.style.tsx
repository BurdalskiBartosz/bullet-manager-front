import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: calc(100vw - 240px - 95px);
	height: 90px;
	margin-left: 4rem;
	padding: 0 2rem;
	background-color: rgba(255, 255, 255, 15%);
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	box-shadow: ${({ theme }) => theme.shadows.secondary};
	overflow: hidden;
`;
