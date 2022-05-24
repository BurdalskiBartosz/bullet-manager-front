import Breadcrumbs from 'components/molecules/Breadcrumbs';
import SearchInput from 'components/molecules/SearchInput';
import { useAuth } from 'providers/AuthProvider';
import { FC } from 'react';
import { InnerWrapper, Wrapper } from './TopMenu.style';

type Props = {};

const TopMenu: FC<Props> = () => {
	const auth = useAuth();

	return (
		<Wrapper>
			<Breadcrumbs />
			<InnerWrapper>
				<SearchInput />
				<button onClick={auth.signOut}>Wyloguj się</button>
			</InnerWrapper>
		</Wrapper>
	);
};

export default TopMenu;
