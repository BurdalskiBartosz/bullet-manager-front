import styled from 'styled-components';

export const Wrapper = styled.div`
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	border: 1px solid ${({ theme }) => theme.colors.gray};
	padding: 10px 10px 5px;
	min-height: 65px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Description = styled.p`
	font-size: 1.3rem;
	line-height: 1.5rem;
`;
export const Priority = styled.p`
	font-size: 1.3rem;
	line-height: 1.5rem;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.danger};
`;
export const Category = styled.p`
	font-size: 0.8rem;
	line-height: 1.5rem;
	font-weight: bold;
`;

export const InsideWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const TopWrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const IconsWrapper = styled.div`
	display: flex;
	gap: 8px;
`;
