// screens/LoginAluno.js
import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function LoginAluno({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");

  const handleLogin = () => {
    if (!nome || !matricula) {
      alert("Por favor, preencha nome e matrícula.");
      return;
    }
    // salva os dados digitados no contexto
    setUser({ tipo: "aluno", nome, matricula });
    // redireciona para o fluxo principal (Drawer + Tabs)
    navigation.replace("Main");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login do Aluno</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
