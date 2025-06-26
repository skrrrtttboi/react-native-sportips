import * as React from "react";
import { StyleSheet, TextInput } from "react-native";

type Override = "style" | "onFocus" | "onBlur";
type TextInputProps = React.ComponentProps<typeof TextInput>;

export const Input: React.FC<Omit<TextInputProps, Override>> = (props) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <TextInput
      {...props}
      style={[
        styles.input,
        {
          borderColor: focused ? "#10b981" : "#e4e4e7",
        },
      ]}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
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
    fontWeight: "400",
    fontFamily: "Inter_400Regular",
  },
});
