import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { PropsStack } from '../Navigation/StackAppPeliculas'

interface propsScreenDetail extends StackScreenProps<PropsStack,'Detail'>{}

export const DetailScreen = ({route,navigation}:propsScreenDetail) => {
  return (
   <View>

   </View>
  )
}
