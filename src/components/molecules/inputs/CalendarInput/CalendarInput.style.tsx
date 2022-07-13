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

export const CalendarWrapper = styled.div`
	.react-calendar {
		& * {
			font-family: ${({ theme }) => theme.fonts.primary};
		}
		&__navigation {
			display: flex;
			justify-content: space-between;
			max-width: 400px;
			margin: 0 auto 2rem auto;
			&__label,
			&__arrow {
				border: none;
				background-color: transparent;
				cursor: pointer;
			}
			&__label {
				flex-grow: 1;
				max-width: 200px;
				border-radius: ${({ theme }) => theme.sizes.borderRadius};
				background-color: ${({ theme }) => theme.colors.purple500};
				color: ${({ theme }) => theme.colors.light};
				font-weight: bold;
				padding: 0.8rem 0;
			}
			&__arrow {
				width: 25px;
			}
		}
		&__month-view__days__day--neighboringMonth {
			color: ${({ theme }) => theme.colors.gray};
		}
		&__month-view__weekdays,
		&__month-view__days,
		&__year-view__months,
		&__century-view__decades {
			display: grid !important;
		}
		&__month-view__weekdays,
		&__month-view__days {
			grid-template-columns: repeat(7, 1fr);
			abbr {
				text-decoration: none;
			}
		}
		&__year-view__months,
		&__century-view__decades {
			grid-template-columns: repeat(3, 1fr);
		}

		&__month-view__weekdays {
			text-align: center;
			margin-bottom: 1rem;
			font-weight: bold;
		}
		&__month-view__days {
		}
		&__tile {
			border: none;
			background-color: transparent;
			cursor: pointer;
			border-radius: ${({ theme }) => theme.sizes.borderRadius};
			padding: 0.5rem;
			font-size: 15px;
			&:hover {
				background-color: ${({ theme }) => theme.colors.purple200};
				color: ${({ theme }) => theme.colors.light};
			}
			&--active {
				background-color: ${({ theme }) => theme.colors.purple100};
				color: ${({ theme }) => theme.colors.light};
			}
		}
		&__viewContainer {
			min-height: 200px;
		}
	}
`;
