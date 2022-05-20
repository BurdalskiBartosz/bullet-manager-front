import { Link, Outlet } from 'react-router-dom';
import {
	StyledInnerWrapper,
	StyledLogo,
	StyledWrapper
} from './AuthorizationTemplate.styles';
import logo from 'assets/images/bullet-manager-logo.png';

const AuthorizationTemplate = () => {
	return (
		<StyledWrapper>
			<StyledInnerWrapper>
				<Link to="/">
					<StyledLogo src={logo} alt="" title="" />
				</Link>
				<Outlet />
			</StyledInnerWrapper>
		</StyledWrapper>
	);
};

export default AuthorizationTemplate;
