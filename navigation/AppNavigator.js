import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";
import DrawerNavigator from "./DrawerNavigator";
import DetalhesCompra from "../screens/DetalhesCompra";
import Carrinho from "../screens/Carrinho";
import Pagamento from "../screens/Pagamento";
import Ticket from "../screens/Ticket";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        {/* Fluxo de autenticação */}
        <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />

        {/* Fluxo principal depois do login */}
        <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />

        {/* Telas extras */}
        <Stack.Screen name="DetalhesCompra" component={DetalhesCompra} />

        
        <Stack.Screen name="Carrinho" component={Carrinho} />

        <Stack.Screen name="Pagamento" component={Pagamento} />

        <Stack.Screen name="Ticket" component={Ticket} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
