// screens/Cardapio.js
import React, { useContext } from "react";
import { Text, FlatList, Image, Button, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../contexts/UserContext";

export default function Cardapio() {
  const { cardapio, carrinho, setCarrinho } = useContext(UserContext);
  const navigation = useNavigation();

  const adicionarCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
    alert(`${item.nome} adicionado ao carrinho!`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.preco}>R${item.preco.toFixed(2)}</Text>
      <View style={styles.buttons}>
        <Button title="Comprar" onPress={() => navigation.navigate("DetalhesCompra", { item })} />
        <Button title="Carrinho" onPress={() => adicionarCarrinho(item)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍔 Cardápio da Cantina</Text>
      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
      <Button title="Ver Carrinho" onPress={() => navigation.navigate("Carrinho")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  listContent: { paddingHorizontal: 10, paddingBottom: 24, flexGrow: 1 },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 20, textAlign: "center" },
  card: { flex: 1, margin: 5, padding: 10, borderWidth: 1, borderColor: "#ddd", borderRadius: 8, backgroundColor: "#f9f9f9" },
  image: { width: "100%", height: 120, borderRadius: 8, backgroundColor: "#eee" },
  nome: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  descricao: { fontSize: 13, color: "#555", marginVertical: 3 },
  preco: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  buttons: { flexDirection: "row", justifyContent: "space-between" },
});
