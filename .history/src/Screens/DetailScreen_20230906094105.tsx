import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { PropsStack } from '../Navigation/StackAppPeliculas'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions } from '@react-navigation/routers'

interface propsScreenDetail extends StackScreenProps<PropsStack,'Detail'>{}

export const DetailScreen = ({route,navigation}:propsScreenDetail) => {
 const {movie} = route.params
 const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
   <View>
    <Image source={{uri}} style={{width:500, height:500}} ></Image>
    <TouchableOpacity onPress={()=>{navigation.dispatch(CommonActions.navigate('Home'))}}><Text style={{color:"#FFF"}}>HOMEEE</Text></TouchableOpacity>
   </View>
  )
}
