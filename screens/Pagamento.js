import React, { useContext, useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function Pagamento({ navigation }) {
  const { carrinho, setCarrinho } = useContext(UserContext);
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

    // gera código único do pedido
    const codigoPedido = `pedido-${Date.now()}`;

    // limpa carrinho
    setCarrinho([]);

    // navega para a tela de Ticket Digital com QR Code
    navigation.navigate("Ticket", { codigoPedido, total });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💳 Pagamento</Text>
      <Text style={styles.total}>Total: R${total.toFixed(2)}</Text>

      <Button title="Pagar com PIX" onPress={() => setMetodo("PIX")} />
      <Button title="Pagar com Cartão" onPress={() => setMetodo("Cartão")} />

      <View style={{ marginTop: 20 }}>
        <Button title="Finalizar" onPress={finalizarPagamento} />
      </View>

      {/* Botão de voltar para o Cardápio */}
      <View style={{ marginTop: 20 }}>
        <Button
          title="Voltar para o Cardápio"
          onPress={() =>
            navigation.navigate("Main", {
              screen: "Principal",
              params: { screen: "Cardápio" }
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  total: { fontSize: 18, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
});
