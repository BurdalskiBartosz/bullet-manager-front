import { Icon } from 'components';
import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
`;

export const StyledInput = styled.input`
	padding: 1rem 1rem 1rem 3.5rem;
	border: 1px solid ${({ theme }) => theme.colors.dark};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	outline: none;
	&::placeholder {
		font-style: italic;
	}
`;

export const StyledIcon = styled(Icon)`
	position: absolute;
	top: 50%;
	left: 1rem;
	transform: translateY(-50%);
`;
