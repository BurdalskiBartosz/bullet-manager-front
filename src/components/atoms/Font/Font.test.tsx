import { render, screen } from 'utils/tests';
import Font from './Font';

const styleProp = {
	color: '#DDDDDD',
	fontSize: '22px',
	marginBottom: '20px'
};

describe('Font', () => {
	it('should render correctly without any props', () => {
		render(<Font>Font</Font>);
		const fontComponent = screen.getByText(/Font/i);
		expect(fontComponent).toMatchSnapshot();
	});

	it('should render correctly with style prop', () => {
		render(<Font style={styleProp}>Font</Font>);
		const fontComponent = screen.getByText(/Font/i);
		expect(fontComponent).toHaveStyleRule('color', '#DDDDDD');
		expect(fontComponent).toHaveStyleRule('font-size', '22px');
		expect(fontComponent).toHaveStyleRule('margin-bottom', '20px');
	});

	it('should correctly load styles from variant', () => {
		render(<Font variant="label">Font</Font>);
		const fontComponent = screen.getByText(/Font/i);
		expect(fontComponent).toHaveStyleRule('font-size', '1.2rem');
		expect(fontComponent).toHaveStyleRule('line-height', '1.6rem');
	});

	it('should correctly load styles from variant with breakpoints', () => {
		render(<Font variant="header">Font</Font>);
		const fontComponent = screen.getByText(/Font/i);
		expect(fontComponent).toHaveStyleRule('font-size', '3.5rem');
		expect(fontComponent).toHaveStyleRule('font-size', '4rem', {
			media: '(min-width: 576px)'
		});
		expect(fontComponent).toHaveStyleRule('font-size', '5rem', {
			media: '(min-width: 992px)'
		});
	});

	it('should correctly override variant styles with style prop', () => {
		render(
			<Font variant="header" style={styleProp}>
				Font
			</Font>
		);
		const fontComponent = screen.getByText(/Font/i);
		expect(fontComponent).toHaveStyleRule('font-size', '22px');
		expect(fontComponent).toHaveStyleRule('margin-bottom', '20px');
	});
});
