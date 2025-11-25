// screens/LoginAluno.js
import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function LoginAluno({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");

  const handleLogin = () => {
    if (!nome || !matricula) {
      alert("Por favor, preencha nome e matrícula.");
      return;
    }
    // salva os dados digitados no contexto
    setUser({ tipo: "aluno", nome, matricula });
    // redireciona para o fluxo principal (Drawer + Tabs)
    navigation.replace("Main");
  };
    return (
      
      <View style={styles.container}>
        <Text style={styles.title}>Login do Aluno</Text>

        
  
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Matrícula"
          value={matricula}
          onChangeText={setMatricula}
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

