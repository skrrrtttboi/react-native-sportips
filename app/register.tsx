import { Button } from "@/components/button";
import { Field, Form } from "@/components/form";
import { Header, Subtitle, Title } from "@/components/header";
import { Label } from "@/components/label";
import { Link } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

import { FormInput } from "@/components/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z
  .object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(8),
    confirm: z.string().min(8),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export default function RegisterScreen() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Header>
        <Title>Welcome to Sportips</Title>
        <Subtitle>
          We&apos;re here to help you find the best sports tips and tricks
        </Subtitle>
      </Header>

      <Form>
        <Field>
          <Label>Username</Label>
          <FormInput
            name="name"
            control={form.control}
            placeholder="Enter your name"
          />
        </Field>
        <Field>
          <Label>Email</Label>
          <FormInput
            name="email"
            control={form.control}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Enter your email"
          />
        </Field>
        <Field>
          <Label>Password</Label>
          <FormInput
            name="password"
            control={form.control}
            secureTextEntry={true}
            placeholder="Enter your password"
          />
        </Field>
        <Field>
          <Label>Confirm Password</Label>
          <FormInput
            name="confirm"
            control={form.control}
            secureTextEntry={true}
            placeholder="Confirm your password"
          />
        </Field>
      </Form>

      <View style={styles.actions}>
        <Button onPress={form.handleSubmit(onSubmit)} icon={ArrowRight}>
          Create account
        </Button>
        <Link href="/login">
          <Text style={styles.text}>Already have an account?</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 28,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  actions: {
    gap: 10,
  },
  text: {
    fontSize: 15,
    color: "#52525b",
    textAlign: "center",
    fontWeight: "400",
    fontFamily: "Inter_400Regular",
  },
});
