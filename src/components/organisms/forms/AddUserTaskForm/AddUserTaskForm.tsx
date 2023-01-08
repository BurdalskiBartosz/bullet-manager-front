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
import { useAddUserTaskMutation } from 'store/api/userTask';
import {
	Wrapper,
	InnerFormWrapper,
	StyledForm,
	FormRow
} from './AddUserTaskForm.style';

type tProps = {};

const validationSchema = yup.object().shape({
	title: yup.string().required().min(6)
});

type tTaskData = {
	title: string;
	description: string;
	plannedFinishDate: Date;
	category: string;
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

	const [addTask] = useAddUserTaskMutation();

	const handleAddTask = (data: tTaskData) => {
		addTask(data);
	};

	return (
		<Wrapper>
			<StyledForm onSubmit={handleSubmit(handleAddTask)}>
				<InnerFormWrapper>
					<InputBase
						id="title"
						label="UserTask Title"
						register={register}
						styleForm="FORM"
						error={{
							isError: !!errors.title,
							errorMessage: 'UserTask Title validation message'
						}}
					/>
					<FormRow>
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
								fullWidth: false,
								styleForm: 'FORM'
							}}
						/>
						<SelectInput
							control={control}
							selectOptions={[
								{
									label: '1',
									value: '1'
								},
								{
									label: '2',
									value: '2'
								},
								{
									label: '3',
									value: '3'
								}
							]}
							inputBase={{
								id: 'priority',
								label: 'UserTask priority',
								fullWidth: false,
								styleForm: 'FORM'
							}}
						/>
					</FormRow>

					<CalendarInput
						control={control}
						inputBase={{
							id: 'plannedFinishDate',
							label: 'Planowana data ukończenia',
							value: new Date()
						}}
					/>
					<TextArea
						inputBase={{
							id: 'description',
							label: 'UserTask additional description',
							register: register,
							styleForm: 'FORM'
						}}
					/>
				</InnerFormWrapper>

				<Button>UserTask add task</Button>
			</StyledForm>
		</Wrapper>
	);
};

export default AddUserTaskForm;
