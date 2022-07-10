import styled, { css } from 'styled-components';

type tWrapperProps = {
	isError: boolean;
};

export const StyledWrapper = styled.div<tWrapperProps>`
	display: flex;
	flex-direction: column;
	${({ isError }) =>
		isError &&
		css`
			& label {
				color: ${({ theme }) => theme.colors.danger};
			}
			& textarea {
				border-color: ${({ theme }) => theme.colors.danger};
			}
		`};
`;

export const StyledTextArea = styled.textarea`
	width: 100%;
	padding: 1.2rem 2rem;
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	outline: none;
	border: 1px solid ${({ theme }) => theme.colors.lightGray};
	font-family: ${({ theme }) => theme.fonts.primary};
	&:focus {
		border-color: ${({ theme }) => theme.colors.dark};
	}
	&::placeholder {
		color: ${({ theme }) => theme.colors.gray};
		font-style: italic;
		opacity: 0.6;
		font-size: 13px;
	}
`;
