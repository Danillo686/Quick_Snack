import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../contexts/UserContext";

export default function Carrinho() {
  const { carrinho, setCarrinho, themeColors } = useContext(UserContext);
  const navigation = useNavigation();

  const removerItem = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  const limparCarrinho = () => setCarrinho([]);

  const irParaCardapio = () => {
    // Opção 1: volta para a tela anterior (se veio do Cardápio)
    // navigation.goBack();

    // Opção 2: navegação aninhada (igual você usa em Pagamento)
    navigation.navigate("Main", {
      screen: "Principal",
      params: { screen: "Cardápio" },
    });
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>🛒 Carrinho de Compras</Text>

      {carrinho.length === 0 ? (
        <Text style={[styles.empty, { color: themeColors.text }]}>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={[styles.item, { borderColor: themeColors.border }]}>
                <Text style={{ color: themeColors.text }}>
                  {item.nome} - R${item.preco.toFixed(2)}
                </Text>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: themeColors.cartButton }]}
                  onPress={() => removerItem(index)}
                >
                  <Text style={[styles.buttonText, { color: themeColors.text }]}>Remover</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <Text style={[styles.total, { color: themeColors.text }]}>Total: R${total.toFixed(2)}</Text>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: themeColors.buyButton }]}
            onPress={() => navigation.navigate("Pagamento")}
          >
            <Text style={[styles.buttonText, { color: themeColors.text }]}>Finalizar Pedido</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: themeColors.highlight }]}
            onPress={limparCarrinho}
          >
            <Text style={[styles.buttonText, { color: themeColors.text }]}>Limpar Carrinho</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Botões de navegação sempre visíveis */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: themeColors.card, borderColor: themeColors.border, borderWidth: 2 },
        ]}
        onPress={irParaCardapio}
      >
        <Text style={[styles.buttonText, { color: themeColors.text }]}>Voltar para o Cardápio</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  empty: { fontSize: 16, textAlign: "center", marginTop: 20 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  total: { fontSize: 18, fontWeight: "bold", marginVertical: 20, textAlign: "center" },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonText: { fontSize: 16, fontWeight: "bold" },
});
