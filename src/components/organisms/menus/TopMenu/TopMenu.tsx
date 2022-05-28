import { SearchInput, Breadcrumbs } from 'components';
import Font from 'components/atoms/Font';
import Icon from 'components/atoms/Icon';
import Dropdown from 'components/molecules/Dropdown';
import { useAuth } from 'providers/AuthProvider';
import { FC } from 'react';
import { DropdownTop, InnerWrapper, Wrapper } from './TopMenu.style';

type Props = {};

const TopMenu: FC<Props> = () => {
	const auth = useAuth();

	return (
		<Wrapper>
			<Breadcrumbs />
			<InnerWrapper>
				<form>
					<SearchInput />
				</form>
				<Dropdown
					dropdownTop={
						<DropdownTop>
							<Icon
								iconName="add"
								width="15"
								height="15"
								fill="#FFF"
							/>
						</DropdownTop>
					}
					dropdownBody={
						<ul>
							<li>Dodaj zadanie</li>
							<li>Dodaj notatkę</li>
							<li>Dodaj projekt</li>
						</ul>
					}
				/>
				<Dropdown
					dropdownTop={
						<DropdownTop backgroundColor="#6B48CE" border>
							<Font
								style={{
									color: 'white',
									marginLeft: '-2px',
									marginTop: '2px'
								}}
							>
								BB
							</Font>
						</DropdownTop>
					}
					dropdownBody={
						<>
							<button onClick={auth.signOut}>Wyloguj się</button>
							<div>HEJKA</div>
						</>
					}
				/>
			</InnerWrapper>
		</Wrapper>
	);
};

export default TopMenu;
