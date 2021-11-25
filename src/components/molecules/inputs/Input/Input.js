import PropTypes from 'prop-types';
import { TextField, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { Controller } from 'react-hook-form';

const Input = ({
	name,
	label,
	control,
	variant = 'outlined',
	rules = { required: true },
	type = 'text',
	error = undefined,
	defaultValue = '',
	...rest
}) => {
	const theme = useTheme();

	return (
		<Box sx={{ mb: 2.5 }}>
			<Controller
				name={name}
				control={control}
				rules={rules}
				defaultValue={defaultValue}
				render={({ field }) => (
					<TextField
						sx={{ width: '100%', maxWidth: '330px' }}
						label={label}
						error={error?.isError ? true : false}
						type={type}
						variant={variant}
						inputProps={{
							style: {
								boxShadow: `0 0 0 1000px ${theme.palette.primary.dark} inset`
							}
						}}
						{...field}
						{...rest}
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
				{error?.isError && <span>{error.message}</span>}
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
