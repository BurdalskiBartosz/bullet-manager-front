import Font from 'components/atoms/Font';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

type Props = {
	id: string;
	label: string;
	getOptionsFn: Function;
	keyValue: string;
	control: any;
	multi?: boolean;
};
const customStyles = {
	option: (provided: any, state: any) => ({
		...provided,
		fontSize: '14px',
		padding: '5px 0 5px 20px',
		cursor: 'pointer',
		fontWeight: 'bold'
	}),
	control: (provided: any) => ({
		...provided,
		border: '1px solid #B7B7B7',
		borderRadius: '15px',
		paddingLeft: '5px'
	}),
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
	})
};
const SelectInput: FC<Props> = ({
	id,
	label,
	control,
	getOptionsFn,
	keyValue,
	multi = false
}) => {
	const { data } = getOptionsFn();

	const selectOptions = data.map((option: any) => {
		return {
			label: option[keyValue],
			value: option.id
		};
	});

	return (
		<div>
			<Font htmlFor={id} variant="label">
				{label}
			</Font>
			<Controller
				name={id}
				control={control}
				render={({ field }) => {
					const { onChange, value, onBlur } = field;
					console.log(value);
					return (
						<Select
							styles={customStyles}
							options={selectOptions}
							isMulti={multi}
							onBlur={onBlur}
							onChange={(data) =>
								onChange(
									multi
										? data?.map(
												(option: any) => option.value
										  )
										: data.value
								)
							}
							value={
								multi
									? selectOptions.filter((option: any) =>
											value?.includes(option.value)
									  )
									: selectOptions.find(
											(c: any) => c.value === value
									  )
							}
						/>
					);
				}}
			/>
		</div>
	);
};

export default SelectInput;
