import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import Perfil from "../screens/Perfil";
import SobreApp from "../screens/SobreApp";
import Carrinho from "../screens/Carrinho"; // adiciona aqui

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Principal" component={TabNavigator} />
      <Drawer.Screen name="Carrinho" component={Carrinho} />
      <Drawer.Screen name="Perfil do Aluno" component={Perfil} />
      <Drawer.Screen name="Sobre o App" component={SobreApp} />
    </Drawer.Navigator>
  );
}
