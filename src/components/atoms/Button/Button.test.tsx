import { fireEvent, render, screen } from 'utils/tests';
import Button from './Button';

const mockFn = jest.fn();

describe('Button', () => {
	it('should render correctly without any props', () => {
		render(<Button>Button</Button>);
		const linkElement = screen.getByText(/Button/i);
		expect(linkElement).toMatchSnapshot();
	});

	it('should trigger event', () => {
		render(<Button fn={mockFn}>Button</Button>);
		const linkElement = screen.getByText(/Button/i);
		fireEvent.click(linkElement);
		expect(mockFn.mock.calls.length).toBe(1);
	});

	it('should render correctly with colorType secondary', () => {
		render(<Button colorType="secondary">Button</Button>);
		const linkElement = screen.getByText(/Button/i);
		expect(linkElement).toHaveStyleRule('background-color', '#563AA5');
	});

	it('should render correctly with colorType dark', () => {
		render(<Button colorType="dark">Button</Button>);
		const linkElement = screen.getByText(/Button/i);
		expect(linkElement).toHaveStyleRule('background-color', '#362467');
	});
});
