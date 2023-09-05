import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { Pagina1 } from '../Screens/Pagina1';

export type PropsStack={
    main:undefined,
    hola:string
}
const Stack = createStackNavigator();
export const StackAppPeliculas = () => {
  return (
   <Stack.Navigator>

    <Stack.Screen name='main' component={Pagina1}></Stack.Screen>
   
   </Stack.Navigator>
  )
}
