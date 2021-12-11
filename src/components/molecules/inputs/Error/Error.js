import { Box } from '@mui/system';

const Error = ({ error }) => {
	return (
		<Box
			sx={{
				position: 'absolute',
				fontSize: 12,
				color: 'primary.danger'
			}}
		>
			{error?.isError && <span>{error.message}</span>}
		</Box>
	);
};

export default Error;
