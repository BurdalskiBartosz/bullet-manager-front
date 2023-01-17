import styled from 'styled-components';

export const Wrapper = styled.div``;

export const LabelButton = styled.button`
	background-color: transparent;
	outline: none;
	border: none;
	color: ${({ theme }) => theme.colors.gray};
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;
