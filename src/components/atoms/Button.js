import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = React.forwardRef(({ children, variant, ...rest }, ref) => {
	return (
		<MuiButton ref={ref} variant={variant} {...rest}>
			{children}
		</MuiButton>
	);
});

Button.displayName = 'Button';

export default Button;
