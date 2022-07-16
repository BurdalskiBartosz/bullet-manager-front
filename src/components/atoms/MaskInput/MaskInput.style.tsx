import styled, { css } from 'styled-components';
import IconButton from '../IconButton';
import MaskedInput from 'react-text-mask';

type tWrapperProps = {
	isError: boolean;
	fullWidth: boolean;
};

export const StyledWrapper = styled.div<tWrapperProps>`
	display: flex;
	flex-direction: column;
	width: ${({ fullWidth }) => (fullWidth ? '100%' : '330px')};
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
export const StyledInput = styled(MaskedInput)`
	padding: 1.2rem 2rem;
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	outline: none;
	border: 1px solid ${({ theme }) => theme.colors.lightGray};
	font-family: ${({ theme }) => theme.fonts.primary};
	width: 100%;
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
	transition: 0.3s ease;
	&:hover {
		fill: ${({ theme }) => theme.colors.purple100};
	}
`;

export const StyledError = styled.p`
	align-self: flex-end;
`;
