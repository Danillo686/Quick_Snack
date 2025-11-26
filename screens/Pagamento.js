import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function Pagamento({ navigation }) {
  const { carrinho, setCarrinho, adicionarCompra, themeColors } = useContext(UserContext);
  const [metodo, setMetodo] = useState(null);

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  const finalizarPagamento = () => {
    if (!metodo) {
      Alert.alert("Aviso", "Selecione um método de pagamento.");
      return;
    }

    if (metodo === "PIX") {
      Alert.alert("PIX Copia e Cola", "00020126580014BR.GOV.BCB.PIX0136pix@cantina.com...");
    } else if (metodo === "Cartão") {
      Alert.alert("Cartão de Crédito", "Pagamento aprovado com cartão fictício!");
    }

    const codigoPedido = `pedido-${Date.now()}`;
    const compra = { codigo: codigoPedido, total, metodo, data: new Date().toLocaleString() };
    adicionarCompra(compra);
    setCarrinho([]);
    navigation.navigate("Ticket", { codigoPedido, total });
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>💳 Pagamento</Text>
      <Text style={[styles.total, { color: themeColors.text }]}>Total: R${total.toFixed(2)}</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: themeColors.buyButton }]}
        onPress={() => setMetodo("PIX")}
      >
        <Text style={[styles.buttonText, { color: themeColors.text }]}>Pagar com PIX</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: themeColors.cartButton }]}
        onPress={() => setMetodo("Cartão")}
      >
        <Text style={[styles.buttonText, { color: themeColors.text }]}>Pagar com Cartão</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: themeColors.highlight }]}
        onPress={finalizarPagamento}
      >
        <Text style={[styles.buttonText, { color: themeColors.text }]}>Finalizar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: themeColors.card }]}
        onPress={() =>
          navigation.navigate("Main", {
            screen: "Principal",
            params: { screen: "Cardápio" },
          })
        }
      >
        <Text style={[styles.buttonText, { color: themeColors.text }]}>Voltar para o Cardápio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  total: { fontSize: 18, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonText: { fontSize: 16, fontWeight: "bold" },
});
