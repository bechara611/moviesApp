import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'


export const HomeScreen = () => {

    const {peliculasEnCine,loading}=useMovies()

    if(true){
      return(
        <View
        style={{
          flex:1, justifyContent:'center', alignItems:'center'
        }}
        ><ActivityIndicator size={100} color={'green'}></ActivityIndicator></View>
      )
    }
  return (
   <View>
    <Text>{peliculasEnCine[2].title}</Text>
   </View>
  )
}
