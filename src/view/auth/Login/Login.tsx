import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '../../../providers/AuthProvider';
import { tLoginUserData } from '../../../types/forms/authForm';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Font, Input, Link } from '../../../components';
import { StyledForm, StyledTextUnderForm } from '../../../styles/shared/auth';

const validationSchema = yup.object().shape({
	loginOrEmail: yup.string().required(),
	password: yup.string().required().min(6)
});
const Login = () => {
	const auth = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<tLoginUserData>({
		resolver: yupResolver(validationSchema)
	});

	const onSubmit: SubmitHandler<tLoginUserData> = (data) => {
		auth.signIn(data);
	};
	return (
		<div>
			<Font variant="header" style={{ marginBottom: '4rem' }}>
				Login
			</Font>

			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<Input
					id="loginOrEmail"
					label="Login or email input"
					register={register}
					error={{
						isError: !!errors.loginOrEmail,
						errorMessage: 'Login or email validation message'
					}}
				/>

				<Input
					id="password"
					label="Password input"
					register={register}
					type="password"
					error={{
						isError: !!errors.password,
						errorMessage: 'Password validation message'
					}}
				/>

				<Button>Login</Button>
			</StyledForm>
			<StyledTextUnderForm>
				<Font>Posiadasz konto ?</Font>
				<Link link="/registration">Register</Link>
			</StyledTextUnderForm>
		</div>
	);
};

export default Login;
