import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Home', () => {
	it('renders a heading', () => {
		render(<Button>Test</Button>);

		screen.getByText('Test');
	});
});
