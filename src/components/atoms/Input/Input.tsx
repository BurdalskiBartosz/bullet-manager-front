import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Font from '../Font';
import {
	StyledIconButton,
	StyledInnerWrapper,
	StyledInput,
	StyledWrapper
} from './Input.styles';

type Props = {
	id: string;
	label: string;
	type?: string;
	register: Function;
	error: {
		isError: boolean;
		errorMessage: string;
	};
};

const Input: FC<Props> = ({ id, label, type = 'text', register, error }) => {
	const { t } = useTranslation();
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	const showPassword = () => {
		if (isPasswordVisible) setIsPasswordVisible(false);
		else setIsPasswordVisible(true);
	};
	return (
		<StyledWrapper isError={error.isError}>
			<Font htmlFor={id} variant="label">
				{label}
			</Font>
			<StyledInnerWrapper>
				<StyledInput
					id={id}
					type={
						isPasswordVisible && type === 'password' ? 'text' : type
					}
					placeholder={t(`${label} placeholder`)}
					{...register(id)}
				/>
				{type === 'password' && (
					<StyledIconButton
						icon={isPasswordVisible ? 'show_password' : 'password'}
						fn={showPassword}
					/>
				)}
			</StyledInnerWrapper>
			<Font
				variant="inputError"
				style={{ alignSelf: 'flex-end', height: '10px' }}
			>
				{error.isError ? error.errorMessage : ''}
			</Font>
		</StyledWrapper>
	);
};

export default Input;
