import Font from 'components/atoms/Font';
import Icon from 'components/atoms/Icon';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { BreadLink, Wrapper } from './Breadcrumbs.style';

type Props = {};

const Breadcrumbs: FC<Props> = () => {
	const { pathname } = useLocation();
	const mockedPathname = '/app/tasks/annual/12032/32/332';
	const getPaths = () => {
		const pathnames = mockedPathname
			.split('/')
			.filter((el) => el && el !== 'app')
			.map((el, i, arr) => {
				const link = arr
					.slice(0, i + 1)
					.reduce((prev, curr) => `${prev}/${curr}`, '');
				const routeName = el[0].toUpperCase() + el.slice(1);
				const isLast = arr.length > i + 1 ? true : false;
				return (
					<BreadLink
						key={routeName}
						to={`/app${link}`}
						style={{ color: 'white' }}
					>
						<Font style={{ marginRight: '1rem' }}>{routeName}</Font>
						{isLast && (
							<Icon
								fill="#FFF"
								iconName="arrow_right"
								height="15"
							/>
						)}
					</BreadLink>
				);
			});
		return pathnames;
	};
	return <Wrapper>{getPaths()}</Wrapper>;
};

export default Breadcrumbs;
