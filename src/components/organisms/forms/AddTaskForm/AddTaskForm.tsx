import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input, Button } from 'components';
import { FC } from 'react';
import { useAddTaskMutation } from 'store/api/task';

type Props = {};

const validationSchema = yup.object().shape({
	title: yup.string().required(),
	description: yup.string().required().min(6)
});

type tTaskData = {
	user: string;
	title: string;
	description: string;
	plannedFinishDate: Date;
	priority: string;
	tags: string[];
};

const AddTaskForm: FC<Props> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<tTaskData>({
		resolver: yupResolver(validationSchema)
	});

	const [addTask] = useAddTaskMutation();

	const test = (data: any) => {
		console.log(new Date(data.plannedFinishDate));
		console.log(data);

		addTask(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(test)}>
				<div>
					<label htmlFor="user">Użytkownik:</label>

					<select {...register('user')} name="user" id="user">
						<option value={1}>admin@gaill.com</option>
					</select>
				</div>
				<Input
					id="title"
					label="Nazwa zadania"
					register={register}
					error={{
						isError: !!errors.title,
						errorMessage: 'Login or email validation message'
					}}
				/>
				<Input
					id="description"
					label="Opis"
					type="form"
					register={register}
					error={{
						isError: !!errors.description,
						errorMessage: 'Password validation message'
					}}
				/>
				<div>
					<label htmlFor="plannedFinishDate">
						Planowana data ukończenia
					</label>
					<input
						id="plannedFinishDate"
						{...register('plannedFinishDate')}
						type="date"
					/>
				</div>
				<div>
					<label htmlFor="cars">Choose a car:</label>

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
			</form>
		</div>
	);
};

export default AddTaskForm;
