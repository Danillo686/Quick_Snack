// screens/Home.js
import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Login Aluno" onPress={() => navigation.navigate("LoginAluno")} />
      <Button title="Login Admin" onPress={() => navigation.navigate("LoginAdmin")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
