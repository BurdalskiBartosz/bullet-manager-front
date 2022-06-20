import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input, Button } from 'components';
import { FC } from 'react';

type Props = {};

const validationSchema = yup.object().shape({
	title: yup.string().required(),
	description: yup.string().required().min(6)
});

type tTaskData = {
	title: string;
	description: string;
	date: Date;
};

const AddTaskForm: FC<Props> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<tTaskData>({
		resolver: yupResolver(validationSchema)
	});

	const test = (data: any) => {
		console.log(new Date(data.date));
	};

	return (
		<div>
			<form onSubmit={handleSubmit(test)}>
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
					label="Password input"
					register={register}
					error={{
						isError: !!errors.description,
						errorMessage: 'Password validation message'
					}}
				/>
				<input {...register('date')} type="date" />

				<Button>Login</Button>
			</form>
		</div>
	);
};

export default AddTaskForm;
