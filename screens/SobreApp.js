import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function SobreApp() {
  const { themeColors } = useContext(UserContext);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>ℹ️ Sobre o App</Text>
      <Text style={[styles.text, { color: themeColors.text }]}>
        Este aplicativo foi desenvolvido para gerenciar pedidos da cantina escolar.
      </Text>
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
