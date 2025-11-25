// screens/LoginAdmin.js
import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function LoginAdmin({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!usuario || !senha) {
      alert("Por favor, preencha usuário e senha."); // funciona no navegador
      return;
    }

    if (usuario === "admin" && senha === "1234") {
      setUser({ tipo: "admin", usuario });
      alert("Login realizado com sucesso!");
      navigation.replace("Main");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login do Administrador</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: "#6495ED",
    width: "30%",          // largura menor
    height: 50,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "#4F4F4F",
    marginBottom: 20,
    alignSelf: "center",   // força o componente a ficar centralizado
    justifyContent: "center",
   },
   buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",   // força o componente a ficar centralizado
  },
  container: { 
    backgroundColor: "#FFDEAD", 
    flex: 1,  
    justifyContent: "center", 
    padding: 20 },

    title: {
      marginBottom: 20, 
      fontSize: 36,
      fontWeight: "bold",
      textAlign: "center" },
 
      input: {
        color:"#778899",
        padding: 20,
        backgroundColor: "rgba(224, 255, 255, 0.6)",
        width: "30%",          // largura menor
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
        alignSelf: "center",   // força o componente a ficar centralizado
        justifyContent: "center",
      },
});
