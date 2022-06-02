import styled, { css } from 'styled-components';

type tDropDownTop = {
	backgroundColor?: string;
	border?: boolean;
};

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
`;

export const FormDateWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const InnerWrapper = styled.div`
	display: flex;
	& > * {
		margin-left: 2rem;
	}
`;

export const DropdownTop = styled.span<tDropDownTop>`
	display: flex;
	align-items: center;
	padding: 1rem;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	${({ border, theme }) =>
		border &&
		css`
			border: 1px solid ${theme.colors.primaryFont};
		`}
	${({ backgroundColor, theme }) =>
		backgroundColor
			? css`
					background-color: ${backgroundColor};
			  `
			: css`
					background-color: ${theme.colors.buttonSuccess};
			  `}
`;

export const StyledUl = styled.ul`
	list-style: none;
	padding: 1rem 0;
`;
