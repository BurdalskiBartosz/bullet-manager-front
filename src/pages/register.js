import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Input from 'src/components/molecules/inputs/Input/Input';
import { useAuth } from 'src/hooks/useAuth';
import AuthTemplate from 'src/templates/AuthTemplate/AuthTemplate';
import { resolver } from 'src/utils/registerValidation';

const RegisterPage = () => {
	const auth = useAuth();
	const formOptions = { resolver };
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm(formOptions);

	const onSubmit = (data) => {
		auth.signUp(data);
	};

	return (
		<AuthTemplate>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						id="email"
						type="email"
						label="E-mail"
						register={register('email', { required: true })}
						error={errors.email}
					/>
					<Input
						id="password"
						type="password"
						label="Hasło"
						register={register('password', { required: true })}
						error={errors.test}
					/>
					<div className="invalid-feedback">
						{errors.password?.message}
					</div>
					<Input
						id="confirmPassword"
						type="password"
						label="Powtórz hasło"
						register={register('confirmPassword', {
							required: true
						})}
						error={errors.test}
					/>
					<div className="invalid-feedback">
						{errors.confirmPassword?.message}
					</div>
					<button>Zarejestruj się</button>
				</form>
				<Link href="/login">Zaloguj się</Link>
			</div>
		</AuthTemplate>
	);
};

export default RegisterPage;
