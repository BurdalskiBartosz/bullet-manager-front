import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import Font from '../Font';
import { tIconNames } from '../Icon/Icon';
import {
	StyledIconButton,
	StyledInnerWrapper,
	StyledInput,
	StyledWrapper
} from './InputBase.style';

export type tInputBase = {
	id: string;
	label?: string;
	type?: string;
	register?: Function;
	fullWidth?: boolean;
	isDisabled?: boolean;
	as?: 'textarea';
	children?: ReactNode | ReactNode[];
	value?: any;
	styleForm?: 'FORM' | 'BASE';
	icon?: {
		iconName: tIconNames;
		fn: () => void;
	};
	error?: {
		isError: boolean;
		errorMessage: string;
	};
};

const InputBase: FC<tInputBase> = ({
	id,
	label,
	type = 'text',
	styleForm = 'BASE',
	register,
	error,
	isDisabled,
	as,
	icon,
	children,
	value,
	fullWidth = true
}) => {
	const { t } = useTranslation();

	return (
		<StyledWrapper
			fullWidth={fullWidth}
			isError={error?.isError}
			styleForm={styleForm}
			data-testid="input-base-component"
		>
			{label && (
				<Font htmlFor={id} variant="label">
					{label}
				</Font>
			)}
			<StyledInnerWrapper className="helper-selector">
				{children ? (
					children
				) : (
					<>
						<StyledInput
							className="input-helper-selector"
							as={as}
							id={id}
							value={value}
							type={type}
							disabled={isDisabled}
							placeholder={t(`${label} placeholder`)}
							fullWidth={fullWidth}
							{...(register ? register(id) : {})}
						/>
					</>
				)}
				{icon && (
					<StyledIconButton iconName={icon.iconName} fn={icon.fn} />
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

export default InputBase;
