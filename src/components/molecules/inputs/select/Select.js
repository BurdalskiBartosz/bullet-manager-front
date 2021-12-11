import {
	Select as MuiSelect,
	FormControl,
	MenuItem,
	InputLabel
} from '@mui/material';
import { Controller } from 'react-hook-form';
import InputWrapper from '../InputWrapper/InputWrapper';

const Select = ({
	name,
	label,
	control,
	rules = { required: true },
	error = undefined,
	options,
	...rest
}) => {
	return (
		<InputWrapper error={error}>
			<Controller
				name={name}
				control={control}
				rules={rules}
				defaultValue={options[0].key}
				render={({ field }) => (
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">
							{label}
						</InputLabel>
						<MuiSelect
							labelId="demo-simple-select-label"
							id={name}
							label={label}
							value={options[0].key}
							error={error?.isError ? true : false}
							{...field}
							{...rest}
						>
							{options.map((option) => (
								<MenuItem key={option.key} value={option.key}>
									{option.value}
								</MenuItem>
							))}
						</MuiSelect>
					</FormControl>
				)}
			/>
		</InputWrapper>
	);
};

export default Select;
