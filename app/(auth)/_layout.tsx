import { useAuth } from '@/hooks/use-auth';
import { Redirect, Stack } from 'expo-router';
import * as React from 'react';

export default function Layout() {
	const { loading, user } = useAuth();

	if (loading) return null;
	else if (user) return <Redirect href='/' />;

	return <Stack screenOptions={{ headerShown: false }} />;
}
