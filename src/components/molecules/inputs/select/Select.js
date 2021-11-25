import {
	Select as MuiSelect,
	FormControl,
	MenuItem,
	InputLabel,
	Box
} from '@mui/material';
import { Controller } from 'react-hook-form';

const Select = ({
	name,
	label,
	control,
	rules = { required: true },
	error = undefined,
	defaultValue,
	...rest
}) => {
	return (
		<Box sx={{ mb: 2.5 }}>
			<Controller
				name={name}
				control={control}
				rules={rules}
				defaultValue="DAILY"
				render={({ field }) => (
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">
							{label}
						</InputLabel>
						<MuiSelect
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label={label}
							value="DAILY"
							error={error?.isError ? true : false}
							{...field}
							{...rest}
						>
							<MenuItem value={'DAILY'}>Dzienne</MenuItem>
							<MenuItem value={'WEEKLY'}>Tygodniowe</MenuItem>
							<MenuItem value={'MONTHLY'}>Miesięczne</MenuItem>
						</MuiSelect>
					</FormControl>
				)}
			/>
			<Box
				sx={{
					position: 'absolute',
					fontSize: 12,
					color: 'primary.danger'
				}}
			>
				{error?.isError && <span>{error.message}</span>}
			</Box>
		</Box>
	);
};

export default Select;

// const [type, setType] = useState('DAILY');
// const handleChange = (event) => {
// 	setType(event.target.value);
// };
// return (
// 	<Box sx={{ mb: 2.5, width: '100%', maxWidth: '330px' }}>
// <FormControl fullWidth>
// 	<InputLabel id="demo-simple-select-label">
// 		Typ zadania
// 	</InputLabel>
// 	<MuiSelect
// 		labelId="demo-simple-select-label"
// 		id="demo-simple-select"
// 		label="Typ zadania"
// 		// value={type}
// 		// onChange={handleChange}
// 	>
// 		<MenuItem value={'DAILY'}>Dzienne</MenuItem>
// 		<MenuItem value={'WEEKLY'}>Tygodniowe</MenuItem>
// 		<MenuItem value={'MONTHLY'}>Miesięczne</MenuItem>
// 	</MuiSelect>
// 		</FormControl>
// 	</Box>
