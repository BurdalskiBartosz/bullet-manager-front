import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	Button,
	SelectInput,
	CalendarInput,
	TextArea,
	InputBase
} from 'components';
import { FC } from 'react';
import { useAddTaskMutation } from 'store/api/task';
import { Wrapper, InnerFormWrapper, StyledForm } from './AddUserTaskForm.style';

type tProps = {};

const validationSchema = yup.object().shape({
	title: yup.string().required().min(6)
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
		<Wrapper>
			<StyledForm onSubmit={handleSubmit(test)}>
				<InnerFormWrapper>
					<InputBase
						id="title"
						label="UserTask Title"
						register={register}
						fullWidth={false}
						error={{
							isError: !!errors.title,
							errorMessage: 'UserTask Title validation message'
						}}
					/>

					<CalendarInput
						control={control}
						inputBase={{
							id: 'plannedFinishDate',
							label: 'Planowana data ukończenia',
							value: new Date()
						}}
					/>
					<SelectInput
						control={control}
						selectOptions={[
							{
								label: 'Custom value',
								value: 'custom value key'
							},
							{
								label: 'Another custom value',
								value: 'another custom value key'
							}
						]}
						creatable
						clearable
						inputBase={{
							id: 'category',
							label: 'UserTask category',
							fullWidth: false
						}}
					/>
				</InnerFormWrapper>

				<TextArea
					inputBase={{
						id: 'description',
						label: 'UserTask additional description',
						register: register
					}}
				/>
				<Button>UserTask add task</Button>
			</StyledForm>
		</Wrapper>
	);
};

export default AddUserTaskForm;
