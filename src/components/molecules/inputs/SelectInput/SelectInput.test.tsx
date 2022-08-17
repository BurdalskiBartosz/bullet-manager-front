import { useForm } from 'react-hook-form';
import { fireEvent, render, screen, waitFor } from 'utils/tests';
import SelectInput from './SelectInput';
import selectEvent from 'react-select-event';

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
		<form role="form">
			<SelectInput
				control={control}
				multi
				selectOptions={{
					getOptionsFn: mockGetOptionsFn,
					keyValue: 'title'
				}}
				inputBase={{
					id: 'selectValues',
					label: 'SELECT',
					fullWidth: false,
					error: {
						isError: !!errors.select,
						errorMessage: 'Login or email validation message'
					}
				}}
			/>
		</form>
	);
};

describe('SelectInput', () => {
	it('should works correctly with multi prop', async () => {
		render(<Component />);

		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ''
		});

		await selectEvent.select(screen.getByLabelText('SELECT'), [
			'Titile',
			'Second title'
		]);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ['1', '2']
		});
	});
});
