import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen } from '../Screens/HomeScreen';
import { DetailScreen } from '../Screens/DetailScreen';

export type PropsStack={
    Home:undefined,
    Detail:undefined
}
const Stack = createStackNavigator<PropsStack>();
export const StackAppPeliculas = () => {
  return (
   <Stack.Navigator
   initialRouteName='Home'
   screenOptions={{
    headerShown:false,
    cardStyle:{backgroundColor:'#fff'}
   }}
   >

    <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
    <Stack.Screen name='Detail' component={DetailScreen}></Stack.Screen>
   
   </Stack.Navigator>
  )
}
