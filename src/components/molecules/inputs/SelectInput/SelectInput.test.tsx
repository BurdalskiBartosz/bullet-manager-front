import { useForm } from 'react-hook-form';
import { render, screen } from 'utils/tests';
import SelectInput from './SelectInput';
import selectEvent from 'react-select-event';
import { FC } from 'react';

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

const entitySelectData = {
	getOptionsFn: mockGetOptionsFn,
	keyValue: 'title'
};

const customSelectData = [
	{
		value: 'Custom value',
		key: 'custom value key'
	},
	{
		value: 'Another custom value',
		key: 'another custom value key'
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
	value: string;
	key: string;
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
		render(<Component selectOptions={entitySelectData} />);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ''
		});
		await selectEvent.select(screen.getByLabelText('Select title'), [
			'Titile',
			'Second title'
		]);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ['1', '2']
		});
	});

	it('should works correctly without multi and select only one item', async () => {
		render(<Component selectOptions={entitySelectData} multi={false} />);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: ''
		});
		await selectEvent.select(screen.getByLabelText('Select title'), [
			'Titile',
			'Second title'
		]);
		expect(screen.getByRole('form')).toHaveFormValues({
			selectValues: '2'
		});
	});

	it('should works correctly without creatable props and create new item and select it', async () => {
		render(
			<Component
				selectOptions={entitySelectData}
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
