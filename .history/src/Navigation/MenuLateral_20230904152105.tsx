import React from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pagina1 } from '../Screens/Pagina1';

const Drawer = createDrawerNavigator();

export const MenuLateral=()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={<View><Text>1</Text></View>} />
      <Drawer.Screen name="Article" component={<View><Text>1</Text></View>} />
    </Drawer.Navigator>
  );
}