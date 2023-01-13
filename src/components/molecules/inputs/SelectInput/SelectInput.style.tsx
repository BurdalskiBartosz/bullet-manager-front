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
		return {
			// ...provided,
			display: 'flex',
			border: 'none',
			borderBottom: `1px solid ${
				state.isFocused
					? colors.dark
					: getColor(state.selectProps.isError)
			}`,
			backgroundColor: '#FCFCFC',
			borderRadius: 0,
			paddingLeft: '0px',
			maxWidth: '100%',
			height: '26px',
			cursor: 'pointer',
			boxShadow: 'none',
			'&:hover': {}
		};
	},
	indicatorSeparator: (provided: any, state: any) => {
		return {
			...provided,
			backgroundColor: 'transparent'
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
	}),
	container: (provided: any) => ({
		...provided
	}),
	valueContainer: (provided: any) => ({
		...provided,
		overflow: 'visible',
		padding: '2px 5px'
	}),
	placeholder: (provided: any, state: any) => ({
		...provided,
		transform:
			state.hasValue || state.selectProps.inputValue
				? 'translate(0px, -20px)'
				: 'translate(0px, -5px)',
		transition: '0.3s ease',
		fontSize: '12px'
	})
};
