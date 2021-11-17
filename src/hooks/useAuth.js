import { useContext } from 'react';
import { AuthContext } from 'src/providers/AuthProvider';

export const useAuth = () => {
	const auth = useContext(AuthContext);
	if (!auth) {
		throw Error('useAuth needs to be used inside AuthContext');
	}
	return auth;
};
