import InputBase from 'components/atoms/InputBase';
import { tInputBase } from 'components/atoms/InputBase/InputBase';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import Select, { GroupBase, OnChangeValue } from 'react-select';
import { customStyles } from './SelectInput.style';
import CreatableSelect from 'react-select/creatable';
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
	label: string | number;
	value: string | number;
}[];

type SelectOptions = EntitySelect | CustomSelect;

type tProps = {
	control: any;
	multi?: boolean;
	inputBase: tInputBase;
	selectOptions: SelectOptions;
	creatable?: boolean;
	onChangeHandler?: (arg0: any) => any;
	customValue?: any;
};

type SelectData = {
	label: string | number;
	value: string | number;
} | null;

const SelectInput: FC<tProps> = ({
	inputBase,
	control,
	multi = false,
	selectOptions,
	creatable,
	onChangeHandler,
	customValue
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
		selectData = selectOptions.map(({ label, value }) => {
			return {
				label,
				value
			};
		});
	}
	// To change "typeof multi"
	const handleChange = (data: OnChangeValue<SelectData, typeof multi>) => {
		if (!data) return;
		if ('value' in data) {
			return data?.value;
		} else if (multi) {
			return data?.map((option: SelectData) => {
				return option?.value;
			});
		}
	};

	const setValue = (value: any) => {
		if (multi) {
			return selectData.filter((option: SelectData) =>
				value?.includes(option?.value)
			);
		}
		return selectData.find((option: SelectData) => option?.value === value);
	};

	return (
		<InputBase {...inputBase}>
			<Controller
				name={id}
				control={control}
				render={({ field }) => {
					const { onChange, value, onBlur } = field;
					return creatable ? (
						// ToDo Change it so that there is no conditional if possible
						// <SelectComponent {...props}/>
						<CreatableSelect
							inputId={id}
							name={id}
							isMulti={multi}
							onChange={(data) => onChange(handleChange(data))}
							options={selectData}
							isError={error.isError}
							styles={customStyles}
							onBlur={onBlur}
						/>
					) : (
						<Select
							inputId={id}
							name={id}
							isMulti={multi}
							onChange={
								// TODO Change into one handler
								onChangeHandler
									? (data) => onChange(onChangeHandler(data))
									: (data) => onChange(handleChange(data))
							}
							options={selectData}
							isError={error.isError}
							styles={customStyles}
							onBlur={onBlur}
							value={
								// TODO Change into one handler
								customValue
									? customValue(value)
									: setValue(value)
							}
						/>
					);
				}}
			/>
		</InputBase>
	);
};

export default SelectInput;
