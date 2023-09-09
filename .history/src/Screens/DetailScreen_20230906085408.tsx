import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { PropsStack } from '../Navigation/StackAppPeliculas'

interface propsScreenDetail extends StackScreenProps<PropsStack,'Detail'>{}

export const DetailScreen = ({route,navigation}:propsScreenDetail) => {
  return (
   <View>
    <Text style={{color:'#fff'}}>{JSON.stringify(route.params.movie,null,3)}</Text>
   </View>
  )
}
