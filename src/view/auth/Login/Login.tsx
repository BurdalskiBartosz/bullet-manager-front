import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../providers/AuthProvider';
import { tLoginUserData } from '../../../types/forms/authForm';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
	login: yup.string().when('email', {
		is: (val: string) => !!val.length,
		then: (schema) => schema.notRequired(),
		otherwise: (schema) => schema.required()
	}),
	email: yup.string().email(),
	password: yup.string().required().min(6)
});
const Login = () => {
	const { t } = useTranslation();
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
			<h1>{t('Login page')}</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="userLogin">
						<span>{t('Login input')}</span>
						<input id="userLogin" {...register('login')} />
					</label>
				</div>
				<div>
					<label htmlFor="userEmail">
						<span>{t('Email input')}</span>
						<input id="userEmail" {...register('email')} />
					</label>
				</div>
				{(errors.email || errors.login) && (
					<div>{t('Login or email validation message')}</div>
				)}
				<div>
					<label htmlFor="userPassword">
						<span>{t('Password input')}</span>
						<input id="userPassword" {...register('password')} />
						{errors.password && (
							<div>{t('Password validation message')}</div>
						)}
					</label>
				</div>
				<button>{t('Login')}</button>
			</form>
		</div>
	);
};

export default Login;
