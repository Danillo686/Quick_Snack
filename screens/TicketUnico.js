import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { UserContext } from "../contexts/UserContext";
import { useRoute } from "@react-navigation/native";

export default function TicketUnico() {
  const route = useRoute();
  const { themeColors } = useContext(UserContext);
  const { codigoPedido, total, metodo} = route.params;
  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>🎟️ Ticket Digital</Text>
      <Text style={[styles.subtitle, { color: themeColors.text }]}>Forma de pagamento: {metodo}</Text>
      <Text style={[styles.subtitle, { color: themeColors.text }]}>
        Apresente este QR Code na cantina
      </Text>

      <View style={styles.qrContainer}>
        <QRCode value={codigoPedido} size={200} />
      </View>

      <Text style={[styles.info, { color: themeColors.text }]}>Pedido: {codigoPedido}</Text>
      <Text style={[styles.info, { color: themeColors.text }]}>
        Total pago: R${total.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 },
  qrContainer: { marginVertical: 20 },
  info: { fontSize: 16, marginTop: 10 },
});
