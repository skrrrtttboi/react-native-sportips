import { Button } from "@/components/button";
import { Field, Form } from "@/components/form";
import { Header, Subtitle, Title } from "@/components/header";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Link } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function RegisterScreen() {
  const handleSubmit = () => {
    console.log("Login");
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
          <Input autoCapitalize="sentences" placeholder="Enter your name" />
        </Field>
        <Field>
          <Label>Email</Label>
          <Input keyboardType="email-address" placeholder="Enter your email" />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input secureTextEntry={true} placeholder="Enter your password" />
        </Field>
        <Field>
          <Label>Confirm Password</Label>
          <Input secureTextEntry={true} placeholder="Confirm your password" />
        </Field>
      </Form>

      <View style={styles.actions}>
        <Button onPress={handleSubmit} icon={ArrowRight}>
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
