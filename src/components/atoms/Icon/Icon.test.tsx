import { render, screen } from 'utils/tests';
import Icon from './Icon';

describe('Icon', () => {
	it('should render correctly', () => {
		render(<Icon iconName="close" />);
		const iconElement = screen.getByTestId('icon-component');
		expect(iconElement).toMatchSnapshot();
	});
});
