import { fireEvent, render, screen } from 'utils/tests';
import InputBase from './InputBase';

const mockFn = jest.fn();

const props = {
	id: 'test',
	label: 'Label test',
	error: {
		isError: false,
		errorMessage: 'Error is visible'
	}
};

describe('InputBase', () => {
	it('should correctly', () => {
		render(<InputBase {...props} />);
		const label = screen.getByLabelText(/Label test/i);
		expect(label).toBeInTheDocument();
		expect(label).toMatchSnapshot();
	});

	it('should correctly with icon', () => {
		render(
			<InputBase
				{...props}
				icon={{
					iconName: 'close',
					fn: mockFn
				}}
			/>
		);
		const icon = screen.getByTestId('icon-component');
		expect(icon).toBeInTheDocument();
		fireEvent.click(icon);
		fireEvent.click(icon);
		expect(mockFn.mock.calls.length).toBe(2);
	});

	it('should correctly with isDisabled prop', () => {
		render(<InputBase {...props} isDisabled />);
		const input = screen.getByPlaceholderText(`${props.label} placeholder`);
		expect(input).toBeInTheDocument();
		expect(input).toBeDisabled();
	});

	it('should correctly show error message', () => {
		const { rerender } = render(<InputBase {...props} />);
		const invisibleError = screen.queryByText(/Error is visible/i);
		expect(invisibleError).toBeNull();

		rerender(
			<InputBase
				{...props}
				error={{
					isError: true,
					errorMessage: props.error.errorMessage
				}}
			/>
		);
		const visibleError = screen.getByText(/Error is visible/i);
		expect(visibleError).toBeInTheDocument();
	});
});
