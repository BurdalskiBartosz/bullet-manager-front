import { useEffect, RefObject, EventHandler } from 'react';

const useOnClickOutside = (
	ref: RefObject<HTMLElement>,
	handler: EventHandler<any>
) => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			console.log(ref.current);
			console.log(event.target);
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			handler(event);
		};
		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
};

export default useOnClickOutside;
