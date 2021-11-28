import { Box } from '@mui/system';
import Error from '../Error/Error';

const InputWrapper = ({ error = undefined, children }) => {
	return (
		<Box sx={{ mb: 2.5 }}>
			{children}
			<Error error={error} />
		</Box>
	);
};

export default InputWrapper;
