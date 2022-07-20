import styled, { css } from 'styled-components';
import IconButton from '../IconButton';

type tWrapperProps = {
	isError: boolean;
};

type tInputProps = {
	fullWidth: boolean;
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
			& input {
				border-color: ${({ theme }) => theme.colors.danger};
			}
		`};
`;
export const StyledInnerWrapper = styled.div`
	position: relative;
`;
export const StyledInput = styled.input<tInputProps>`
	width: ${({ fullWidth }) => (fullWidth ? '100%' : '330px')};
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

export const StyledIconButton = styled(IconButton)`
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
	cursor: pointer;
`;

export const StyledError = styled.p`
	align-self: flex-end;
`;
