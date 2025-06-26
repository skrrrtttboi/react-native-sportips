import { Header, Subtitle, Title } from '@/components/header';
import { useAuth } from '@/hooks/use-auth';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
	const { user } = useAuth();
	if (!user) return null;

	return (
		<View style={styles.container}>
			<Header>
				<Title>Hello {user.name}</Title>
				<Subtitle>Protected Screen</Subtitle>
			</Header>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 28,
		padding: 20,
		backgroundColor: '#fff',
	},
	actions: {
		gap: 10,
	},
	text: {
		fontSize: 15,
		color: '#52525b',
		textAlign: 'center',
		fontWeight: '400',
		fontFamily: 'Inter_400Regular',
	},
});
