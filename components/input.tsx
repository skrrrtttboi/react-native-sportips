import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type Override = 'style';
type TextInputProps = React.ComponentProps<typeof TextInput>;
export type InputProps = Omit<TextInputProps, Override>;

export const Input: React.FC<InputProps> = (props) => {
	const [focused, setFocused] = React.useState(false);

	const handleFocus = (e: any) => {
		setFocused(true);
		props.onFocus?.(e);
	};

	const handleBlur = (e: any) => {
		setFocused(false);
		props.onBlur?.(e);
	};

	return (
		<TextInput
			{...props}
			style={[styles.input, { borderColor: focused ? '#10b981' : '#e4e4e7' }]}
			onFocus={handleFocus}
			onBlur={handleBlur}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 16,
		fontSize: 15,
		fontWeight: '400',
		fontFamily: 'Inter_400Regular',
	},
});
