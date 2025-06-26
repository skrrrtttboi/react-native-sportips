import { Session } from '@/contexts/auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base, { isAxiosError } from 'axios';

const axios = base.create({
	baseURL: process.env.EXPO_PUBLIC_API_URL,
	withCredentials: true,
});

axios.interceptors.request.use(async (config) => {
	const session = await AsyncStorage.getItem('session');
	if (session) {
		const parsed = JSON.parse(session) as Session;
		config.headers.Authorization = `Bearer ${parsed.token}`;
	}
	return config;
});

let handleSignout = () => {};

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) handleSignout();
		return Promise.reject(error);
	}
);

export const onUnautenticated = (callback: () => void) => {
	handleSignout = callback;
};

export { axios, isAxiosError };
