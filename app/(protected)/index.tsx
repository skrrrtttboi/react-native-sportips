import { Button } from '@/components/button';
import { Card, CardContent, CardDescription, CardImage, CardTitle } from '@/components/card';
import { Header, Subtitle, Title } from '@/components/header';
import { useAuth } from '@/hooks/use-auth';
import { axios } from '@/libs/axios';
import { Sport } from '@/libs/types';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const { user } = useAuth();
	const { data, isLoading } = useQuery<Sport[]>({
		queryKey: ['sports'],
		queryFn: async () => {
			const { data } = await axios.get('/sports');
			return data;
		},
		initialData: [],
	});

	if (!user) return null;

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
				<ScrollView contentContainerStyle={styles.container}>
					<Header>
						<Title>Welcome to Sportips</Title>
						<Subtitle>
							Sportips is more than just an app, it&apos;s a growing community of players, learners,
							and sports lovers.
						</Subtitle>
					</Header>
					{isLoading && <Text>Loading...</Text>}
					{data.map((item) => (
						<Link
							href={{
								pathname: '/sports/[sport]',
								params: { sport: item.id },
							}}
							key={item.id}
							asChild>
							<Card>
								<CardImage source={item.image} />
								<Button style={styles.custom}>{item.name}</Button>
								<CardContent>
									<CardTitle>{item.name}</CardTitle>
									<CardDescription>{item.description}</CardDescription>
								</CardContent>
							</Card>
						</Link>
					))}
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 28,
		padding: 20,
		backgroundColor: '#fff',
	},
	actions: {
		gap: 10,
	},
	custom: {
		margin: 16,
		position: 'absolute',
		borderWidth: 1,
		zIndex: 10,
		borderColor: 'rgba(255, 255, 255, 0.3)',
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
	},
});
