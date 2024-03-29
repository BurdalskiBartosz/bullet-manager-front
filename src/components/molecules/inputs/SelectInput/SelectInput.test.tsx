import { useForm } from 'react-hook-form';
import { render, renderWithProviders, screen } from 'utils/tests';
import SelectInput from './SelectInput';
import selectEvent from 'react-select-event';
import { FC } from 'react';
import { useGetUserTasksQuery } from 'store/api/userTask';
import { server } from 'mocks/msw';

type Form = {
	select: string[] | string;
};

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

const customSelectData = [
	{
		label: 'Custom value',
		value: 'custom value key'
	},
	{
		label: 'Another custom value',
		value: 'another custom value key'
	}
];

type ComponentType = {
	multi?: boolean;
	creatable?: boolean;
	selectOptions: SelectOptions;
};

type EntitySelect = {
	getOptionsFn: Function;
	keyValue: string;
};

type CustomSelect = {
	label: string;
	value: string;
}[];

type SelectOptions = EntitySelect | CustomSelect;

const Component: FC<ComponentType> = ({
	multi = true,
	creatable = false,
	selectOptions
}) => {
	const {
		control,
		formState: { errors }
	} = useForm<Form>();
	return (
		<form role="form">
			<SelectInput
				control={control}
				multi={multi}
				creatable={creatable}
				selectOptions={selectOptions}
				inputBase={{
					id: 'selectValues',
					label: 'Select title',
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
		renderWithProviders(
			<Component
				selectOptions={{
					getOptionsFn: useGetUserTasksQuery,
					keyValue: 'title'
				}}
			/>
		);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ''
		});
		await selectEvent.select(screen.getByLabelText('Select title'), [
			'Mocked value',
			'Mocked second value'
		]);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ['1', '2']
		});
	});

	it('should works correctly without multi and select only one item', async () => {
		render(
			<Component
				selectOptions={{
					getOptionsFn: useGetUserTasksQuery,
					keyValue: 'title'
				}}
				multi={false}
			/>
		);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ''
		});
		await selectEvent.select(screen.getByLabelText('Select title'), [
			'Mocked value',
			'Mocked second value'
		]);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: '2'
		});
	});

	it('should works correctly without creatable props and create new item and select it', async () => {
		render(
			<Component
				selectOptions={{
					getOptionsFn: useGetUserTasksQuery,
					keyValue: 'title'
				}}
				multi={false}
				creatable
			/>
		);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ''
		});
		expect(screen.getByRole('form')).not.toHaveFormValues({
			selectValues: 'New item'
		});
		await selectEvent.create(
			screen.getByLabelText('Select title'),
			'New item'
		);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: 'New item'
		});
	});

	it('should works correctly with custom data', async () => {
		render(<Component selectOptions={customSelectData} multi={false} />);

		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ''
		});
		await selectEvent.select(screen.getByLabelText('Select title'), [
			'Custom value'
		]);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: 'custom value key'
		});
	});

	it('should works correctly with custom data and creatable prop', async () => {
		render(
			<Component
				selectOptions={customSelectData}
				multi={false}
				creatable
			/>
		);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ''
		});
		expect(screen.getByRole('form')).not.toHaveFormValues({
			selectValues: 'New item'
		});
		await selectEvent.create(
			screen.getByLabelText('Select title'),
			'New item'
		);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: 'New item'
		});
	});

	it('should works correctly with custom data and creatable  and multi props', async () => {
		render(<Component selectOptions={customSelectData} creatable />);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ''
		});
		expect(screen.getByRole('form')).not.toHaveFormValues({
			selectValues: 'New item'
		});
		await selectEvent.create(
			screen.getByLabelText('Select title'),
			'New item'
		);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: 'New item'
		});
		await selectEvent.select(screen.getByLabelText('Select title'), [
			'Custom value'
		]);
		await selectEvent.create(
			screen.getByLabelText('Select title'),
			'Another new item'
		);

		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ['New item', 'custom value key', 'Another new item']
		});
	});
});
