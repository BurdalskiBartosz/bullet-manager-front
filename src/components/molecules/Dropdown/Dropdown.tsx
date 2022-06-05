import useOnClickOutside from 'hooks/useOnClickOutside';
import {
	FC,
	ReactNode,
	useState,
	MutableRefObject,
	useRef,
	useCallback
} from 'react';
import { DropdownBody, DropdownButton, Wrapper } from './Dropdown.style';

type Props = {
	dropdownTop: ReactNode;
	dropdownBody: ReactNode;
};

const Dropdown: FC<Props> = ({ dropdownTop, dropdownBody }) => {
	const ref = useRef() as MutableRefObject<HTMLDivElement>;
	const [isActive, setIsActive] = useState<boolean>(false);

	useOnClickOutside(
		ref,
		useCallback(() => setIsActive(false), [setIsActive])
	);

	return (
		<Wrapper ref={ref}>
			<DropdownButton onClick={() => setIsActive(!isActive)}>
				{dropdownTop}
			</DropdownButton>
			{isActive && <DropdownBody>{dropdownBody}</DropdownBody>}
		</Wrapper>
	);
};

export default Dropdown;
