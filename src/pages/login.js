import Link from 'next/link';
import { useForm } from 'react-hook-form';
import CenterBox from 'src/components/molecules/boxes/CenterBox/CenterBox';
import Input from 'src/components/molecules/inputs/Input/Input';
import { useAuth } from 'src/hooks/useAuth';
import service from 'src/services/Service';

const LoginPage = () => {
	const auth = useAuth();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const onSubmit = (data) => {
		auth.signIn(data);
	};

	return (
		<CenterBox>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						id="email"
						type="text"
						label="Email"
						register={register('email', { required: true })}
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
				<button onClick={() => auth.signOut()}>TEST LOGOUT</button>
			</div>
		</CenterBox>
	);
};

export default LoginPage;
