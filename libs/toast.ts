import { Platform, ToastAndroid } from 'react-native';

export const toast = (message: string | undefined) => {
	if (!message) return;
	if (Platform.OS === 'android') ToastAndroid.show(message, ToastAndroid.SHORT);
	console.log(message);
};
