import * as React from "react";
import { StyleSheet, View } from "react-native";

type Override = "style";
type ViewProps = React.ComponentProps<typeof View>;

export const Form: React.FC<Omit<ViewProps, Override>> = (props) => {
  return <View {...props} style={styles.form} />;
};

export const Field: React.FC<Omit<ViewProps, Override>> = (props) => {
  return <View {...props} style={styles.field} />;
};

const styles = StyleSheet.create({
  form: {
    gap: 10,
  },
  field: {
    gap: 4,
  },
});
