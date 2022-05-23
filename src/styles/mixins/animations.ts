export const animations = {
	menuTransition: (color: string, secondColor: string) => `
		position: relative;
		color: ${color};
		transition: 0.2s linear;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: ${color};
			z-index: 1;
			opacity: 0;
			transition: 0.3s linear;
		}
		&:hover {
			color: ${secondColor};
			&::before {
				opacity: .7;
			}
		}
	`
};
