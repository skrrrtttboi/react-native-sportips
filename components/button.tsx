import { Spinner } from '@/components/spinner';
import { Loader2, LucideIcon } from 'lucide-react-native';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Override = 'style';
type TouchableOpacityProps = React.ComponentProps<typeof TouchableOpacity>;

interface ButtonProps extends Omit<TouchableOpacityProps, Override> {
	children: React.ReactNode;
	loading?: boolean;
	icon?: LucideIcon;
}

export const Button: React.FC<ButtonProps> = ({ loading = false, ...props }) => {
	return (
		<TouchableOpacity
			{...props}
			style={[styles.button, { opacity: loading ? 0.5 : 1 }]}
			activeOpacity={0.8}
			disabled={loading}>
			<Text style={styles.span}>{props.children}</Text>
			{loading ? (
				<Spinner>
					<Loader2 size={18} color='#fff' />
				</Spinner>
			) : (
				props.icon && <props.icon size={18} color='#fff' />
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		gap: 8,
		flexDirection: 'row',
		borderRadius: 999,
		paddingVertical: 12,
		paddingHorizontal: 16,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#18181b',
		fontWeight: '600',
		fontFamily: 'Inter_600SemiBold',
	},
	span: {
		fontSize: 16,
		color: '#fff',
		fontWeight: '500',
		fontFamily: 'Inter_500Medium',
	},
});
