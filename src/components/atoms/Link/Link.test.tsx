import { fireEvent, render, screen } from 'utils/tests';
import Link from './Link';

const mockFn = jest.fn();

// TODO Add other test cases
describe('Link', () => {
	it('should render correctly', () => {
		render(
			<Link external link="/dashboard">
				Link
			</Link>
		);
		const link = screen.getByText(/link/i);
		expect(link).toMatchSnapshot();
	});
});
