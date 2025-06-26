import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Override = 'style';
type ViewProps = React.ComponentProps<typeof View>;
type TextProps = React.ComponentProps<typeof Text>;

export const Header: React.FC<Omit<ViewProps, Override>> = (props) => {
	return <View {...props} style={styles.header} />;
};

export const Title: React.FC<Omit<TextProps, Override>> = (props) => {
	return <Text {...props} style={styles.title} />;
};

export const Subtitle: React.FC<Omit<TextProps, Override>> = (props) => {
	return <Text {...props} style={styles.subtitle} />;
};

const styles = StyleSheet.create({
	header: {
		gap: 4,
	},
	title: {
		fontSize: 24,
		color: '#18181b',
		fontWeight: '700',
		fontFamily: 'Inter_700Bold',
	},
	subtitle: {
		fontSize: 15,
		color: '#52525b',
		fontWeight: '400',
		fontFamily: 'Inter_400Regular',
	},
});
