import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import Perfil from "../screens/Perfil";
import SobreApp from "../screens/SobreApp";
import Carrinho from "../screens/Carrinho";
import { UserContext } from "../contexts/UserContext";
import LoginAluno from "../screens/LoginAluno";
import FeedbackAluno from "../screens/FeedbackAluno"; // tela de envio
import Feedbacks from "../screens/Feedback";         // tela de leitura (admin)

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { themeColors, user } = useContext(UserContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: themeColors.card },
        drawerActiveTintColor: themeColors.highlight,
        drawerInactiveTintColor: themeColors.border,
        drawerLabelStyle: { fontSize: 16, fontWeight: "bold" },
        headerStyle: { backgroundColor: themeColors.background },
        headerTintColor: themeColors.text,
      }}
    >
      <Drawer.Screen name="Principal" component={TabNavigator} />
      <Drawer.Screen name="Carrinho" component={Carrinho} />
      <Drawer.Screen name="Perfil do Aluno" component={Perfil} />
      <Drawer.Screen name="Sobre o App" component={SobreApp} />

      {/* Aluno envia feedback */}
      {user?.tipo === "aluno" && (
        <Drawer.Screen name="Enviar Feedback" component={FeedbackAluno} />
      )}

      {/* Admin lê feedbacks */}
      {user?.tipo === "admin" && (
        <Drawer.Screen name="Feedbacks" component={Feedbacks} />
      )}

      <Drawer.Screen name="Sair" component={LoginAluno} />
    </Drawer.Navigator>
  );
}
