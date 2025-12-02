import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { useRoute } from "@react-navigation/native";

export default function PagamentoUnico({ navigation}) {
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
    navigation.navigate("TicketUnico", { codigoPedido, total, metodo});
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>

      <Text style={[styles.title, { color: themeColors.text }]}>💳 Pagamento</Text>
      <Text style={styles.title}> Produto: {item.nome}</Text>
      <Text style={[styles.total, { color: themeColors.text }]}>Total: R${item.preco.toFixed(2)}</Text>

<TouchableOpacity
  style={[
    styles.button,
    { backgroundColor: "orange" },
    metodo === "PIX" ? styles.ButtonSelecionado : styles.buttonText,
  ]}
  onPress={() => setMetodoLocal("PIX")}
>
  <Text style={[styles.buttonText, { color: themeColors.text }]}>
    {metodo === "PIX" ? "PIX Selecionado" : "Pagar com PIX"}
  </Text>
</TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: themeColors.cartButton },
          metodo === "Cartão" ? styles.ButtonSelecionado : styles.buttonText,
        ]}
        onPress={() => setMetodoLocal("Cartão")}
      >
        <Text style={[styles.buttonText, { color: themeColors.text }]}>
          {metodo === "Cartão" ? "Cartão Selecionado" : "Pagar com Cartão"}
        </Text>
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
  ButtonSelecionado: { backgroundColor: "#3b7a3dff" },
});
