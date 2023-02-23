import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
`;

export const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.light};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	box-shadow: ${({ theme }) => theme.shadows.secondary};
	background-color: rgba(255, 255, 255, 15%);
`;

export const InnerFormWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 30px;
`;

export const FormRow = styled.div`
	display: flex;
	gap: 15px;
	align-items: flex-end;
	& > :first-child {
		flex-shrink: 0;
		flex-basis: 250px;
	}
`;
