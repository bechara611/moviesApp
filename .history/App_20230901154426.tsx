import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { MenuLateral } from './src/Navigation/MenuLateral';

export const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral></MenuLateral>
    </NavigationContainer>
  )
}
