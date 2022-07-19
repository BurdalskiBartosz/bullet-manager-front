import styled, { css } from 'styled-components';

type tWrapperProps = {
	isError: boolean;
};

export const StyledInputWrapper = styled.div<tWrapperProps>`
	display: flex;
	flex-direction: column;
	${({ isError }) =>
		isError &&
		css`
			& label {
				color: ${({ theme }) => theme.colors.danger};
			}
		`};
`;
