import * as React from 'react';
import { Animated, Easing } from 'react-native';

export const Spinner: React.FC<React.PropsWithChildren> = ({ children }) => {
	const value = new Animated.Value(0);
	const spin = React.useRef(value).current;

	React.useEffect(() => {
		Animated.loop(
			Animated.timing(spin, {
				toValue: 1,
				duration: 800,
				easing: Easing.linear,
				useNativeDriver: true,
			})
		).start();
	}, [spin]);

	const rotate = spin.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	});

	return <Animated.View style={{ transform: [{ rotate: rotate }] }}>{children}</Animated.View>;
};
