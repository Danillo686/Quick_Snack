import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Cardapio";
import Historico from "../screens/Historico";
import Configuracao from "../screens/Configuracao";
import { UserContext } from "../contexts/UserContext";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { themeColors } = useContext(UserContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Histórico") iconName = "time";
          else if (route.name === "Configurações") iconName = "settings";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerStyle: { backgroundColor: themeColors.background },
        headerTintColor: themeColors.text,
        tabBarStyle: { backgroundColor: themeColors.card },
        tabBarActiveTintColor: themeColors.highlight, // usa cor de destaque do tema
        tabBarInactiveTintColor: themeColors.border,  // usa cor de borda do tema
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" }, // deixa o texto mais forte
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Histórico" component={Historico} />
      <Tab.Screen name="Configurações" component={Configuracao} />
    </Tab.Navigator>
  );
}
