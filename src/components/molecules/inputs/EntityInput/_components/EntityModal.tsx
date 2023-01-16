import { FC } from 'react';

type tProps = {
	useGetFunction: Function;
};

const EntityModal: FC<tProps> = ({ useGetFunction }) => {
	const { isLoading, data } = useGetFunction();
	return <div></div>;
};

export default EntityModal;
