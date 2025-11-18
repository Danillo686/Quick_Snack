// screens/Configuracao.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Configuracao() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>⚙️ Tela de Configuração</Text>
      <Text>Aqui você pode ajustar preferências do app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});
