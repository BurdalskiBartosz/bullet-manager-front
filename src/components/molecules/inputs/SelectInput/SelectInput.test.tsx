import { useForm } from 'react-hook-form';
import { fireEvent, render, screen, waitFor } from 'utils/tests';
import SelectInput from './SelectInput';

type Form = {
	select: string[] | string;
};

const mockGetOptionsFn = () => {
	return {
		data: [
			{ id: 1, title: 'Titile' },
			{ id: 2, title: 'Second title' }
		]
	};
};

const Component = () => {
	const {
		control,
		formState: { errors }
	} = useForm<Form>();
	return (
		<SelectInput
			control={control}
			multi
			selectOptions={{
				getOptionsFn: mockGetOptionsFn,
				keyValue: 'title'
			}}
			inputBase={{
				id: 'task',
				label: 'SELECT',
				fullWidth: false,
				error: {
					isError: !!errors.select,
					errorMessage: 'Login or email validation message'
				}
			}}
		/>
	);
};

describe('SelectInput', () => {
	it('should not show body', async () => {
		render(<Component />);

		const bodyText = screen.getByRole('combobox');
		fireEvent.click(bodyText);

		const getSelectItem = async (selectLabel: any, itemText: any) => {
			fireEvent.keyDown(bodyText, 'DOWN_ARROW');
		};
		await getSelectItem('SELECT', 'Option');
	});
});
