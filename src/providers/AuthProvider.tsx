import React, { createContext, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { tLoginUserData, tRegistrationUserData } from '../types/forms/authForm';

type tAuthContex = {
	user: boolean;
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
	user: false,
	signIn: () => {},
	signUp: () => {},
	signOut: () => {}
});

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
	const navigate = useNavigate();
	const location = useLocation() as tLocation;
	const [user, setUser] = useState(false);

	let from: string = '/app';
	if (location.state) from = location.state.from?.pathname;

	const signIn = (data: tLoginUserData) => {
		const { login, password } = data;
		if (login !== 'admin' && password !== 'admin123') return;
		setUser(true);
		navigate(from, { replace: true });
	};

	const signUp = (data: tRegistrationUserData) => {
		console.log(data);
	};

	const signOut = () => {
		setUser(false);
	};

	return (
		<AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
