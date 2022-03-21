import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../providers/AuthProvider';
import { tRegistrationUserData } from '../../../types/forms/authForm';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
			<h1>{t('Registration page')}</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="userLogin">
						<span>{t('Login input')}</span>
						<input id="userLogin" {...register('login')} />
						{errors.login && (
							<div>{t('Login validation message')}</div>
						)}
					</label>
				</div>
				<div>
					<label htmlFor="userEmail">
						<span>{t('Email input')}</span>
						<input id="userEmail" {...register('email')} />
						{errors.email && (
							<div>{t('Email validation message')}</div>
						)}
					</label>
				</div>
				<div>
					<label htmlFor="userPassword">
						<span>{t('Password input')}</span>
						<input id="userPassword" {...register('password')} />
						{errors.password && (
							<div>{t('Password validation message')}</div>
						)}
					</label>
				</div>
				<div>
					<label htmlFor="userConfirmPassword">
						<span>{t('Confirm password input')}</span>
						<input
							id="userConfirmPassword"
							{...register('confirmPassword')}
						/>
						{errors.confirmPassword && (
							<div>
								{t('Confirm password validation message')}
							</div>
						)}
					</label>
				</div>
				<button>{t('Register')}</button>
			</form>
		</div>
	);
};

export default Registration;
