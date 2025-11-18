// navigation/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Cardapio from "../screens/Cardapio";
import Configuracao from "../screens/Configuracao";
import Perfil from "../screens/Perfil"; // nova tela

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Cardápio") iconName = "fast-food";
          else if (route.name === "Configuração") iconName = "settings";
          else if (route.name === "Perfil") iconName = "person";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Cardápio" component={Cardapio} />
      <Tab.Screen name="Configuração" component={Configuracao} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
