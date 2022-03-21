import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import {
	InnerWrapper,
	Wrapper
} from '../../styles/shared/AuthTemplates.styles';

const AuthorizationTemplate = () => {
	const { t } = useTranslation();
	return (
		<Wrapper>
			<InnerWrapper>
				<Link to="/">LOGO</Link>
				<Outlet />
			</InnerWrapper>
		</Wrapper>
	);
};

export default AuthorizationTemplate;
