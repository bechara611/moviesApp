import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen } from '../Screens/HomeScreen';

export type PropsStack={
    Home:undefined,
}
const Stack = createStackNavigator<PropsStack>();
export const StackAppPeliculas = () => {
  return (
   <Stack.Navigator
   initialRouteName='Home'
   screenOptions={{
    headerShown:false
   }}
   >

    <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
   
   
   </Stack.Navigator>
  )
}
