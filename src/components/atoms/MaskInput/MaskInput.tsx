import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Font from '../Font';
import {
	StyledInnerWrapper,
	StyledInput,
	StyledWrapper
} from './MaskInput.style';

type tProps = {
	id: string;
	label: string;
	type?: string;
	register?: Function;
	fullWidth?: boolean;
	isDisabled?: boolean;
	value?: string;
	error?: {
		isError: boolean;
		errorMessage: string;
	};
};
type tMask = (string | RegExp)[];
const MaskInput: FC<tProps> = ({
	id,
	label,
	type = 'text',
	register,
	error,
	fullWidth = true,
	isDisabled = false,
	value
}) => {
	const { t } = useTranslation();
	const dateMask: tMask = [
		/\d/,
		/\d/,
		'/',
		/\d/,
		/\d/,
		'/',
		/\d/,
		/\d/,
		/\d/,
		/\d/
	];
	return (
		<StyledWrapper
			fullWidth={fullWidth}
			isError={error ? error.isError : false}
		>
			<Font htmlFor={id} variant="label">
				{label}
			</Font>
			<StyledInnerWrapper>
				<StyledInput
					id={id}
					mask={dateMask}
					placeholder="DD/MM/YYYY"
					type={type}
					{...(register ? register(id) : {})}
				/>
			</StyledInnerWrapper>
			{error && (
				<Font
					variant="inputError"
					style={{ alignSelf: 'flex-end', height: '10px' }}
				>
					{error.isError ? error.errorMessage : ''}
				</Font>
			)}
		</StyledWrapper>
	);
};

export default MaskInput;
