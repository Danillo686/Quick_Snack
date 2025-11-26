import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function Historico() {
  const { historico, themeColors } = useContext(UserContext);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>📜 Histórico de Compras</Text>

      {historico.length === 0 ? (
        <Text style={[styles.empty, { color: themeColors.text }]}>
          Nenhuma compra realizada ainda.
        </Text>
      ) : (
        <FlatList
          data={historico}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.item,
                { backgroundColor: themeColors.card, borderColor: themeColors.border },
              ]}
            >
              <Text style={[styles.codigo, { color: themeColors.text }]}>
                Pedido: {item.codigo}
              </Text>
              <Text style={{ color: themeColors.text }}>Método: {item.metodo}</Text>
              <Text style={{ color: themeColors.text }}>
                Total: R${item.total.toFixed(2)}
              </Text>
              <Text style={{ color: themeColors.text }}>Data: {item.data}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  empty: { fontSize: 16, textAlign: "center", marginTop: 20 },
  item: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  codigo: { fontWeight: "bold", marginBottom: 5 },
});
