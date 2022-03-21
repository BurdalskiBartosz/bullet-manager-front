import PropTypes from 'prop-types';
import { TextField, useTheme } from '@mui/material';
import { Controller } from 'react-hook-form';
import InputWrapper from '../InputWrapper/InputWrapper';

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
		<InputWrapper error={error}>
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
							'aria-labelledby': name,
							style: {
								boxShadow: `0 0 0 1000px ${theme.palette.primary.dark} inset`
							}
						}}
						{...field}
						{...rest}
					/>
				)}
			/>
		</InputWrapper>
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
