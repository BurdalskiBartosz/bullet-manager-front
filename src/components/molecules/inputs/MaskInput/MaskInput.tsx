import InputBase from 'components/atoms/InputBase';
import { tInputBase } from 'components/atoms/InputBase/InputBase';
import { FC } from 'react';
import { dateMask } from 'utils/masks';
import { StyledInput } from './MaskInput.style';

type tProps = {
	value?: string;

	inputBase: tInputBase;
};
const MaskInput: FC<tProps> = ({ inputBase, value }) => {
	const { id, type, register } = inputBase;
	return (
		<InputBase {...inputBase}>
			<StyledInput
				id={id}
				mask={dateMask}
				placeholder="DD/MM/YYYY"
				type={type}
				{...(register ? register(id) : {})}
			/>
		</InputBase>
	);
};

export default MaskInput;
