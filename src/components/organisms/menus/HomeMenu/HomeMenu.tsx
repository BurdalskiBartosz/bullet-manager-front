import { FC } from 'react';
import { StyledHomeLink, StyledNav, StyledUl } from './HomeMenu.style';

type tProps = {};

const HomeMenu: FC<tProps> = (props: tProps) => {
	return (
		<StyledNav>
			<StyledUl>
				<li>
					<StyledHomeLink to="login">Login</StyledHomeLink>
				</li>
				<li>
					<StyledHomeLink to="registration">
						Rejestracja
					</StyledHomeLink>
				</li>
			</StyledUl>
		</StyledNav>
	);
};

export default HomeMenu;
