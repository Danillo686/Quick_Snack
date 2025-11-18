// navigation/AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import LoginAluno from "../screens/LoginAluno";
import LoginAdmin from "../screens/LoginAdmin";
import TabNavigator from "./TabNavigator"; // importa o novo

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="LoginAluno" component={LoginAluno} />
        <Stack.Screen name="LoginAdmin" component={LoginAdmin} />
        {/* Agora o Cardápio está dentro das Tabs */}
        <Stack.Screen name="Cardapio" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

