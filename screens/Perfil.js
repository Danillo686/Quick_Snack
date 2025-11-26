import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function Perfil() {
  const { user, salvarUsuario, themeColors } = useContext(UserContext);

  // estados locais para edição
  const [nome, setNome] = useState(user?.nome || "");
  const [matricula, setMatricula] = useState(user?.matricula || "");

  const salvar = () => {
    salvarUsuario({ nome, matricula });
    alert("Dados salvos com sucesso!");
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>👤 Perfil do Aluno</Text>

      <Text style={[styles.label, { color: themeColors.text }]}>Nome:</Text>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: themeColors.card, borderColor: themeColors.border, color: themeColors.text },
        ]}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        placeholderTextColor={themeColors.text}
      />

      <Text style={[styles.label, { color: themeColors.text }]}>Matrícula:</Text>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: themeColors.card, borderColor: themeColors.border, color: themeColors.text },
        ]}
        value={matricula}
        onChangeText={setMatricula}
        placeholder="Digite sua matrícula"
        placeholderTextColor={themeColors.text}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Salvar Dados" onPress={salvar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  label: { fontSize: 16, marginTop: 10, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
});
