import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { StackAppPeliculas } from './src/Navigation/StackAppPeliculas';
import { Pagina1 } from './src/Screens/Pagina1';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <MenuLateral></MenuLateral> */}
      <StackAppPeliculas></StackAppPeliculas>
    </NavigationContainer>
  )
}
