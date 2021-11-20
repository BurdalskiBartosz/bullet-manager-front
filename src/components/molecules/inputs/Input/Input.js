import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Controller } from 'react-hook-form';

const Input = ({
	name,
	label,
	control,
	variant = 'outlined',
	rules = { required: true },
	type = 'text',
	error = undefined
}) => {
	return (
		<Box sx={{ mb: 2 }}>
			<Controller
				name={name}
				control={control}
				rules={rules}
				defaultValue=""
				render={({ field }) => (
					<TextField
						sx={{ width: '330px' }}
						label={label}
						type={type}
						variant={variant}
						{...field}
					/>
				)}
			/>
			<Box
				sx={{
					position: 'absolute',
					fontSize: 12,
					color: 'primary.danger'
				}}
			>
				{error.isError && <span>{error.message}</span>}
			</Box>
		</Box>
	);
};

Input.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	control: PropTypes.object,
	variant: PropTypes.string,
	rules: PropTypes.object,
	type: PropTypes.string,
	error: PropTypes.object
};

export default Input;
