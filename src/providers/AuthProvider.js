import React, { createContext, useEffect, useState } from 'react';
import service from 'src/services/Service';

export const AuthContext = createContext({
	isLoggedUser: false,
	error: '',
	signIn: () => {},
	signOut: () => {},
	signUp: () => {}
});

export const AuthProvider = ({ children }) => {
	const [isLoggedUser, setIsLoggedUser] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) signOut();
		else setIsLoggedUser(true);
	}, []);

	const signIn = async (data) => {
		const response = await service.login(data);
		if (response.error) return setError(response.message);
		setIsLoggedUser(true);
		setError('');
		localStorage.setItem('token', response.refreshToken);
	};

	const signUp = async (data) => {
		const response = await service.register(data);
		if (response.error) return setError(response.message);
		await signIn(data);
	};

	const signOut = async () => {
		const response = await service.logout();
		localStorage.removeItem('token');
		if (response) setIsLoggedUser(false);
	};

	return (
		<AuthContext.Provider
			value={{ isLoggedUser, error, signIn, signOut, signUp }}
		>
			{children}
		</AuthContext.Provider>
	);
};
