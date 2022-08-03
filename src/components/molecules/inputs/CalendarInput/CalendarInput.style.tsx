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
export const StyledInput = styled.input`
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
export const CalendarWrapper = styled.div`
	.react-datepicker {
		& * {
			font-family: ${({ theme }) => theme.fonts.primary};
		}
		&__day-names {
			display: grid;
			grid-template-columns: repeat(7, 1fr);
		}
		&__week {
			display: grid;
			grid-template-columns: repeat(7, 1fr);
		}
		&__day,
		&__day--keyboard-selected {
			border: none;
			background-color: transparent;
			cursor: pointer;
			border-radius: ${({ theme }) => theme.sizes.borderRadius};
			padding: 0.5rem;
			font-size: 15px;
			width: 100%;
			text-align: center;
			&--today {
				border: 2px dashed ${({ theme }) => theme.colors.purple100};
			}
			&:hover {
				background-color: ${({ theme }) => theme.colors.purple200};
				color: ${({ theme }) => theme.colors.light};
			}
			&--selected {
				background-color: ${({ theme }) => theme.colors.purple100};
				color: ${({ theme }) => theme.colors.light};
			}
		}
		&__day--outside-month {
			color: ${({ theme }) => theme.colors.lightGray};
		}
	}
`;
