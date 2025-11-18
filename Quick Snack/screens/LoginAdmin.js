// screens/LoginAdmin.js
import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function LoginAdmin({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // salva os dados do admin no contexto
    setUser({ tipo: "admin", nome });
    // redireciona para o Cardápio
    navigation.navigate("Cardapio");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login do Admin</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
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
