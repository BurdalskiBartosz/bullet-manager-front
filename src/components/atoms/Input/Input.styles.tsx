import styled, { css } from 'styled-components';
import IconButton from '../IconButton';

type WrapperProps = {
	isError: boolean;
};

export const StyledWrapper = styled.div<WrapperProps>`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
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
export const StyledInput = styled.input`
	width: 330px;
	padding: 1.2rem 2rem;
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	outline: none;
	border: 1px solid ${({ theme }) => theme.colors.primaryFont};
	&::placeholder {
		color: ${({ theme }) => theme.colors.gray};
		font-style: italic;
		opacity: 0.6;
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
