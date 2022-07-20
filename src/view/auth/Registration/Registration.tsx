import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAuth } from 'providers/AuthProvider';
import { tRegistrationUserData } from 'types/forms/authForm';
import { Button, Font, InputBase, Link, PasswordInput } from 'components';
import { StyledErrorBar, StyledTextUnderForm } from 'styles/shared/auth';
import { StyledForm } from 'styles/shared/global';

const validationSchema = yup.object().shape({
	email: yup.string().required(),
	login: yup.string().required(),
	password: yup.string().required().min(6),
	confirmPassword: yup
		.string()
		.required()
		.oneOf([yup.ref('password')])
});

const Registration = () => {
	const auth = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<tRegistrationUserData>({
		resolver: yupResolver(validationSchema)
	});

	return (
		<div>
			<Font variant="header" style={{ marginBottom: '4rem' }}>
				Register
			</Font>
			{auth.error && (
				<StyledErrorBar>
					<Font>{auth.error}</Font>
				</StyledErrorBar>
			)}
			<StyledForm onSubmit={handleSubmit(auth.signUp)}>
				<InputBase
					id="login"
					label="Login input"
					register={register}
					error={{
						isError: !!errors.login,
						errorMessage: 'Login validation message'
					}}
				/>
				<InputBase
					id="email"
					label="Email input"
					register={register}
					error={{
						isError: !!errors.email,
						errorMessage: 'Email validation message'
					}}
				/>
				<PasswordInput
					inputBase={{
						id: 'password',
						label: 'Password input',
						register: register,
						type: 'password',
						error: {
							isError: !!errors.password,
							errorMessage: 'Password validation message'
						}
					}}
				/>
				<PasswordInput
					inputBase={{
						id: 'confirmPassword',
						label: 'Confirm password input',
						register: register,
						fullWidth: false,
						type: 'password',
						error: {
							isError: !!errors.confirmPassword,
							errorMessage: 'Confirm password validation message'
						}
					}}
				/>
				<Button>Register</Button>
			</StyledForm>
			<StyledTextUnderForm>
				<Font>Posiadasz konto ?</Font>
				<Link link="/login">Login</Link>
			</StyledTextUnderForm>
		</div>
	);
};

export default Registration;
