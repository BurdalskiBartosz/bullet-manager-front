import { FC } from 'react';
import Font from '../Font';

type Props = {
	id: string;
	label: string;
	type?: string;
	name?: string;
	register: Function;
	error: {
		isError: boolean;
		errorMessage: string;
	};
};

const Input: FC<Props> = ({
	id,
	label,
	name,
	type = 'text',
	register,
	error
}) => {
	return (
		<div>
			<Font htmlFor={id} component="label">
				{label}
			</Font>
			<input type={type} id={id} {...register(id)} />
			{error.isError && <Font>{error.errorMessage}</Font>}
		</div>
	);
};

export default Input;
