import InputBase, { tInputBase } from 'components/atoms/InputBase/InputBase';
import { FC, useState } from 'react';

type tProps = {
	inputBase: tInputBase;
};

const PasswordInput: FC<tProps> = ({ inputBase }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	const showPassword = () => {
		if (isPasswordVisible) setIsPasswordVisible(false);
		else setIsPasswordVisible(true);
	};
	const { type } = inputBase;
	return (
		<InputBase
			{...inputBase}
			type={isPasswordVisible && type === 'password' ? 'text' : type}
			icon={{
				iconName: isPasswordVisible ? 'show_password' : 'password',
				fn: showPassword
			}}
		></InputBase>
	);
};

export default PasswordInput;
