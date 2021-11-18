import {
	gridBreakpoints,
	containerMaxWidths,
} from '../abstract/variables/grid';

export const gridTheme = {
	breakpoints: {
		...gridBreakpoints,
	},
	container: {
		maxWidth: {
			...containerMaxWidths,
		},
	},
};
