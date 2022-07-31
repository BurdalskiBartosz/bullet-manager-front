import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('renders learn react link', () => {
	it('should', () => {
		render(<Button>Test buttona</Button>);
		const linkElement = screen.getByText(/Test buttona/i);
		expect(linkElement).toBeInTheDocument();
	});
});
