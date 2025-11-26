import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function LoginAdmin({ navigation }) {
  const { setUser, themeColors } = useContext(UserContext);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!usuario || !senha) {
      Alert.alert("Aviso", "Por favor, preencha usuário e senha.");
      return;
    }

    if (usuario === "admin" && senha === "1234") {
      setUser({ tipo: "admin", usuario });
      Alert.alert("Sucesso", "Login realizado com sucesso!");
      navigation.replace("Main");
    } else {
      Alert.alert("Erro", "Usuário ou senha inválidos!");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>🔑 Login do Administrador</Text>

      <TextInput
        style={[
          styles.input,
          { backgroundColor: themeColors.card, borderColor: themeColors.border, color: themeColors.text },
        ]}
        placeholder="Usuário"
        placeholderTextColor={themeColors.border}
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      <TextInput
        style={[
          styles.input,
          { backgroundColor: themeColors.card, borderColor: themeColors.border, color: themeColors.text },
        ]}
        placeholder="Senha"
        placeholderTextColor={themeColors.border}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: themeColors.loginAdminButton, borderColor: themeColors.border },
        ]}
        onPress={handleLogin}
      >
        <Text style={[styles.buttonText, { color: themeColors.text }]}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { marginBottom: 20, fontSize: 32, fontWeight: "bold", textAlign: "center" },
  input: {
    padding: 15,
    width: "70%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    alignSelf: "center",
  },
  button: {
    width: "40%",
    height: 50,
    borderRadius: 7,
    borderWidth: 2,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: { fontSize: 18, fontWeight: "bold", textAlign: "center" },
});
