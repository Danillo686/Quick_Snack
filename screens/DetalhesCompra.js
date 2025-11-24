// screens/DetalhesCompra.js
import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function DetalhesCompra({ route, navigation }) {
  const { item } = route.params || {};

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🛒 Nenhum item selecionado</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Detalhes da Compra</Text>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.preco}>Preço: R${item.preco.toFixed(2)}</Text>
      <Button title="Finalizar Compra" onPress={() => alert("Compra finalizada!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  image: { width: 300, height: 150, borderRadius: 8, marginBottom: 20 },
  nome: { fontSize: 20, fontWeight: "bold" },
  descricao: { fontSize: 16, color: "#555", marginVertical: 10 },
  preco: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
});
