import styled from 'styled-components';

export const StyledForm = styled.form`
	display: grid;
	grid-gap: 10px;
	& > button {
		margin-top: 1rem;
	}
`;

export const StyledTextUnderForm = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 4rem;
	& p {
		margin-right: 5px;
		font-size: 1.4rem;
	}
	& a {
		font-size: 1.4rem;
	}
`;

export const StyledErrorBar = styled.div`
	padding: 1rem 0;
	text-align: center;
	color: ${({ theme }) => theme.colors.light};
	background-color: ${({ theme }) => theme.colors.danger};
	border: 2px solid #ffb2a7;
	margin-bottom: 1rem;
`;
