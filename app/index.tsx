import { Link } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Log in to your account</Text>
        <Text style={styles.subtitle}>
          Log in to your account to access all features and functionalities
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Enter your email"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter your password"
          />
        </View>
      </View>

      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={styles.span}>Log in</Text>
        <ArrowRight size={20} color="#fff" />
      </Pressable>

      <Link href="/">
        <Text style={styles.text}>Don&apos;t have an account?</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#18181b",
  },
  subtitle: {
    fontSize: 16,
    color: "#52525b",
  },
  form: {
    gap: 10,
  },
  field: {
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    borderColor: "#e4e4e7",
    paddingHorizontal: 16,
  },
  button: {
    gap: 8,
    flexDirection: "row",
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#18181b",
  },
  span: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  text: {
    fontSize: 16,
    color: "#52525b",
    textAlign: "center",
  },
});
