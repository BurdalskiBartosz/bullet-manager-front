import Link from 'next/link';
import { useForm } from 'react-hook-form';
import CenterBox from 'src/components/molecules/boxes/CenterBox/CenterBox';
import Input from 'src/components/molecules/inputs/Input/Input';

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<CenterBox>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						id="login"
						type="text"
						label="Login"
						register={register('login', { required: true })}
						error={errors.login}
					/>
					<Input
						id="password"
						type="password"
						label="Hasło"
						register={register('password', { required: true })}
						error={errors.test}
					/>
					<button>Zaloguj się</button>
				</form>
				<Link href="/register">Zarejestruj się</Link>
			</div>
		</CenterBox>
	);
};

export default LoginPage;
