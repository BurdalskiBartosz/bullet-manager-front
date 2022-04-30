import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../providers/AuthProvider';
import { tRegistrationUserData } from '../../../types/forms/authForm';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Font, Input } from '../../../components';

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
	const { t } = useTranslation();
	const auth = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<tRegistrationUserData>({
		resolver: yupResolver(validationSchema)
	});

	const onSubmit: SubmitHandler<tRegistrationUserData> = (data) => {
		auth.signUp(data);
		console.log(data);
	};
	return (
		<div>
			<Font variant="header" style={{ marginBottom: '7rem' }}>
				Register
			</Font>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					id="login"
					label="Login input"
					register={register}
					error={{
						isError: !!errors.login,
						errorMessage: 'Login validation message'
					}}
				/>
				<Input
					id="email"
					label="Email input"
					register={register}
					error={{
						isError: !!errors.email,
						errorMessage: 'Email validation message'
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
				<Input
					id="confirmPassword"
					label="Confirm password input"
					register={register}
					type="password"
					error={{
						isError: !!errors.confirmPassword,
						errorMessage: 'Confirm password validation message'
					}}
				/>

				<button type="submit">{t('Register')}</button>
			</form>
		</div>
	);
};

export default Registration;
