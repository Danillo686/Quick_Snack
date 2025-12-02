import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { useRoute } from "@react-navigation/native";

export default function PagamentoUnico({ navigation }) {
  const route = useRoute();
  const { item } = route.params; 
  const { carrinho, setCarrinho, adicionarCompra, themeColors } = useContext(UserContext);
  const [metodo, setMetodoLocal] = useState(null);
  const total = item.preco;

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
    navigation.navigate("TicketUnico", { codigoPedido, total, metodo });
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <View style={[styles.card, { backgroundColor: themeColors.card }]}>
        <Text style={[styles.title, { color: themeColors.text }]}>💳 Pagamento</Text>
        <Text style={[styles.subtitle, { color: themeColors.text }]}>Produto: {item.nome}</Text>
        <Text style={[styles.total, { color: themeColors.highlight }]}>
          Total: R${item.preco.toFixed(2)}
        </Text>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: themeColors.cartButton },
            metodo === "PIX" && { borderColor: themeColors.highlight, borderWidth: 2 },
          ]}
          onPress={() => setMetodoLocal("PIX")}
        >
          <Text style={[styles.buttonText, { color: themeColors.text }]}>
            {metodo === "PIX" ? "PIX Selecionado ✅" : "Pagar com PIX"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: themeColors.buyButton },
            metodo === "Cartão" && { borderColor: themeColors.highlight, borderWidth: 2 },
          ]}
          onPress={() => setMetodoLocal("Cartão")}
        >
          <Text style={[styles.buttonText, { color: themeColors.text }]}>
            {metodo === "Cartão" ? "Cartão Selecionado ✅" : "Pagar com Cartão"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonFinalizar, { backgroundColor: themeColors.highlight }]}
          onPress={finalizarPagamento}
        >
          <Text style={[styles.buttonText, { color: themeColors.background }]}>Finalizar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonVoltar, { backgroundColor: themeColors.border }]}
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

    // sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    // sombra Android
    elevation: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: "center",
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    paddingVertical: 12,
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonFinalizar: {
    paddingVertical: 12,
    borderRadius: 12,
    marginVertical: 12,
    alignItems: "center",
    width: "100%",
  },
  buttonVoltar: {
    paddingVertical: 12,
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
