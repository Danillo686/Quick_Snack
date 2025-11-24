// screens/Perfil.js
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function Perfil() {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Perfil do Aluno</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{user?.nome || "Não informado"}</Text>
      <Text style={styles.label}>Matrícula:</Text>
      <Text style={styles.value}>{user?.matricula || "Não informado"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  label: { fontSize: 16, marginTop: 10, fontWeight: "bold" },
  value: { fontSize: 16, marginBottom: 10, color: "#333" },
});
