import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	Button,
	SelectInput,
	CalendarInput,
	TextArea,
	InputBase,
	EntityInput,
	Font
} from 'components';
import { FC } from 'react';
import { useAddUserTaskMutation } from 'store/api/userTask';
import {
	Wrapper,
	InnerFormWrapper,
	StyledForm,
	FormRow
} from './AddUserTaskForm.style';
import { useGetCategoriesQuery } from 'store/api/category';
import Loader from 'components/atoms/Loader';
import { Box } from 'view/Tasks/shared/styles';

type tProps = {};

const validationSchema = yup.object().shape({
	title: yup.string().required().min(6)
});

type tTaskData = {
	title: string;
	description: string;
	plannedFinishDate: Date;
	category: string;
	priority: string;
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
	const {
		data: categories,
		isLoading,
		refetch: refetchCategories
	} = useGetCategoriesQuery();

	const selectCategories = categories?.map((category) => ({
		label: category.name,
		value: category.id
	}));

	const handleAddTask = async (data: tTaskData) => {
		await addTask(data).unwrap();
		if (isNewCategory(data.category)) refetchCategories();
	};

	const isNewCategory = (categoryId: string) =>
		!selectCategories?.find(({ value }) => value === categoryId);

	return (
		<Box>
			{isLoading && <Loader />}
			<Font variant="midHeader">Dodaj zadanie</Font>
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
								errorMessage:
									'UserTask Title validation message'
							}}
						/>
						<FormRow>
							<SelectInput
								control={control}
								selectOptions={selectCategories ?? []}
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
						<FormRow>
							<CalendarInput
								control={control}
								inputBase={{
									id: 'plannedFinishDate',
									label: 'Planowana data ukończenia',
									value: new Date()
								}}
							/>
							<EntityInput
								id="note"
								register={register}
								label="Przypisz/utwórz notatkę do zadania"
							/>
						</FormRow>
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
		</Box>
	);
};

export default AddUserTaskForm;
