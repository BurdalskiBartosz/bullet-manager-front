import { render, screen } from 'utils/tests';
import Breadcrumbs from './Breadcrumbs';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: () => ({
		pathname: '/app/dashboard/example/path'
	})
}));

describe('Breadcrumbs', () => {
	it('should correctly', () => {
		render(<Breadcrumbs />);
		const breadcrumbs = screen.getByTestId(/breadcrumbs-component/i);
		expect(breadcrumbs).toMatchSnapshot();
	});
});
