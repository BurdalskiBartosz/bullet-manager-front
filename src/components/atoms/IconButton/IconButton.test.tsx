import { render, fireEvent, screen } from 'utils/tests';
import IconButton from './IconButton';

const mockFn = jest.fn();

describe('IconButton', () => {
	it('should render correctly', () => {
		render(<IconButton iconName="close" />);
		const iconButtonElement = screen.getByRole('button');
		expect(iconButtonElement).toMatchSnapshot();
	});

	it('should trigger event', () => {
		render(
			<IconButton iconName="close" fn={mockFn}>
				Button
			</IconButton>
		);
		const iconButtonElement = screen.getByRole('button');
		fireEvent.click(iconButtonElement);
		expect(mockFn.mock.calls.length).toBe(1);
	});
});
