import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // ícones bonitos
import { UserContext } from "../contexts/UserContext";

export default function SobreApp() {
  const { themeColors } = useContext(UserContext);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      {/* Ícone informativo */}
      <Ionicons name="information-circle-outline" size={60} color={themeColors.highlight} style={styles.icon} />

      {/* Título */}
      <Text style={[styles.title, { color: themeColors.text }]}>Sobre o App</Text>

      {/* Texto descritivo */}
      <Text style={[styles.text, { color: themeColors.text }]}>
        Este aplicativo foi desenvolvido para facilitar o gerenciamento de pedidos da cantina escolar,
        oferecendo uma experiência prática e moderna para alunos e administradores.
      </Text>

      {/* Créditos */}
      <Text style={[styles.footer, { color: themeColors.border }]}>
        📱 Desenvolvido por Danillo, Renan e João Pietro • 2025
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 30 
  },
  icon: {
    marginBottom: 15,
  },
  title: { 
    fontSize: 26, 
    fontWeight: "bold", 
    marginBottom: 15, 
    textAlign: "center" 
  },
  text: { 
    fontSize: 16, 
    textAlign: "center", 
    lineHeight: 22, 
    marginBottom: 20, 
    paddingHorizontal: 10 
  },
  footer: { 
    fontSize: 14, 
    fontStyle: "italic", 
    marginTop: 10, 
    textAlign: "center" 
  },
});
