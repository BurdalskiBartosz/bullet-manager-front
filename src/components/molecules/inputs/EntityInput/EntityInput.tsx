import { FC, ReactNode, useState } from 'react';
import { useGetUserTasksQuery } from 'store/api/userTask';
import EntityModal from './_components/EntityModal';

type tProps = {
	id: string;
	label?: string;
	type?: string;
	register?: Function;
	fullWidth?: boolean;
	isDisabled?: boolean;
	children?: ReactNode | ReactNode[];
	error?: {
		isError: boolean;
		errorMessage: string;
	};
};

const EntityInput: FC<tProps> = ({ id, register, label }) => {
	const [isDataModalOpen, setIsDataModalOpen] = useState<boolean>(false);
	const data = 'useGetSmth';
	console.log(isDataModalOpen);

	return (
		<div>
			<button type="button" onClick={() => setIsDataModalOpen(true)}>
				{label}
			</button>
			<input id={id} {...(register ? register(id) : {})} hidden />
			{isDataModalOpen && (
				<EntityModal useGetFunction={useGetUserTasksQuery} />
			)}
		</div>
	);
};

export default EntityInput;
