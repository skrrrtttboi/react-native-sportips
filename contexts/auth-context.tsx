import { axios, onUnautenticated } from '@/libs/axios';
import { toast } from '@/libs/toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import * as React from 'react';

export interface Session {
	token: string;
	user: User;
}

export interface User {
	id: number;
	name: string;
	email: string;
	role: string;
	created_at: Date;
	updated_at: Date;
	email_verified_at: Date;
}

interface AuthContextType {
	loading: boolean;
	user: User | null;
	token: string | null;
	signin: (credential: { email: string; password: string }) => Promise<void>;
	signup: (credential: {
		name: string;
		email: string;
		password: string;
		password_confirmation: string;
	}) => Promise<void>;
	signout: () => Promise<void>;
}

const STORAGE_KEY = 'session';

export const AuthContext = React.createContext<AuthContextType>({
	loading: true,
	user: null,
	token: null,
	signin: async () => {},
	signup: async () => {},
	signout: async () => {},
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const [loading, setLoading] = React.useState(true);
	const [session, setSession] = React.useState<Session | null>(null);

	const { user, token } = React.useMemo(() => {
		if (!session) return { user: null, token: null };
		return session;
	}, [session]);

	onUnautenticated(async () => {
		if (!session) return;
		await signout();
	});

	React.useEffect(() => {
		const load = async () => {
			try {
				setLoading(true);
				const raw = await AsyncStorage.getItem(STORAGE_KEY);
				const parsed = raw ? JSON.parse(raw) : null;
				setSession(parsed);
			} catch (error) {
				toast(error instanceof Error ? error.message : 'Something went wrong');
			} finally {
				setLoading(false);
			}
		};

		load();
	}, []);

	const save = async (session: Session) => {
		await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(session));
		setSession(session);
	};

	const clear = async () => {
		await AsyncStorage.removeItem(STORAGE_KEY);
		setSession(null);
	};

	const signin = async (credential: { email: string; password: string }) => {
		const { data } = await axios.post('/login', credential);
		await save(data);
	};

	const signup = async (credential: {
		name: string;
		email: string;
		password: string;
		password_confirmation: string;
	}) => {
		const { data } = await axios.post('/register', credential);
		await save(data);
	};

	const signout = async () => {
		await axios.post('/logout');
		await clear();
		router.replace('/login');
	};

	return (
		<AuthContext.Provider
			value={{
				loading,
				user,
				token,
				signin,
				signup,
				signout,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
