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

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginScreen() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Header>
        <Title>Log in to your account</Title>
        <Subtitle>
          Log in to your account to access all features and functionalities
        </Subtitle>
      </Header>

      <Form>
        <Field>
          <Label>Email</Label>
          <FormInput
            name="email"
            control={form.control}
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
      </Form>

      <View style={styles.actions}>
        <Button onPress={form.handleSubmit(onSubmit)} icon={ArrowRight}>
          Log in
        </Button>
        <Link href="/register">
          <Text style={styles.text}>Don&apos;t have an account?</Text>
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
