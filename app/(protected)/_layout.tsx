import { useAuth } from '@/hooks/use-auth';
import { Redirect, Stack } from 'expo-router';
import { LogOut } from 'lucide-react-native';
import * as React from 'react';

export default function Layout() {
	const { loading, user, signout } = useAuth();

	if (loading) return null;
	else if (!user) return <Redirect href='/login' />;

	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					title: 'Home',
					headerShadowVisible: false,
					headerRight: () => <LogOut size={20} onPress={signout} aria-label='Log out' />,
				}}
			/>
		</Stack>
	);
}
