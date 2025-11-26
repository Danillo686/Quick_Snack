import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function Configuracao() {
  const { tema, alternarTema, themeColors } = useContext(UserContext);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.text, { color: themeColors.text }]}>⚙️ Tela de Configuração</Text>

      <Text style={{ color: themeColors.text }}>
        Aqui você pode ajustar preferências do app.
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: themeColors.highlight, borderColor: themeColors.border }]}
        onPress={alternarTema}
      >
        <Text style={[styles.buttonText, { color: themeColors.text }]}>
          Alternar para tema {tema === "light" ? "escuro" : "claro"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  text: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { fontSize: 16, fontWeight: "bold" },
});
