import { createContext } from 'react';

interface AuthContextInterface {
	id: string;
	isAuth: boolean;
	isLoading: boolean;
	setAuth: (id: string) => void;
	logout: () => void;
}

const AuthContextDefaultValue: AuthContextInterface = {
	id: '',
	isAuth: false,
	isLoading: true,
	logout: () => '',
	setAuth: () => '',
};

export const AuthContext = createContext<AuthContextInterface>(
	AuthContextDefaultValue,
);
