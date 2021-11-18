import { basicMediaBreakpoints } from './basicBreakpoints';

export const media = {
	...basicMediaBreakpoints,
	ipadPro: '@media only screen and (min-width: 1366px) and (height: 1024px)',
	laptopApproximation:
		'@media only screen and (min-width: 1500px) and (height: 800px)',
};
