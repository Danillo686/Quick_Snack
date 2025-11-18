// screens/Cardapio.js
import React, { useState } from "react";
import {Text, FlatList, Image, Button, StyleSheet, View } from "react-native";

export default function Cardapio() {
  const [carrinho, setCarrinho] = useState([]);

  const itens = [
    { id: "1", nome: "Coxinha", descricao: "Frango com catupiry", preco: 5.0, imagem: "https://placehold.co/300x150?text=Coxinha" },
    { id: "2", nome: "Pastel", descricao: "Carne bem recheado", preco: 6.5, imagem: "https://placehold.co/300x150?text=Pastel" },
    { id: "3", nome: "Suco Natural", descricao: "Suco de laranja fresco", preco: 4.0, imagem: "https://placehold.co/300x150?text=Suco" },
    { id: "4", nome: "Sanduíche", descricao: "Presunto e queijo", preco: 7.0, imagem: "https://placehold.co/300x150?text=Sanduiche" },
    { id: "5", nome: "Refrigerante", descricao: "Lata gelada", preco: 5.5, imagem: "https://placehold.co/300x150?text=Refri" },
    { id: "6", nome: "Bolo", descricao: "Bolo de chocolate", preco: 4.5, imagem: "https://placehold.co/300x150?text=Bolo" },
    { id: "7", nome: "Pizza", descricao: "Fatia de pizza de mussarela", preco: 8.0, imagem: "https://placehold.co/300x150?text=Pizza" },
    { id: "8", nome: "Hambúrguer", descricao: "Hambúrguer artesanal com queijo", preco: 12.0, imagem: "https://placehold.co/300x150?text=Hamburguer" },
  ];

  const adicionarCarrinho = (item) => {
    setCarrinho((prev) => [...prev, item]);
    alert(`${item.nome} adicionado ao carrinho!`);
  };

  const comprarItem = (item) => {
    alert(`Você comprou: ${item.nome} por R$${item.preco.toFixed(2)}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.preco}>R${item.preco.toFixed(2)}</Text>
      <View style={styles.buttons}>
        <Button title="Comprar" onPress={() => comprarItem(item)} />
        <Button title="Carrinho" onPress={() => adicionarCarrinho(item)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍔 Cardápio da Cantina</Text>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2} // mostra de dois em dois
        //columnWrapperStyle={styles.row}
        // showsVerticalScrollIndicator
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  listContent: { paddingHorizontal: 10, paddingBottom: 24, flexGrow: 1 },
  row: { justifyContent: "space-between" },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 20, textAlign: "center" },
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  image: { width: "100%", height: 120, borderRadius: 8, backgroundColor: "#eee" },
  nome: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  descricao: { fontSize: 13, color: "#555", marginVertical: 3 },
  preco: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  buttons: { flexDirection: "row", justifyContent: "space-between" },
});
