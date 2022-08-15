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

type EntitySelect = {
	getOptionsFn: Function;
	keyValue: string;
};

type CustomSelect = {
	value: string;
	key: string;
}[];

type SelectOptions = EntitySelect | CustomSelect;

type tProps = {
	control: any;
	multi?: boolean;
	inputBase: tInputBase;
	selectOptions: SelectOptions;
};

type SelectData = {
	label: string | number;
	value: string | number;
};

const SelectInput: FC<tProps> = ({
	inputBase,
	control,
	multi = false,
	selectOptions
}) => {
	const { id, error } = inputBase;
	let selectData: Array<SelectData> = [];

	if ('getOptionsFn' in selectOptions) {
		const { getOptionsFn, keyValue } = selectOptions;
		const { data } = getOptionsFn();
		selectData = data.map((option: any) => {
			return {
				label: option[keyValue],
				value: option.id
			};
		});
	} else {
		selectData = selectOptions.map(({ value, key }) => {
			return {
				label: value,
				value: key
			};
		});
	}

	const handleChange = (data: any) => {
		return multi
			? data?.map((option: SelectData) => option.value)
			: data?.value;
	};

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
							options={selectData}
							isMulti={multi}
							onBlur={onBlur}
							onChange={(data) => onChange(handleChange(data))}
							value={
								multi
									? selectData.filter((option: SelectData) =>
											value?.includes(option.value)
									  )
									: selectData.find(
											(c: SelectData) => c.value === value
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
