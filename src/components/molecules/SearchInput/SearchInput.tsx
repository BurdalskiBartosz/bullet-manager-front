import { FC } from 'react';
import { StyledIcon, StyledInput, Wrapper } from './SearchInput.style';

type Props = {};

const SearchInput: FC<Props> = () => {
	return (
		<Wrapper>
			<StyledIcon iconName="magnifier" width="18.5" height="18.5" />
			<StyledInput type="text" placeholder="Wyszukaj" />
		</Wrapper>
	);
};

export default SearchInput;
