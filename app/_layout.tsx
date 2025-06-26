import { AuthProvider } from '@/contexts/auth-context';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_500Medium } from '@expo-google-fonts/inter/500Medium';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Inter_700Bold } from '@expo-google-fonts/inter/700Bold';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
	});

	React.useEffect(() => {
		if (loaded || error) SplashScreen.hideAsync();
	}, [loaded, error]);

	if (!loaded && !error) return null;

	return (
		<AuthProvider>
			<StatusBar style='auto' />
			<Stack>
				<Stack.Screen name='(protected)' options={{ headerShown: false, animation: 'none' }} />
				<Stack.Screen name='(auth)' options={{ headerShown: false, animation: 'none' }} />
			</Stack>
		</AuthProvider>
	);
}
