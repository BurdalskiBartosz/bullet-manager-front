import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
	email: Yup.string().required(),
	password: Yup.string().required().min(6),
	confirmPassword: Yup.string()
		.required()
		.oneOf([Yup.ref('password')])
});

export const resolver = yupResolver(validationSchema);
