// screens/Home.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Quick Snack</Text>
      

      <TouchableOpacity
      
        style={styles.buttonAluno}
        onPress={() => navigation.navigate("LoginAluno")}
      >
        <Text style={styles.buttonText}>Login Aluno</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonAdmin}
        onPress={() => navigation.navigate("LoginAdmin")}
      >
        <Text style={styles.buttonText}>Login Admin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFDEAD", 
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FF6B00",
    marginBottom: 50,

  },
  buttonAluno: {
    width: "30%",
    height: 50,
    backgroundColor: "#FF6B00",
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "#4F4F4F",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonAdmin: {
    width: "30%",
    height: 50,
    backgroundColor: "#DEB887", 
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "#4F4F4F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
