import * as React from "react";
import { StyleSheet, Text } from "react-native";

type Override = "style";
type TextProps = React.ComponentProps<typeof Text>;

export const Label: React.FC<Omit<TextProps, Override>> = (props) => {
  return <Text {...props} style={styles.label} />;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    color: "#52525b",
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
  },
});
