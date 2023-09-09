import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { PropsStack } from '../Navigation/StackAppPeliculas'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions } from '@react-navigation/routers'

interface propsScreenDetail extends StackScreenProps<PropsStack,'Detail'>{}
const {height} = Dimensions.get('screen')

export const DetailScreen = ({route,navigation}:propsScreenDetail) => {
 const {width,height} = useWindowDimensions()
  const {movie} = route.params

 const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
   <View style={styles.padreImagen} >
     <Image source={{uri}} style={styles.posterImage} ></Image>

   </View>
   
  )
  
}

const styles = StyleSheet.create({
  padreImagen:{
    height:height*0.7,
    width:'100%'
  },
  posterImage: {
    flex:1
  }
})