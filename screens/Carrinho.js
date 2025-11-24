import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../contexts/UserContext";

export default function Carrinho() {
  const { carrinho, setCarrinho } = useContext(UserContext);
  const navigation = useNavigation();

  const removerItem = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Carrinho de Compras</Text>
      {carrinho.length === 0 ? (
        <Text style={styles.empty}>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <Text>{item.nome} - R${item.preco.toFixed(2)}</Text>
                <Button title="Remover" onPress={() => removerItem(index)} />
              </View>
            )}
          />
          <Text style={styles.total}>Total: R${total.toFixed(2)}</Text>
          <Button title="Finalizar Pedido" onPress={() => navigation.navigate("Pagamento")} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  empty: { fontSize: 16, textAlign: "center", marginTop: 20 },
  item: { flexDirection: "row", justifyContent: "space-between", padding: 10, borderBottomWidth: 1, borderColor: "#eee" },
  total: { fontSize: 18, fontWeight: "bold", marginVertical: 20, textAlign: "center" },
});
