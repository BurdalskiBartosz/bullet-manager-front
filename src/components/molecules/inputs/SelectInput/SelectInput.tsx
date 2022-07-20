import InputBase from 'components/atoms/InputBase';
import { tInputBase } from 'components/atoms/InputBase/InputBase';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import Select, { GroupBase } from 'react-select';
import { customStyles } from './SelectInput.style';
declare module 'react-select/dist/declarations/src/Select' {
	export interface Props<
		/* eslint-disable @typescript-eslint/no-unused-vars */
		Option,
		IsMulti extends boolean,
		Group extends GroupBase<Option>
	> {
		isError: boolean;
	}
}

type tProps = {
	getOptionsFn: Function;
	keyValue: string;
	control: any;
	multi?: boolean;
	inputBase: tInputBase;
};

const SelectInput: FC<tProps> = ({
	inputBase,
	control,
	getOptionsFn,
	keyValue,
	multi = false
}) => {
	const { data } = getOptionsFn();
	const { id, error } = inputBase;
	const selectOptions = data.map((option: any) => {
		return {
			label: option[keyValue],
			value: option.id
		};
	});

	return (
		<InputBase {...inputBase}>
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
		</InputBase>
	);
};

export default SelectInput;
