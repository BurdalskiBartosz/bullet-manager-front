import styled from 'styled-components';

export const ModalWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100vw;
	height: 100vh;
	background-color: rgba(23, 23, 23, 30%);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalContent = styled.div`
	min-width: 400px;
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.light};
`;

export const ModalTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 3rem;
`;
