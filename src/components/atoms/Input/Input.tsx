import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Font from '../Font';
import { tIconNames } from '../Icon/Icon';
import {
	StyledIconButton,
	StyledInnerWrapper,
	StyledInput,
	StyledWrapper
} from './Input.style';

type tProps = {
	id: string;
	label: string;
	type?: string;
	register?: Function;
	fullWidth?: boolean;
	isDisabled?: boolean;
	customIcon?: {
		iconName: tIconNames;
		fn: Function;
	};
	value?: string;
	error?: {
		isError: boolean;
		errorMessage: string;
	};
};

const Input: FC<tProps> = ({
	id,
	label,
	type = 'text',
	register,
	error,
	fullWidth = true,
	isDisabled = false,
	value,
	customIcon
}) => {
	const { t } = useTranslation();
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	const showPassword = () => {
		if (isPasswordVisible) setIsPasswordVisible(false);
		else setIsPasswordVisible(true);
	};
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
					type={
						isPasswordVisible && type === 'password' ? 'text' : type
					}
					value={value}
					disabled={isDisabled}
					placeholder={t(`${label} placeholder`)}
					{...(register ? register(id) : {})}
				/>
				{type === 'password' && (
					<StyledIconButton
						iconName={
							isPasswordVisible ? 'show_password' : 'password'
						}
						fn={showPassword}
					/>
				)}
				{customIcon && (
					<StyledIconButton
						iconName={customIcon.iconName}
						fn={customIcon.fn}
					/>
				)}
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

export default Input;
