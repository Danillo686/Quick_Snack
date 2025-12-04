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
    navigation.navigate("Main", {
      screen: "Principal",
      params: { screen: "Cardápio" },
    });
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <View style={[styles.card, { backgroundColor: themeColors.card }]}>
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
                  <Text style={[styles.itemText, { color: themeColors.text }]}>
                    {item.nome} - R${item.preco.toFixed(2)}
                  </Text>
                  <TouchableOpacity
                    style={[styles.removeButton, { backgroundColor: themeColors.cartButton }]}
                    onPress={() => removerItem(index)}
                  >
                    <Text style={[styles.buttonText, { color: themeColors.text }]}>Remover</Text>
                  </TouchableOpacity>
                </View>
              )}
            />

            <Text style={[styles.total, { color: themeColors.highlight }]}>
              Total: R${total.toFixed(2)}
            </Text>

            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: themeColors.buyButton }]}
              onPress={() => navigation.navigate("Pagamento")}
            >
              <Text style={[styles.buttonText, { color: themeColors.text }]}>Finalizar Pedido</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: themeColors.highlight }]}
              onPress={limparCarrinho}
            >
              <Text style={[styles.buttonText, { color: themeColors.background }]}>Limpar Carrinho</Text>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity
          style={[
            styles.actionButton,
            { backgroundColor: themeColors.card, borderColor: themeColors.border, borderWidth: 2 },
          ]}
          onPress={irParaCardapio}
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
    padding: 20,
  },
  card: {
    width: "95%",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  empty: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
  },
  total: {
    fontSize: 20, 
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  actionButton: {
    paddingVertical: 14,
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center",
  },
  removeButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
