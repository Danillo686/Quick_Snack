import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function Perfil() {
  const { user, salvarUsuario, themeColors } = useContext(UserContext);

  const [nome, setNome] = useState(user?.nome || "");
  const [matricula, setMatricula] = useState(user?.matricula || "");

  const salvar = () => {
    salvarUsuario({ nome, matricula });
    alert("Dados salvos com sucesso!");
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <View style={[styles.card, { backgroundColor: themeColors.card }]}>
        <Text style={[styles.title, { color: themeColors.text }]}>👤 Perfil do Aluno</Text>

        <View style={styles.field}>
          <Text style={[styles.label, { color: themeColors.text }]}>Nome</Text>
          <TextInput
            style={[
              styles.input,
              { borderColor: themeColors.border, color: themeColors.text },
            ]}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
            placeholderTextColor={themeColors.text}
          />
        </View>

        <View style={styles.field}>
          <Text style={[styles.label, { color: themeColors.text }]}>Matrícula</Text>
          <TextInput
            style={[
              styles.input,
              { borderColor: themeColors.border, color: themeColors.text },
            ]}
            value={matricula}
            onChangeText={setMatricula}
            placeholder="Digite sua matrícula"
            placeholderTextColor={themeColors.text}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: themeColors.highlight }]}
          onPress={salvar}
        >
          <Text style={[styles.buttonText, { color: themeColors.background }]}>
            💾 Salvar Dados
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "95%",
    borderRadius: 18,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
