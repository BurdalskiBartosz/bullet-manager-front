export type tLoginUserData = Omit<tRegistrationUserData, 'confirmPassword'>;

export type tRegistrationUserData = {
	login: string;
	email: string;
	password: string;
	confirmPassword: string;
};
