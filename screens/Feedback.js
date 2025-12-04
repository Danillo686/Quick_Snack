import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function Feedbacks() {
  const { feedbacks, themeColors, limparFeedbacks, user } = useContext(UserContext);

  // Função de confirmação antes de limpar
  const confirmarLimpeza = () => {
    Alert.alert(
      "Confirmar",
      "Deseja apagar todos os feedbacks?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Apagar", style: "destructive", onPress: () => limparFeedbacks() }
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>📋 Feedbacks Recebidos</Text>

      {feedbacks.length === 0 ? (
        <Text style={{ color: themeColors.text }}>Nenhum feedback enviado ainda.</Text>
      ) : (
        <FlatList
          data={feedbacks}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={[styles.card, { backgroundColor: themeColors.card }]}>
              <Text style={[styles.autor, { color: themeColors.highlight }]}>👤 {item.autor}</Text>
              <Text style={{ color: themeColors.text }}>{item.texto}</Text>
              <Text style={{ color: themeColors.border, fontSize: 12, marginTop: 4 }}>
                📅 {item.data}
              </Text>
            </View>
          )}
        />
      )}

      {/* Botão visível apenas para admin */}
      {user?.tipo === "admin" && feedbacks.length > 0 && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: themeColors.loginAdminButton }]}
          onPress={confirmarLimpeza}
        >
          <Text style={[styles.buttonText, { color: themeColors.background }]}>
            🗑️ Limpar Feedbacks
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  autor: { fontWeight: "bold", marginBottom: 5 },
  button: {
    marginTop: 20,
    padding: 14,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: { fontSize: 16, fontWeight: "bold" },
});
