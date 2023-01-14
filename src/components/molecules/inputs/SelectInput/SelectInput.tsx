import InputBase from 'components/atoms/InputBase';
import { tInputBase } from 'components/atoms/InputBase/InputBase';
import { Children, FC } from 'react';
import { Controller } from 'react-hook-form';
import Select, {
	GroupBase,
	OnChangeValue,
	components,
	ValueContainerProps
} from 'react-select';
import { customStyles } from './SelectInput.style';
import CreatableSelect from 'react-select/creatable';

const { ValueContainer, Placeholder } = components;
declare module 'react-select/dist/declarations/src/Select' {
	export interface Props<
		/* eslint-disable @typescript-eslint/no-unused-vars */
		Option,
		IsMulti extends boolean,
		Group extends GroupBase<Option>
	> {
		isError: boolean | undefined;
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
	clearable?: boolean;
	inputBase: tInputBase;
	selectOptions: SelectOptions;
	creatable?: boolean;
};

type SelectData = {
	label: string | number;
	value: string | number;
} | null;

const CustomValueContainer = ({
	children,
	...props
}: ValueContainerProps<SelectData>) => {
	return (
		<ValueContainer {...props}>
			<Placeholder
				innerProps={{}}
				{...props}
				isFocused={props.selectProps.menuIsOpen}
			>
				{props.selectProps.placeholder}
			</Placeholder>
			{Children.map(children, (child) => (child ? child : null))}
		</ValueContainer>
	);
};
const CustomPlaceholder = () => <div></div>;

const SelectInput: FC<tProps> = ({
	inputBase,
	control,
	multi = false,
	selectOptions,
	creatable,
	clearable = false
}) => {
	const { id, error } = inputBase;
	let selectData: Array<SelectData> = [];

	if ('getOptionsFn' in selectOptions) {
		const { getOptionsFn, keyValue } = selectOptions;
		const { data, isLoading } = getOptionsFn();
		if (!isLoading) {
			selectData = data.map((option: any) => {
				return {
					label: option[keyValue],
					value: option.id
				};
			});
		}
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
		<Controller
			name={id}
			control={control}
			render={({ field }) => {
				const { onChange, value, onBlur } = field;
				const selectProps = {
					inputId: id,
					name: id,
					isMulti: multi,
					placeholder: creatable
						? 'Wybierz lub dodaj nowe...'
						: 'Wybierz...',
					components: {
						ValueContainer: CustomValueContainer,
						Placeholder: CustomPlaceholder
					},
					styles: customStyles,
					isClearable: clearable,
					isError: error?.isError,
					options: selectData,
					onBlur
				};
				return creatable ? (
					// ToDo Change it so that there is no conditional if possible
					// <SelectComponent {...props}/>
					<CreatableSelect
						{...selectProps}
						onChange={(data) => onChange(handleChange(data))}
						value={setValue(value)}
					/>
				) : (
					<Select
						{...selectProps}
						onChange={(data) => onChange(handleChange(data))}
						value={setValue(value)}
					/>
				);
			}}
		/>
	);
};

export default SelectInput;
