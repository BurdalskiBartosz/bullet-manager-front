import { gridBreakpoints } from '../variables/grid';

export const basicMediaBreakpoints = Object.keys(gridBreakpoints).reduce(
	(acc, breakpoint) => {
		acc[
			breakpoint
		] = `@media (min-width: ${gridBreakpoints[breakpoint]}px)`;
		return acc;
	},
	{},
);
