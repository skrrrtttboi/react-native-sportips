import { Header, Subtitle, Title } from '@/components/header';
import { Spinner } from '@/components/spinner';
import { axios } from '@/libs/axios';
import { toast } from '@/libs/toast';
import { Content, Sport } from '@/libs/types';
import { useQuery } from '@tanstack/react-query';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Loader2 } from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type SportDetails = Sport & {
	contents: Content[];
};

export default function SportScreen() {
	const router = useRouter();
	const { sport } = useLocalSearchParams();

	const { data, isLoading, error } = useQuery<SportDetails>({
		queryKey: ['sport' + sport],
		queryFn: async () => {
			const { data } = await axios.get('/sports/' + sport);
			return data;
		},
	});

	React.useEffect(() => {
		if (error) {
			toast((error as Error).message);
			router.replace('/');
		}
	}, [error, router]);

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
				<ScrollView>
					{isLoading && (
						<View style={styles.loading}>
							<View style={styles.loader}>
								<Spinner>
									<Loader2 size={18} />
								</Spinner>
								<Text>Loading...</Text>
							</View>
						</View>
					)}

					{data && (
						<React.Fragment>
							<Image source={{ uri: data.image }} style={styles.image} />
							<View style={styles.container}>
								<Header>
									<Title>{data.name}</Title>
									<Subtitle>{data.description}</Subtitle>
								</Header>
								{data.contents.map((item) => (
									<React.Fragment key={item.id}>
										<Text style={styles.heading}>{item.title}</Text>
										<Text style={styles.body}>{item.body}</Text>
									</React.Fragment>
								))}
							</View>
						</React.Fragment>
					)}
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 16,
		padding: 20,
		backgroundColor: '#fff',
	},
	actions: {
		gap: 10,
	},
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loader: {
		gap: 8,
		flexDirection: 'row',
	},
	text: {
		fontSize: 15,
		color: '#52525b',
		textAlign: 'center',
		fontWeight: '400',
		fontFamily: 'Inter_400Regular',
	},
	image: {
		height: 300,
		width: '100%',
		backgroundColor: '#ccc',
	},
	content: {
		gap: 2,
	},
	heading: {
		fontSize: 15,
		color: '#52525b',
		fontWeight: '600',
		fontFamily: 'Inter_600SemiBold',
	},
	body: {
		fontSize: 15,
		color: '#52525b',
		fontWeight: '400',
		fontFamily: 'Inter_400Regular',
	},
});
