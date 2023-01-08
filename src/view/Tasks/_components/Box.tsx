import { Font } from 'components';
import { FC, ReactElement } from 'react';
import { Wrapper } from './Box.styles';

type tProps = {
	children: string | ReactElement;
	title?: string;
};

export const Box: FC<tProps> = ({ children, title }) => {
	return (
		<Wrapper>
			{title && <Font variant="midHeader">{title}</Font>}
			{children}
		</Wrapper>
	);
};
