import { fireEvent, render, screen } from 'utils/tests';
import Dropdown from './Dropdown';

const MockedDropdown = (
	<Dropdown
		dropdownTop={<div>Click me</div>}
		dropdownBody={
			<div>
				<p>Text visible when clicked on button</p>
			</div>
		}
	/>
);

describe('Dropdown', () => {
	it('should not show body', () => {
		render(MockedDropdown);
		const bodyText = screen.queryByText(
			/Text visible when clicked on button/i
		);
		expect(bodyText).toBeNull();
	});

	it('should correctly render body after button was clicked', () => {
		render(MockedDropdown);
		const button = screen.getByRole('button');

		fireEvent.click(button);

		const bodyText = screen.queryByText(
			/Text visible when clicked on button/i
		);
		expect(bodyText).toBeInTheDocument();
	});

	it('should correctly hide body after double click', () => {
		render(MockedDropdown);
		const button = screen.getByRole('button');

		fireEvent.dblClick(button);

		const bodyText = screen.queryByText(
			/Text visible when clicked on button/i
		);
		expect(bodyText).toBeNull();
	});
});
