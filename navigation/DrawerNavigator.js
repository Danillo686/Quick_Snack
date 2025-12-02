import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import Perfil from "../screens/Perfil";
import SobreApp from "../screens/SobreApp";
import Carrinho from "../screens/Carrinho";
import { UserContext } from "../contexts/UserContext";
import LoginAluno from "../screens/LoginAluno";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { themeColors } = useContext(UserContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: themeColors.card },
        drawerActiveTintColor: themeColors.highlight, // usa cor de destaque do tema
        drawerInactiveTintColor: themeColors.border,  // usa cor de borda do tema
        drawerLabelStyle: { fontSize: 16, fontWeight: "bold" }, // deixa os nomes mais fortes
        headerStyle: { backgroundColor: themeColors.background },
        headerTintColor: themeColors.text,
      }}
    >
      <Drawer.Screen name="Principal" component={TabNavigator} />
      <Drawer.Screen name="Carrinho" component={Carrinho} />
      <Drawer.Screen name="Perfil do Aluno" component={Perfil} />
      <Drawer.Screen name="Sobre o App" component={SobreApp} />
      <Drawer.Screen name="Sair" component={LoginAluno} />
    </Drawer.Navigator>
  );
}
