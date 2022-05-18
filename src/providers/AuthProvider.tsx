import {
	createContext,
	FC,
	ReactNode,
	useContext,
	useEffect,
	useState
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Authorization from '../services/authorization/authorization';
import { tLoginUserData, tRegistrationUserData } from '../types/forms/authForm';

type tUser = {
	id: number;
	email: string;
	login: string;
} | null;

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
	user: null,
	error: '',
	signIn: () => {},
	signUp: () => {},
	signOut: () => {}
});

export const AuthProvider: FC<ReactNode> = ({ children }) => {
	const { getItem, setItem, removeItem } = useLocalStorage();
	const navigate = useNavigate();
	const location = useLocation() as tLocation;
	const [error, setError] = useState<string>('');
	const userLS = getItem('user');

	const [user, setUser] = useState<tUser | null>(
		typeof userLS === 'object' ? userLS : null
	);

	const authorizationService = new Authorization();
	let from: string = '/app';

	if (location.state) from = location.state.from?.pathname;

	useEffect(() => {
		if (!userLS) signOut();
		else setUser(userLS);
	}, []);

	const signIn = async (data: tLoginUserData) => {
		const response = await authorizationService.login(data);
		if (response.error) return setError(response.message);
		setUser(response.user);
		setError('');
		setItem('user', response.user);
		navigate(from, { replace: true });
	};

	const signUp = async (data: tRegistrationUserData) => {
		const response = await authorizationService.register(data);
		if (response.error) return setError(response.message);
		navigate('/login');
	};

	const signOut = async () => {
		removeItem('user');
		await authorizationService.logout();
		navigate('/', { replace: true });
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, error, signIn, signUp, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
