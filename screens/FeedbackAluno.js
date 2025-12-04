import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function FeedbackAluno() {
  const { adicionarFeedback, themeColors, user } = useContext(UserContext);
  const [texto, setTexto] = useState("");

  const enviar = () => {
    if (!texto) {
      Alert.alert("Aviso", "Digite seu feedback antes de enviar.");
      return;
    }

    // 🔑 adiciona data/hora junto com autor e texto
    const novoFeedback = {
      autor: user?.nome || "Anônimo",
      texto,
      data: new Date().toLocaleString("pt-BR"), // formato brasileiro
    };

    adicionarFeedback(novoFeedback);
    Alert.alert("Obrigado!", "Seu feedback foi enviado.");
    setTexto("");
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>📢 Enviar Feedback</Text>
      <TextInput
        style={[styles.input, { borderColor: themeColors.border, color: themeColors.text }]}
        placeholder="Digite seu feedback..."
        placeholderTextColor={themeColors.border}
        value={texto}
        onChangeText={setTexto}
        multiline
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: themeColors.highlight }]}
        onPress={enviar}
      >
        <Text style={[styles.buttonText, { color: themeColors.background }]}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderRadius: 10, padding: 12, minHeight: 100, marginBottom: 20 },
  button: { padding: 14, borderRadius: 10, alignItems: "center" },
  buttonText: { fontSize: 16, fontWeight: "bold" },
});
