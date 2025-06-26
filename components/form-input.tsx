import { Input, InputProps } from "@/components/input";
import * as React from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { StyleSheet, Text } from "react-native";

type Override = "value" | "onChangeText" | "onBlur" | "defaultValue";

export interface FormInputProps<T extends FieldValues>
  extends Omit<InputProps, Override>,
    UseControllerProps<T> {
  placeholder: string;
}

export const FormInput = <T extends FieldValues>(props: FormInputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <React.Fragment>
      <Input
        {...props}
        value={field.value}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 14,
    color: "#ef4444",
    fontWeight: "400",
    fontFamily: "Inter_400Regular",
  },
});
