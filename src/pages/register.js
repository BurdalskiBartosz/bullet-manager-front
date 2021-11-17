import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CenterBox from 'src/components/molecules/boxes/CenterBox/CenterBox';
import Input from 'src/components/molecules/inputs/Input/Input';
import service from 'src/services/Service';

const RegisterPage = () => {
	const validationSchema = Yup.object().shape({
		password: Yup.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters'),
		confirmPassword: Yup.string()
			.required('Confirm Password is required')
			.oneOf([Yup.ref('password')], 'Passwords must match')
	});
	const formOptions = { resolver: yupResolver(validationSchema) };
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm(formOptions);

	const onSubmit = (data) => {
		console.log(data);
		const response = service.register({
			email: data.email,
			password: data.password
		});
	};

	return (
		<CenterBox>
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
		</CenterBox>
	);
};

export default RegisterPage;

export async function getServerSideProps({ req }) {
	console.log(req.headers);

	return {
		props: {
			test: 5
		}
	};
}
