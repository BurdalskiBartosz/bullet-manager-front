import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	position: relative;
`;

export const DropdownButton = styled.button`
	background-color: transparent;
	cursor: pointer;
	border: none;
`;

export const DropdownBody = styled.div`
	position: absolute;
	right: 0;
	top: calc(100% + 30px);
	width: 200px;
	background-color: ${({ theme }) => theme.colors.light};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;
