import { tIndexSignature } from 'types/shared';
import { gridBreakpoints } from '../variables/grid';

export const media = Object.entries(gridBreakpoints).reduce(
	(acc, [key, value]) => {
		acc[key] = `@media (min-width: ${value}px)`;
		return acc;
	},
	{} as tIndexSignature
);
