import { Button } from '@/components/button';
import { Field, Form } from '@/components/form';
import { Header, Subtitle, Title } from '@/components/header';
import { Label } from '@/components/label';
import { Link } from 'expo-router';
import { ArrowRight } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { FormInput } from '@/components/form-input';
import { useAuth } from '@/hooks/use-auth';
import { toast } from '@/libs/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export default function LoginScreen() {
	const { signin } = useAuth();
	const [loading, setLoading] = React.useState(false);

	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof schema>) => {
		try {
			setLoading(true);
			await signin(data);
			toast('Login successful');
		} catch (error: unknown) {
			if (error instanceof AxiosError) toast(error.response?.data.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Header>
				<Title>Log in to your account</Title>
				<Subtitle>Log in to your account to access all features and functionalities</Subtitle>
			</Header>

			<Form>
				<Field>
					<Label>Email</Label>
					<FormInput
						name='email'
						control={form.control}
						autoCapitalize='none'
						keyboardType='email-address'
						placeholder='Enter your email'
					/>
				</Field>
				<Field>
					<Label>Password</Label>
					<FormInput
						name='password'
						control={form.control}
						autoCapitalize='none'
						secureTextEntry={true}
						placeholder='Enter your password'
					/>
				</Field>
			</Form>

			<View style={styles.actions}>
				<Button loading={loading} icon={ArrowRight} onPress={form.handleSubmit(onSubmit)}>
					Log in
				</Button>
				<Link href='/register'>
					<Text style={styles.text}>Don&apos;t have an account?</Text>
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 28,
		padding: 20,
		backgroundColor: '#fff',
		justifyContent: 'center',
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
