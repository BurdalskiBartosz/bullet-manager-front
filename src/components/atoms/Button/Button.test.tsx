import { render, screen } from '@testing-library/react';
import Button from './Button';
import userEvent from '@testing-library/user-event';

describe('renders learn react link', () => {
	it('should', () => {
		render(<Button>Test buttona</Button>);
		const linkElement = screen.getByText(/Test buttona/i);
		expect(linkElement).toBeInTheDocument();
	});

	test('clear', async () => {
		render(<textarea defaultValue="Hello, World!" />);

		await userEvent.clear(screen.getByRole('textbox'));

		expect(screen.getByRole('textbox')).toHaveValue('');
	});
});
