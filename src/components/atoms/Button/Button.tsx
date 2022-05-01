import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton } from './Button.styles';

type Props = {
	children: string;
	fn?: Function;
};

const Button: FC<Props> = ({ children, fn = () => {} }) => {
	const { t } = useTranslation();
	return <StyledButton onClick={() => fn()}>{t(children)}</StyledButton>;
};
export default Button;
