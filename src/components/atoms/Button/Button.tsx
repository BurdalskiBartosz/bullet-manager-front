import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton, tButtonColors } from './Button.styles';

type tProps = {
	children: string;
	fn?: Function;
	colorType?: tButtonColors;
};

const Button: FC<tProps> = ({
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
