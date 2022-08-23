import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton, tButtonColors } from './Button.style';

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
	const textContent = t(children);
	return (
		<StyledButton colorType={colorType} onClick={() => fn()}>
			{textContent}
		</StyledButton>
	);
};
export default Button;
