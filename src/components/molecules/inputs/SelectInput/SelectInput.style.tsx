import styled, { css } from 'styled-components';
import { colors } from 'styles/variables/colors';

const getColor = (condition: boolean) =>
	condition ? colors.danger : colors.lightGray;

export const customStyles = {
	option: (provided: any, state: any) => ({
		...provided,
		fontSize: '13px',
		padding: '5px 0 5px 20px',
		cursor: 'pointer'
	}),
	control: (provided: any, state: any) => {
		console.log(state);
		return {
			...provided,
			border: `1px solid ${
				state.isFocused
					? colors.dark
					: getColor(state.selectProps.isError)
			}`,
			borderRadius: '15px',
			paddingLeft: '5px',
			maxWidth: '100%',
			height: '41px',
			cursor: 'pointer',
			boxShadow: 'none',
			'&:hover': {}
		};
	},
	indicatorSeparator: (provided: any, state: any) => {
		return {
			...provided,
			backgroundColor: `${
				state.isFocused
					? colors.dark
					: getColor(state.selectProps.isError)
			}`
		};
	},
	dropdownIndicator: (provided: any, state: any) => {
		return {
			...provided,
			color: `${
				state.isFocused
					? colors.dark
					: getColor(state.selectProps.isError)
			}`
		};
	},
	singleValue: (provided: any) => ({
		...provided,
		fontSize: '13px'
	}),
	placeholder: (provided: any) => ({
		...provided,
		fontStyle: 'italic',
		opacity: '0.6',
		color: colors.gray,
		fontSize: '13px',
		padding: '5px 0 5px 5px'
	}),
	menuList: (base: any) => ({
		...base,
		'::-webkit-scrollbar': {
			width: '4px',
			height: '0px'
		},
		'::-webkit-scrollbar-track': {
			background: '#f1f1f1'
		},
		'::-webkit-scrollbar-thumb': {
			background: '#888'
		},
		'::-webkit-scrollbar-thumb:hover': {
			background: '#555'
		}
	})
};

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
