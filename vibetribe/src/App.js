import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RealizarLogin from './screens/Login';
import PaginaPrincipal from './screens/Inicio';
import Cadastro from './screens/Cadastro';
import Feed from './screens/Feed';
import Notifica from './screens/Notifica';
import Perfil from './screens/Perfil';

const Stack = createNativeStackNavigator();

const App = () =>(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="RealizarLogin">
      <Stack.Screen name="RealizarLogin" component={RealizarLogin} />
      <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Notifica" component={Notifica} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  </NavigationContainer>
);