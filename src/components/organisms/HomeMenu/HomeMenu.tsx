import { FC } from 'react';
import { StyledHomeLink, StyledNav, StyledUl } from './HomeMenu.style';

type Props = {};

const HomeMenu: FC<Props> = (props: Props) => {
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
