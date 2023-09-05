import React from 'react'
import { Text, View } from 'react-native'
import { PropsStack } from '../Navigation/StackAppPeliculas'
import { StackScreenProps } from '@react-navigation/stack'


interface PropsPagina1 extends StackScreenProps<PropsStack,'main'>{}

export const Pagina1 = (props:PropsPagina1) => {
  return (
   <View><Text>PeliculasApp</Text></View>
  )
}
