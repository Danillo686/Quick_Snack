import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";

export default function Home({ navigation }) {
const { themeColors } = useContext(UserContext);

return (
<View style={[styles.container, { backgroundColor: themeColors.background }]}>
{/* Quick Snack com a mesma cor do botão Login Aluno */}
      <Text style={[styles.logo, { color: themeColors.loginAlunoButton }]}>Quick Snack</Text>

      {/* Botão Login Aluno */}
<TouchableOpacity
style={[
styles.button,
          { backgroundColor: themeColors.loginAlunoButton, borderColor: themeColors.border },
          { borderWidth: 3,
            backgroundColor: themeColors.loginAlunoButton,
            borderColor: themeColors.border, // cor da borda dinâmica
          },
]}
onPress={() => navigation.navigate("LoginAluno")}
>
        <Text style={[styles.buttonText, { color: themeColors.text }]}>Login Aluno</Text>
</TouchableOpacity>

      {/* Botão Login Admin */}
<TouchableOpacity
style={[
styles.button,
          { backgroundColor: themeColors.loginAdminButton, borderColor: themeColors.border },
          { 
            backgroundColor: themeColors.loginAdminButton,
            borderColor: themeColors.border, // cor da borda dinâmica
            borderWidth: 3,
          },
]}
onPress={() => navigation.navigate("LoginAdmin")}
>
        <Text style={[styles.buttonText, { color: themeColors.text }]}>Login Admin</Text>
</TouchableOpacity>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
justifyContent: "center",
padding: 20,
},
logo: {
fontSize: 36,
fontWeight: "bold",
marginBottom: 50,
},
button: {
width: "40%",
height: 50,
borderRadius: 7,
    borderWidth: 2,
    borderWidth: 2, // espessura da borda
alignItems: "center",
justifyContent: "center",
marginBottom: 20,
},
buttonText: {
fontSize: 18,
fontWeight: "bold",
    
},
});