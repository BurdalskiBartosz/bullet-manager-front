import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	Button,
	SelectInput,
	TextArea,
	CalendarInput,
	InputBase
} from 'components';
import { FC } from 'react';
import { useAddTaskMutation } from 'store/api/task';
import { StyledForm } from 'styles/shared/global';

type tProps = {};

const validationSchema = yup.object().shape({
	description: yup.string().required().min(6)
});

type tTaskData = {
	user: string;
	title: string;
	task: string;
	description: string;
	plannedFinishDate: Date;
	priority: string;
	tags: string[];
};

const AddUserTaskForm: FC<tProps> = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<tTaskData>({
		resolver: yupResolver(validationSchema)
	});

	const [addTask] = useAddTaskMutation();

	const test = (data: any) => {
		console.log(data);
		addTask(data);
	};

	return (
		<div>
			<StyledForm onSubmit={handleSubmit(test)}>
				<InputBase
					id="title"
					label="Title"
					register={register}
					error={{
						isError: !!errors.title,
						errorMessage: 'Login or email validation message'
					}}
				/>
				<TextArea
					inputBase={{
						id: 'description',
						label: 'Description',
						register: register,
						error: {
							isError: !!errors.description,
							errorMessage: 'Password validation message'
						}
					}}
				/>
				<CalendarInput
					control={control}
					inputBase={{
						id: 'plannedFinishDate',
						label: 'Planowana data ukończenia',
						value: new Date(),
						fullWidth: false,
						error: {
							isError: !!errors.description,
							errorMessage: 'Password validation message'
						}
					}}
				/>

				<Button>Login</Button>
			</StyledForm>
		</div>
	);
};

export default AddUserTaskForm;
