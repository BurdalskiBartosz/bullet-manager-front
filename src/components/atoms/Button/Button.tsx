import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton, tButtonColors } from './Button.styles';

type Props = {
	children: string;
	fn?: Function;
	colorType?: tButtonColors;
};

const Button: FC<Props> = ({
	children,
	colorType = 'primary',
	fn = () => {}
}) => {
	const { t } = useTranslation();
	return (
		<StyledButton colorType={colorType} onClick={() => fn()}>
			{t(children)}
		</StyledButton>
	);
};
export default Button;
