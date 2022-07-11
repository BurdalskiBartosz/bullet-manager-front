import {
	FC,
	MutableRefObject,
	ReactNode,
	useCallback,
	useEffect,
	useRef
} from 'react';
import ReactDOM from 'react-dom';
import { IconButton, Font } from 'components';
import { ModalContent, ModalTop, ModalWrapper } from './Modal.style';
import useOnClickOutside from 'hooks/useOnClickOutside';

type tProps = {
	children: ReactNode[] | ReactNode;
	handleClose: Function;
	header: string;
};

const modalWrapper = document.querySelector('#modal-wrapper');

const Modal: FC<tProps> = ({ handleClose, header, children }) => {
	const ref = useRef() as MutableRefObject<HTMLDivElement>;

	const modalNode = document.createElement('div');

	useEffect(() => {
		modalWrapper?.appendChild(modalNode);
		return () => {
			modalWrapper?.removeChild(modalNode);
		};
	});

	useOnClickOutside(
		ref,
		useCallback(() => handleClose(), [handleClose])
	);

	return ReactDOM.createPortal(
		<ModalWrapper>
			<ModalContent ref={ref}>
				<ModalTop>
					<IconButton
						width="24px"
						height="24px"
						iconName="close"
						fn={handleClose}
					/>
					<Font
						style={{
							fontSize: '2rem',
							textTransform: 'uppercase',
							fontWeight: 'bold'
						}}
					>
						{header}
					</Font>
				</ModalTop>
				{children}
			</ModalContent>
		</ModalWrapper>,
		modalNode
	);
};

export default Modal;
