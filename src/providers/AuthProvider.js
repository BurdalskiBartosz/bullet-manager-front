import React, { createContext, useEffect, useState } from 'react';
import service from 'src/services/Service';

export const AuthContext = createContext({
	isLoggedUser: false,
	signIn: () => {},
	signOut: () => {},
	signUp: () => {}
});

export const AuthProvider = ({ children }) => {
	const [isLoggedUser, setIsLoggedUser] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) signOut();
		else setIsLoggedUser(true);
	}, []);

	const signIn = async (data) => {
		const response = await service.login(data);
		if (response.error) return;
		setIsLoggedUser(true);
		localStorage.setItem('token', response.refreshToken);
	};

	const signUp = async (data) => {
		await service.register(data);
	};

	const signOut = async () => {
		const response = await service.logout();
		localStorage.removeItem('token');
		if (response) setIsLoggedUser(false);
	};

	return (
		<AuthContext.Provider value={{ isLoggedUser, signIn, signOut, signUp }}>
			{children}
		</AuthContext.Provider>
	);
};
