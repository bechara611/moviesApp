import React from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feed } from '../Screens/Feed';

interface props {
    Feed:undefined,

}
const Drawer = createDrawerNavigator<props>();

export const MenuLateral=()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}