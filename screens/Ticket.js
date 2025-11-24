import React from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function Ticket({ route }) {
  const { codigoPedido, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎟️ Ticket Digital</Text>
      <Text style={styles.subtitle}>Apresente este QR Code na cantina</Text>

      <View style={styles.qrContainer}>
        <QRCode value={codigoPedido} size={200} />
      </View>

      <Text style={styles.info}>Pedido: {codigoPedido}</Text>
      <Text style={styles.info}>Total pago: R${total.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 },
  qrContainer: { marginVertical: 20 },
  info: { fontSize: 16, marginTop: 10 },
});
