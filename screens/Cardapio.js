// screens/Cardapio.js
import React, { useContext } from "react";
import { Text, FlatList, Image, StyleSheet, View, TouchableOpacity } from "react-native";
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
        <TouchableOpacity 
          style={[styles.button, styles.buyButton]} 
          onPress={() => navigation.navigate("DetalhesCompra", { item })}
        >
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.cartButton]} 
          onPress={() => adicionarCarrinho(item)}
        >
          <Text style={styles.buttonText}>Carrinho</Text>
        </TouchableOpacity>
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
      <TouchableOpacity 
        style={[styles.button, styles.cartButton]} 
        onPress={() => navigation.navigate("Carrinho")}
      >
        <Text style={styles.buttonText}>Ver Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: "#FFDEAD",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  listContent: { 
    paddingBottom: 24, 
    flexGrow: 1,
  },
  title: { 
    fontSize: 26, 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center", 
    color: "#8B4513",
  },
  card: { 
    flex: 1, 
    margin: 8, 
    padding: 12, 
    borderWidth: 1, 
    borderColor: "#ddd", 
    borderRadius: 10, 
    backgroundColor: "#fff", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  image: { 
    width: "100%", 
    height: 120, 
    borderRadius: 8, 
    backgroundColor: "#eee", 
    marginBottom: 10,
  },
  nome: { 
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#333", 
    marginBottom: 4,
    textAlign: "center",
  },
  descricao: { 
    fontSize: 13, 
    color: "#555", 
    marginBottom: 6,
    textAlign: "center",
  },
  preco: { 
    fontSize: 14, 
    fontWeight: "bold", 
    color: "#FF6B00",
    marginBottom: 10,
  },
  buttons: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "100%",
    marginTop: 5,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 25, // deixa bem arredondado
    alignItems: "center",
    justifyContent: "center",
  },
  buyButton: {
    backgroundColor: "#FF6B00", // laranja para comprar
  },
  cartButton: {
    backgroundColor: "#6495ED", // azul para carrinho
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
