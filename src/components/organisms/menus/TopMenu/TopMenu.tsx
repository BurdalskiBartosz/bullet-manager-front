import { SearchInput, Breadcrumbs } from 'components';
import Button from 'components/atoms/Button';
import Font from 'components/atoms/Font';
import Icon from 'components/atoms/Icon';
import Dropdown from 'components/molecules/Dropdown';
import ListLink from 'components/molecules/ListLink';
import { useAuth } from 'providers/AuthProvider';
import { FC } from 'react';
import {
	DropdownTop,
	FormDateWrapper,
	InnerWrapper,
	StyledUl,
	Wrapper
} from './TopMenu.style';

type Props = {};

const TopMenu: FC<Props> = () => {
	const auth = useAuth();

	return (
		<Wrapper>
			<Breadcrumbs />
			<InnerWrapper>
				<FormDateWrapper>
					<Font
						style={{
							color: 'white',
							marginRight: '2rem',
							fontWeight: 'bold',
							fontSize: '1.8rem'
						}}
					>
						02/06/2022
					</Font>
					<form>
						<SearchInput />
					</form>
				</FormDateWrapper>
				<Dropdown
					dropdownTop={
						<DropdownTop>
							<Icon
								iconName="add"
								width="30"
								height="30"
								fill="#FFF"
							/>
						</DropdownTop>
					}
					dropdownBody={
						<>
							<Font
								style={{ padding: '1rem 0 0 1rem' }}
								component="h3"
							>
								Szybkie dodawanie
							</Font>
							<StyledUl>
								<ListLink
									iconName="task"
									link="/task"
									text="Zadanie"
								/>
								<ListLink
									iconName="note"
									link="/note"
									text="Notatka"
								/>
								<ListLink
									iconName="list"
									link="/list"
									text="Lista"
								/>
								<ListLink
									iconName="schedule"
									link="/schedule"
									text="Harmonogram"
								/>
								<ListLink
									iconName="goal"
									link="/goal"
									text="Cel"
								/>
								<ListLink
									iconName="project"
									link="/project"
									text="Projekt"
								/>
							</StyledUl>
						</>
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
						<StyledUl>
							<ListLink
								iconName="account"
								link="/account"
								text="Moje konto"
							/>
							<ListLink
								iconName="settings"
								link="/settings"
								text="Ustawienia"
							/>
							<ListLink
								iconName="logout"
								text="Wyloguj się"
								fn={auth.signOut}
							/>
						</StyledUl>
					}
				/>
			</InnerWrapper>
		</Wrapper>
	);
};

export default TopMenu;
