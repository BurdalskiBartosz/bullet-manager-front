import styled, { css } from 'styled-components';
import IconButton from '../IconButton';

type tWrapperProps = {
	isError: boolean | undefined;
	fullWidth: boolean;
	styleForm: 'FORM' | 'BASE';
};

export const StyledWrapper = styled.div<tWrapperProps>`
	position: relative;
	display: flex;
	flex-direction: column;
	width: ${({ fullWidth }) => (fullWidth ? '100%' : '330px')};
	${({ styleForm }) => {
		switch (styleForm) {
			case 'FORM': {
				return css`
					${StyledInput} {
						padding: 0.5rem;
						border: none;
						background-color: ${({ theme }) => theme.colors.light};
						border-bottom: 1px solid
							${({ theme }) => theme.colors.lightGray};
						&::placeholder {
							color: transparent;
						}
					}
					label {
						position: absolute;
						top: -50%;

						z-index: 1;
						transition: 0.3s ease;
						transform: translate(5px, 5px);
						font-weight: 400;
						&:has(
								+ .helper-selector
									> .input-helper-selector:placeholder-shown
							) {
							transform: translate(5px, 20px);
						}
						&:has(
								+ .helper-selector
									> .input-helper-selector:focus
							) {
							transform: translate(5px, 5px);
						}
					}
				`;
			}
			case 'BASE': {
				return css`
					${StyledInput} {
						padding: 1.2rem 1.5rem;
						border: 1px solid
							${({ theme }) => theme.colors.lightGray};
						border-radius: ${({ theme }) =>
							theme.sizes.borderRadius};
					}
				`;
			}
		}
	}}
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
	outline: none;
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
