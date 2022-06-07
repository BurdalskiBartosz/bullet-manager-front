import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	pointer-events: none;
	&::before,
	&:after {
		content: '';
		position: absolute;
		right: 0;
		width: 600px;
		height: 600px;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.light};
		box-shadow: ${({ theme }) => theme.shadows.primary};
	}
	&::before {
		top: 0;
		transform: translate(50%, -50%);
	}
	&::after {
		bottom: 0;
		transform: translate(50%, 50%);
	}
`;

export const Circle = styled.div`
	position: absolute;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	border: 6px solid rgba(255, 255, 255, 10%);
	&.circle {
		&-1 {
			width: 300px;
			height: 300px;
			top: 15%;
			left: 15%;
		}
		&-2 {
			width: 175px;
			height: 175px;
			top: 25%;
			left: 45%;
		}
		&-3 {
			width: 200px;
			height: 200px;
			top: 55%;
			left: 35%;
		}
		&-4 {
			width: 275px;
			height: 275px;
			top: 35%;
			left: 75%;
		}
		&-5 {
			width: 150px;
			height: 150px;
			top: 85%;
			left: 75%;
		}
		&-6 {
			width: 250px;
			height: 250px;
			top: 85%;
			left: 20%;
		}
	}
`;
