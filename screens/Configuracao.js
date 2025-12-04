import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function Configuracao() {
  const { 
    tema, 
    alternarTema, 
    themeColors, 
    trocarCoresAleatorias, 
    resetarTemaPadrao, 
    user 
  } = useContext(UserContext);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.text, { color: themeColors.text }]}>⚙️ Tela de Configuração</Text>

      <Text style={{ color: themeColors.text, marginBottom: 20 }}>
        Aqui você pode ajustar preferências do app.
      </Text>

      {/* Alternar tema - disponível para todos */}
      <TouchableOpacity
        style={[styles.button, { borderColor: themeColors.border }]}
        onPress={alternarTema}
      >
        <Text style={[styles.buttonText, { color: themeColors.text }]}>
          Alternar para tema {tema === "light" ? "escuro" : "claro"}
        </Text>
      </TouchableOpacity>

      {/* Configurações extras - apenas Admin */}
      {user?.tipo === "admin" && (
        <>
          {/* Botão para cores aleatórias */}
          <TouchableOpacity
            style={[styles.button, { borderColor: themeColors.border }]}
            onPress={trocarCoresAleatorias}
          >
            <Text style={[styles.buttonText, { color: themeColors.text }]}>🎨 Cores Aleatórias</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20 
  },
  text: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: "rgba(255,255,255,0.2)", 
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { 
    fontSize: 16, 
    fontWeight: "bold" 
  },
});
