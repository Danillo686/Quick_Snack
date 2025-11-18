// screens/Perfil.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Perfil() {
  const [nome, setNome] = useState("João");
  const [email, setEmail] = useState("joao@email.com");
  const [senha, setSenha] = useState("");

  const salvarAlteracoes = () => {
    alert(`Perfil atualizado!\nNome: ${nome}\nEmail: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Alterar Perfil</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholder="Nova senha"
      />

      <Button title="Salvar Alterações" onPress={salvarAlteracoes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  label: { fontSize: 16, marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },
});
