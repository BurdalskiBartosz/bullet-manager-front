import { render, screen } from '@testing-library/react';
import LoginPage from './login';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
	// it('renders a heading', async () => {
	// 	const testText = 'Sprawdzam testy';
	// 	render(<LoginPage toTests={testText} />);
	// 	expect(screen.queryByText(testText)).toBeTruthy();
	// 	const emailInput = screen.getByRole('textbox', {
	// 		labelledby: /email/i
	// 	});
	// 	userEvent.type(emailInput, 'Hello,World!');
	// 	expect(
	// 		screen.getByRole('textbox', {
	// 			labelledby: /email/i
	// 		})
	// 	).toHaveValue('Hello,World!');
	// });

	it('renders a heading', async () => {
		render(
			<div>
				<label htmlFor="checkbox">Check</label>
				<input id="checkbox" type="checkbox" />
			</div>
		);

		userEvent.click(screen.getByText('Check'));
		expect(screen.getByLabelText('Check')).toBeChecked();
	});
});
