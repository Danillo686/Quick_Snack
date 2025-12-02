import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { UserContext } from "../contexts/UserContext";
import { useRoute } from "@react-navigation/native";

export default function TicketUnico() {
  const route = useRoute();
  const { themeColors } = useContext(UserContext);
  const { codigoPedido, total, metodo } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>🎟️ Ticket Digital</Text>
      <Text style={[styles.subtitle, { color: themeColors.text }]}>
        Forma de pagamento: {metodo}
      </Text>
      <Text style={[styles.subtitle, { color: themeColors.text }]}>
        Apresente este QR Code na cantina
      </Text>

      <View
        style={[
          styles.qrContainer,
          { backgroundColor: themeColors.background, borderColor: themeColors.border },
        ]}
      >
        <QRCode value={codigoPedido} size={200} />
      </View>

      <Text
        style={[
          styles.info,
          { backgroundColor: themeColors.buyButton, color: themeColors.text },
        ]}
      >
        Pedido: {codigoPedido}
      </Text>
      <Text
        style={[
          styles.info,
          { backgroundColor: themeColors.cartButton, color: themeColors.text },
        ]}
      >
        Total pago: R${total.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: "center",
  },
  qrContainer: {
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  },
});
