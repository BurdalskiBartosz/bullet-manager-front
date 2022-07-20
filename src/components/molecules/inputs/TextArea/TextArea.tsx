import { FC } from 'react';
import InputBase, { tInputBase } from 'components/atoms/InputBase/InputBase';

type tProps = {
	inputBase: tInputBase;
};

const TextArea: FC<tProps> = ({ inputBase }) => {
	return <InputBase {...inputBase} as="textarea" />;
};

export default TextArea;
