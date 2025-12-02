import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function LoginAluno({ navigation }) {
  const { salvarUsuario, themeColors } = useContext(UserContext);
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");

  const handleLogin = () => {
   if (!nome || !matricula) {
      Alert.alert("Aviso", "Por favor, preencha nome e matrícula.");
      return;
    }

    salvarUsuario({ tipo: "aluno", nome, matricula });
    navigation.replace("Main");
  };

    return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>Login do Aluno</Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: themeColors.card,
            placeholderTextColor: "#4e4b4b",
            backgroundColor: themeColors.card, // já vem com opacidade do theme
            borderColor: themeColors.border,
            color: themeColors.inputText,
            color: themeColors.text,
            fontFamily: themeColors.fontFamily,
          },
        ]}
        placeholder="Nome"
        placeholderTextColor={themeColors.border}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={[
          styles.input,
          { 
            backgroundColor: themeColors.card,
            borderColor: themeColors.border,
            color: themeColors.inputText,
            color: themeColors.text,
            fontFamily: themeColors.fontFamily,
          },
        ]}
        placeholder="Matrícula"
        placeholderTextColor={themeColors.border}
        value={matricula}
        onChangeText={setMatricula}
      />

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: themeColors.loginAlunoButton, borderColor: themeColors.border },
        ]}
        onPress={handleLogin}
      >
        <Text style={[styles.buttonText, { color: themeColors.text }]}>Entrar</Text>
        {/* Texto com cor fixa independente do theme */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { marginBottom: 20, fontSize: 32, fontWeight: "bold", textAlign: "center" },
  title: { marginBottom: 20, fontSize: 36, fontWeight: "bold", textAlign: "center", },
  input: {
    padding: 15,
    width: "70%",
    width: "80%",
    height: 50,
    borderRadius: 10,
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
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
