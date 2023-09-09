import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { PropsStack } from '../Navigation/StackAppPeliculas'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions } from '@react-navigation/routers'

interface propsScreenDetail extends StackScreenProps<PropsStack,'Detail'>{}

export const DetailScreen = ({route,navigation}:propsScreenDetail) => {
  return (
   <View>
    <Text style={{color:'#fff'}}>{JSON.stringify(route.params.movie,null,3)}</Text>
    <TouchableOpacity onPress={()=>{navigation.dispatch(CommonActions.navigate('Home'))}}></TouchableOpacity>
   </View>
  )
}
