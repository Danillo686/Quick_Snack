import React, { useContext, useState } from "react";
import { Text, FlatList, Image, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../contexts/UserContext";

export default function Cardapio() {
  const { cardapio, setCardapio, carrinho, setCarrinho, themeColors, user } = useContext(UserContext);
  const navigation = useNavigation();
  const [editMode, setEditMode] = useState(false);

  const adicionarCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
    alert(`${item.nome} adicionado ao carrinho!`);
  };

  const atualizarItem = (index, campo, valor) => {
    const novoCardapio = [...cardapio];
    novoCardapio[index][campo] = campo === "preco" ? parseFloat(valor) || 0 : valor;
    setCardapio(novoCardapio);
  };

  const renderItem = ({ item, index }) => (
    <View style={[styles.card, { backgroundColor: themeColors.card, borderColor: themeColors.border }]}>
      <Image source={{ uri: item.imagem }} style={styles.image} />

      {editMode && user?.tipo === "admin" ? (
        <>
          <TextInput
            style={[styles.input, { color: themeColors.text, borderColor: themeColors.border }]}
            value={item.nome}
            onChangeText={(text) => atualizarItem(index, "nome", text)}
          />
          <TextInput
            style={[styles.input, { color: themeColors.text, borderColor: themeColors.border }]}
            value={item.descricao}
            onChangeText={(text) => atualizarItem(index, "descricao", text)}
          />
          <TextInput
            style={[styles.input, { color: themeColors.text, borderColor: themeColors.border }]}
            value={String(item.preco)}
            keyboardType="numeric"
            onChangeText={(text) => atualizarItem(index, "preco", text)}
          />
          <TextInput
            style={[styles.input, { color: themeColors.text, borderColor: themeColors.border }]}
            value={item.imagem}
            onChangeText={(text) => atualizarItem(index, "imagem", text)}
          />
        </>
      ) : (
        <>
          <Text style={[styles.nome, { color: themeColors.text }]}>{item.nome}</Text>
          <Text style={[styles.descricao, { color: themeColors.text }]}>{item.descricao}</Text>
          <Text style={[styles.preco, { color: themeColors.text }]}>R${item.preco.toFixed(2)}</Text>
        </>
      )}

      {!editMode && (
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: themeColors.buyButton, borderColor: themeColors.border }]}
            onPress={() =>
              navigation.navigate(user?.tipo === "admin" ? "DetalhesCompra" : "PagamentoUnico", { item })
            }
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
      )}
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      {/* Cabeçalho */}
      <View style={styles.header}>
  <Text style={[styles.title, { color: themeColors.text }]}>🍔 Cardápio da Cantina</Text>

  {user?.tipo === "admin" ? (
    <View style={styles.adminHeader}>
      <Text style={[styles.adminLabel, { color: themeColors.text }]}>Administrador</Text>
      <TouchableOpacity onPress={() => setEditMode(!editMode)}>
        <Ionicons name="brush" size={24} color={themeColors.highlight} />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.userInfo}>
      {user?.foto ? (
        <Image source={{ uri: user.foto }} style={[styles.userImage, { borderColor: themeColors.highlight }]} />
      ) : (
        <View style={[styles.iconWrapper, { borderColor: themeColors.highlight }]}>
          <Ionicons name="person-circle" size={40} color={themeColors.highlight} />
        </View>
      )}
      <Text style={[styles.userName, { color: themeColors.text }]}>
        {user?.nome ? user.nome : "Aluno"}
      </Text>
    </View>
  )}
</View>


      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />

      {!editMode && (
        <TouchableOpacity
          style={[styles.verCarrinho, { backgroundColor: themeColors.highlight, borderColor: themeColors.border }]}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Text style={[styles.buttonText, { color: themeColors.text, fontSize: 16 }]}>Ver Carrinho</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  adminHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  adminLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 24,
    flexGrow: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  descricao: {
    fontSize: 13,
    marginVertical: 3,
  },
  preco: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    marginVertical: 4,
  },
  verCarrinho: {
    width: "50%",
    height: 40,
    borderRadius: 10,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  userImage: {
  width: 40,
  height: 40,
  borderRadius: 20,
  borderWidth: 2,           // borda
  },
  iconWrapper: {
    borderWidth: 2,           // borda no ícone padrão
    borderRadius: 25,         // arredondado
    padding: 2,               // espaço interno para não cortar o ícone
  },

});
