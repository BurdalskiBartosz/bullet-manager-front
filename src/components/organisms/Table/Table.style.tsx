import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	max-height: 800px;
	overflow-y: scroll;
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	margin-top: 5rem;
`;

export const StyledTable = styled.table`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.light};
	overflow: hidden;
	border-radius: ${({ theme }) => theme.sizes.borderRadius};

	border-spacing: 0;
`;

export const StyledTHead = styled.thead`
	background-color: red;
`;
export const StyledTH = styled.th`
	padding: 2rem;
	text-align: left;
`;

export const StyledTR = styled.tr`
	padding: 2rem;
`;

export const StyledTD = styled.td`
	padding: 2rem;
`;
