// navigation/AuthStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";       // tela com botões de escolha
import LoginAluno from "../screens/LoginAluno";
import LoginAdmin from "../screens/LoginAdmin";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="LoginAluno" component={LoginAluno} />
      <Stack.Screen name="LoginAdmin" component={LoginAdmin} />
    </Stack.Navigator>
  );
}
