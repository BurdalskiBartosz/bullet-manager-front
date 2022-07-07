import Font from 'components/atoms/Font';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import Select, { GroupBase } from 'react-select';
import { customStyles, StyledInputWrapper } from './SelectInput.style';
declare module 'react-select/dist/declarations/src/Select' {
	export interface Props<
		Option,
		IsMulti extends boolean,
		Group extends GroupBase<Option>
	> {
		isError: boolean;
	}
}

type tProps = {
	id: string;
	label: string;
	getOptionsFn: Function;
	keyValue: string;
	control: any;
	multi?: boolean;
	error: {
		isError: boolean;
		errorMessage: string;
	};
};

const SelectInput: FC<tProps> = ({
	id,
	label,
	control,
	getOptionsFn,
	keyValue,
	error,
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
		<StyledInputWrapper isError={error.isError}>
			<Font htmlFor={id} variant="label">
				{label}
			</Font>
			<Controller
				name={id}
				control={control}
				render={({ field }) => {
					const { onChange, value, onBlur } = field;
					return (
						<Select
							styles={customStyles}
							isError={error.isError}
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
			<Font
				variant="inputError"
				style={{ alignSelf: 'flex-end', height: '10px' }}
			>
				{error.isError ? error.errorMessage : ''}
			</Font>
		</StyledInputWrapper>
	);
};

export default SelectInput;
