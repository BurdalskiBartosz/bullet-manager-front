import { FC } from 'react';
import { LoaderWrapper, Wrapper } from './Loader.style';

type tProps = {};

const SearchInput: FC<tProps> = () => {
	return (
		<Wrapper>
			<LoaderWrapper className="lds-default">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</LoaderWrapper>
		</Wrapper>
	);
};

export default SearchInput;
