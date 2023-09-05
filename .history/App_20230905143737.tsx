import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { StackAppPeliculas } from './src/Navigation/StackAppPeliculas';


export const App = () => {
  return (
    <NavigationContainer>
      {/* <MenuLateral></MenuLateral> */}
      <StatusBar backgroundColor={'#fff'}></StatusBar>
      <StackAppPeliculas></StackAppPeliculas>
    </NavigationContainer>
  )
}
