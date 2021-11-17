import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import service from 'src/services/Service';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [isLoggedUser, setIsLoggedUser] = useState(false);
	// const { dispatchError } = useError();

	// useEffect(() => {
	// 	const token = localStorage.getItem('token');
	// 	if (token) {
	// 		(async () => {
	// 			try {
	// 				const response = await axios.get('/me', {
	// 					headers: {
	// 						authorization: `Bearer ${token}`
	// 					}
	// 				});
	// 				setUser(response.data);
	// 			} catch (e) {
	// 				console.log(e);
	// 			}
	// 		})();
	// 	}
	// }, []);

	const signIn = async (data) => {
		const response = await service.login(data);
		if (response.error) return;
		setIsLoggedUser(true);
		localStorage.setItem('token', response.refreshToken);
	};

	const signOut = async () => {
		const response = await service.logout();
		setIsLoggedUser(false);
		console.log(response);
	};

	return (
		<AuthContext.Provider value={{ isLoggedUser, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};
