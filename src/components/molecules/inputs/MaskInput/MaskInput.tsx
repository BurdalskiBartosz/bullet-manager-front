import InputBase from 'components/atoms/InputBase';
import { tInputBase } from 'components/atoms/InputBase/InputBase';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { tMask } from 'utils/masks';
import { StyledInput } from './MaskInput.style';

type tProps = {
	control: any;
	mask: tMask;
	placeholder: string;
	inputBase: tInputBase;
};

const MaskInput: FC<tProps> = ({ inputBase, control, mask, placeholder }) => {
	return (
		<InputBase {...inputBase}>
			<Controller
				name={inputBase.id}
				control={control}
				render={({ field }) => {
					const { onChange } = field;
					return (
						<StyledInput
							onChange={onChange}
							mask={mask}
							placeholder={placeholder}
						/>
					);
				}}
			/>
		</InputBase>
	);
};

export default MaskInput;
