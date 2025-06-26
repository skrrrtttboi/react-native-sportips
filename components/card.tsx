import { Image } from 'expo-image';
import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Override = 'style';
type ViewProps = React.ComponentProps<typeof View>;
type TextProps = React.ComponentProps<typeof Text>;
type ImageProps = React.ComponentProps<typeof Image>;

export const Card: React.FC<Omit<ViewProps, Override>> = (props) => {
	return <Pressable {...props} style={styles.card} />;
};

export const CardImage: React.FC<Omit<ImageProps, Override | 'contentFit'>> = (props) => {
	return <Image {...props} contentFit='cover' style={styles.image} />;
};

export const CardContent: React.FC<Omit<ViewProps, Override>> = (props) => {
	return <View {...props} style={styles.content} />;
};

export const CardTitle: React.FC<Omit<TextProps, Override>> = (props) => {
	return <Text {...props} style={styles.title} />;
};

export const CardDescription: React.FC<Omit<TextProps, Override>> = (props) => {
	return <Text {...props} style={styles.description} />;
};

const styles = StyleSheet.create({
	card: {
		borderWidth: 1,
		borderRadius: 12,
		borderColor: '#e4e4e7',
		overflow: 'hidden',
		position: 'relative',
	},
	image: {
		height: 200,
		width: '100%',
		backgroundColor: '#ccc',
	},
	content: {
		flex: 1,
		padding: 16,
	},
	title: {
		fontSize: 16,
		color: '#18181b',
		fontWeight: '600',
		fontFamily: 'Inter_600SemiBold',
	},
	description: {
		fontSize: 15,
		color: '#52525b',
		fontWeight: '400',
		fontFamily: 'Inter_400Regular',
	},
});
