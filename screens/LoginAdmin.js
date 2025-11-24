// screens/LoginAdmin.js
import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function LoginAdmin({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!usuario || !senha) {
      alert("Por favor, preencha usuário e senha."); // funciona no navegador
      return;
    }

    if (usuario === "admin" && senha === "1234") {
      setUser({ tipo: "admin", usuario });
      alert("Login realizado com sucesso!");
      navigation.replace("Main");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login do Administrador</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, marginBottom: 20, textAlign: "center", fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#fafafa",
  },
});
