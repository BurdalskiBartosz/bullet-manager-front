import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
	Input,
	Button,
	SelectInput,
	TextArea,
	CalendarInput
} from 'components';
import { FC, MutableRefObject, useRef } from 'react';
import { useAddTaskMutation, useGetTasksQuery } from 'store/api/task';
import { StyledForm } from 'styles/shared/global';

type tProps = {};

const validationSchema = yup.object().shape({
	title: yup.string().required(),
	description: yup.string().required().min(6),
	task: yup.string().required()
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

const AddTaskForm: FC<tProps> = () => {
	const ref = useRef() as MutableRefObject<HTMLDivElement>;
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
		// addTask(data);
	};

	return (
		<div ref={ref}>
			<StyledForm onSubmit={handleSubmit(test)}>
				<div>
					<label htmlFor="user">Użytkownik:</label>

					<select {...register('user')} name="user" id="user">
						<option value={1}>admin@gaill.com</option>
					</select>
				</div>
				<SelectInput
					id="task"
					label="task"
					control={control}
					keyValue="title"
					getOptionsFn={useGetTasksQuery}
					error={{
						isError: !!errors.task,
						errorMessage: 'Login or email validation message'
					}}
				/>
				<Input
					id="title"
					label="Nazwa zadania"
					register={register}
					error={{
						isError: !!errors.title,
						errorMessage: 'Login or email validation message'
					}}
				/>

				<TextArea
					id="description"
					label="Opis"
					register={register}
					error={{
						isError: !!errors.description,
						errorMessage: 'Password validation message'
					}}
				/>
				<CalendarInput
					id="plannedFinishDate"
					label="Planowana data ukończenia"
					control={control}
					refParent={ref}
					error={{
						isError: !!errors.description,
						errorMessage: 'Password validation message'
					}}
				/>
				<div>
					<label htmlFor="cars">Choose priority:</label>

					<select
						{...register('priority')}
						name="priority"
						id="priority"
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</div>
				<div>
					<label htmlFor="tags">Tags:</label>

					<select
						{...register('tags')}
						name="tags"
						id="tags"
						multiple
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</div>
				<Button>Login</Button>
			</StyledForm>
		</div>
	);
};

export default AddTaskForm;
