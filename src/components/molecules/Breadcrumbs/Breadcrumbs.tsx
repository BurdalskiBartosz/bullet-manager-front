import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { appRootRoute } from 'utils/constants';
import { Font, Icon } from 'components';
import { BreadLink, Wrapper } from './Breadcrumbs.style';

type tProps = {};

const Breadcrumbs: FC<tProps> = () => {
	const { pathname } = useLocation();
	const getPaths = () => {
		const pathnames = pathname
			.split('/')
			.filter((el) => el && el !== appRootRoute)
			.map((el, i, arr) => {
				const link = arr
					.slice(0, i + 1)
					.reduce((prev, curr) => `${prev}/${curr}`, '');
				const routeName = el[0].toUpperCase() + el.slice(1);
				const isLast = arr.length > i + 1 ? true : false;
				return (
					<BreadLink
						key={routeName}
						to={`/${appRootRoute}${link}`}
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
	return <Wrapper data-testid="breadcrumbs-component">{getPaths()}</Wrapper>;
};

export default Breadcrumbs;
