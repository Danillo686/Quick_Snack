import React, { useContext } from "react";
import { Text, FlatList, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../contexts/UserContext";

export default function Cardapio() {
  const { cardapio, carrinho, setCarrinho, themeColors } = useContext(UserContext);
  const navigation = useNavigation();

  const adicionarCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
    alert(`${item.nome} adicionado ao carrinho!`);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.card, { backgroundColor: themeColors.card, borderColor: themeColors.border }]}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={[styles.nome, { color: themeColors.text }]}>{item.nome}</Text>
      <Text style={[styles.descricao, { color: themeColors.text }]}>{item.descricao}</Text>
      <Text style={[styles.preco, { color: themeColors.text }]}>R${item.preco.toFixed(2)}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: themeColors.buyButton, borderColor: themeColors.border }]}
          onPress={() => navigation.navigate("DetalhesCompra", { item })}
        >
          <Text style={[styles.buttonText, { color: themeColors.text }]}>Comprar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: themeColors.cartButton, borderColor: themeColors.border }]}
          onPress={() => adicionarCarrinho(item)}
        >
          <Text style={[styles.buttonText, { color: themeColors.text }]}>Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>🍔 Cardápio da Cantina</Text>

      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity
        style={[styles.Vercarrinho, { backgroundColor: themeColors.highlight,width: "50%", height: 35,borderRadius: 10,borderWidth:3, borderColor: themeColors.border, alignSelf: "center", marginTop: 5,}]}
        onPress={() => navigation.navigate("Carrinho")}
      >
        <Text style={[styles.buttonText, { color: themeColors.text, fontSize: 20,  alignSelf: "center" }]}>Ver Carrinho</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContent: { paddingHorizontal: 10, paddingBottom: 24, flexGrow: 1 },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 20, textAlign: "left" },
  card: { flex: 1, margin: 5, padding: 10,borderWidth: 1, borderRadius: 8,},
  image: { width: "100%", height: 120, borderRadius: 8, backgroundColor: "#eee" },
  nome: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  descricao: { fontSize: 13, marginVertical: 3 },
  preco: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: 5 },
  button: {flex: 1 , marginHorizontal: 5, paddingVertical: 8, borderRadius: 6,borderWidth: 1, alignItems: "center", },
  buttonText: { fontSize: 14, fontWeight: "bold" },

  });
