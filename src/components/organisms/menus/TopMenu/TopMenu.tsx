import Breadcrumbs from 'components/molecules/Breadcrumbs';
import { useAuth } from 'providers/AuthProvider';
import { FC } from 'react';
import { Wrapper } from './TopMenu.style';

type Props = {};

const TopMenu: FC<Props> = () => {
	const auth = useAuth();

	return (
		<Wrapper>
			<Breadcrumbs />
			<button onClick={auth.signOut}>Wyloguj się</button>
		</Wrapper>
	);
};

export default TopMenu;
