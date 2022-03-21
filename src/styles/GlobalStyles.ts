import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const colorBlueBasic = '#1286FF';
export const colorBlueLight = '#3899ff';
export const colorGreenBasic = '#11B55F';
export const colorGreenLight = '#59CD90';
export const colorOrangeBasic = '#F68661';
export const colorOrangeLight = '#FDC661';
export const colorRedBasic = '#FF3E4A';
export const colorRedDark = '#FF3340';
export const colorRedLight = '#FF5964';
export const colorYellowBasic = '#FCC561';
export const colorGreyBasic = '#b0bdd0';
export const colorGreyDark = '#383838';
export const colorBlack = '#000';
export const colorWhite = '#fff';
export const gradientBlue = 'linear-gradient(180deg, #20d1ff 0%, #1286ff 100%)';

export const GlobalStyles = createGlobalStyle`${css`
	${normalize}
	a {
		color: var(--theme-mainBlack);
		&:hover {
		color: var(--theme-mainBlack);
		}
	}
	h1 {
		font-size: 26px;
		line-height: 48px;
		margin: 0;
		padding: 0;
	}
	h2 {
		font-size: 22px;
		line-height: 30px;
		margin: 0;
		padding: 0;
	}
	h3 {
		font-size: 18px;
		line-height: 24px;
		margin: 0;
		padding: 0;
	}
	h4 {
		font-size: 18px;
		line-height: 24px;
		margin: 0;
		padding: 0;
	}
	h5 {
		font-size: 18px;
		line-height: 24px
		margin: 0;
		padding: 0;
	}
	h6 {
		font-size: 16px;
		line-height: 22px;
		margin: 0;
		padding: 0;
	}
`}`;
