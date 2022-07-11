import Font from 'components/atoms/Font';
import { FC } from 'react';
import { StyledTextArea, StyledWrapper } from './TextArea.style';

type tProps = {
	id: string;
	label: string;
	register: Function;
	error: {
		isError: boolean;
		errorMessage: string;
	};
};

const TextArea: FC<tProps> = ({ id, label, register, error }) => {
	return (
		<StyledWrapper isError={error.isError}>
			<Font htmlFor={id} variant="label">
				{label}
			</Font>
			<div>
				<StyledTextArea id={id} {...register(id)} />
			</div>
			<Font
				variant="inputError"
				style={{ alignSelf: 'flex-end', height: '10px' }}
			>
				{error.isError ? error.errorMessage : ''}
			</Font>
		</StyledWrapper>
	);
};

export default TextArea;
