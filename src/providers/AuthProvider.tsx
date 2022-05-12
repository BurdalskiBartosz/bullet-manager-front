import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Authorization from '../services/authorization/authorization';
import { tLoginUserData, tRegistrationUserData } from '../types/forms/authForm';

type tUser =
	| {
			id: number;
			email: string;
			login: string;
	  }
	| {}
	| undefined;

type tAuthContex = {
	user: tUser;
	error: string;
	signIn: (data: tLoginUserData) => void;
	signUp: (data: tRegistrationUserData) => void;
	signOut: () => void;
};

type tLocation = {
	hash: string;
	key: string;
	pathname: string;
	search: string;
	state: {
		from: tLocation;
	} | null;
};

const AuthContext = createContext<tAuthContex>({
	user: {},
	error: '',
	signIn: () => {},
	signUp: () => {},
	signOut: () => {}
});

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
	const navigate = useNavigate();
	const location = useLocation() as tLocation;

	const [user, setUser] = useState<tUser>({});
	const [error, setError] = useState('');

	const authorizationService = new Authorization();
	let from: string = '/app';

	if (location.state) from = location.state.from?.pathname;

	useEffect(() => {
		const lsUser = localStorage.getItem('user');
		if (!lsUser) signOut();
		else setUser(user);
	}, []);

	const signIn = async (data: tLoginUserData) => {
		const response = await authorizationService.login(data);
		if (response.error) return setError(response.message);
		setUser(response.user);
		setError('');
		localStorage.setItem('user', JSON.stringify(response.user));
		navigate(from, { replace: true });
	};

	const signUp = async (data: tRegistrationUserData) => {
		const response = await authorizationService.register(data);
		if (response.error) return setError(response.message);
		navigate('/login');
	};

	const signOut = async () => {
		localStorage.removeItem('user');
		await authorizationService.logout();
		navigate('/', { replace: true });
		setUser(undefined);
	};

	return (
		<AuthContext.Provider value={{ user, error, signIn, signUp, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
