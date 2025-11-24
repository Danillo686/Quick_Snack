import React from "react";
import { View, Text } from "react-native";

export default function SobreApp() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ℹ️ Sobre o App</Text>
      <Text>Este aplicativo foi desenvolvido para gerenciar pedidos da cantina escolar.</Text>
    </View>
  );
}
