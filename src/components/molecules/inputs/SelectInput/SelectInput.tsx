import { FC } from 'react';

type Props = {
	getOptionsFn: Function;
	keyValue: string;
};

const SelectInput: FC<Props> = ({ getOptionsFn, keyValue }) => {
	const { data } = getOptionsFn();
	return (
		<select>
			{data &&
				data.map((option: any) => {
					return (
						<option value={option.id} key={option.id}>
							{option[keyValue]}
						</option>
					);
				})}
		</select>
	);
};

export default SelectInput;
