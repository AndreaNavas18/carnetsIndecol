// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/HomeScreen';
import CardScreen from '../components/CardScreen';
import QRScreen from '../components/QRScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CardTabs({ route }) {
  const { cedula } = route.params;

  return (
    <Tab.Navigator initialRouteName="Card">
    <Tab.Screen
      name="Card"
      component={CardScreen}
      initialParams={{ cedula }}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="QR"
      component={QRScreen}
      initialParams={{ cedula }}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CardTabs" component={CardTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
