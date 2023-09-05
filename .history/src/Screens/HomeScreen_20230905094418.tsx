import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MoviePoster } from '../components/MoviePoster'


export const HomeScreen = () => {

    const {peliculasEnCine,loading}=useMovies()
    const {top}=useSafeAreaInsets();

    if(loading){
      return(
        <View
        style={{
          flex:1, justifyContent:'center', alignItems:'center'
        }}
        ><ActivityIndicator size={100} color={'green'}></ActivityIndicator></View>
      )
    }
  return (
   <View style={{marginTop:top+20}}>
   <MoviePoster movie={peliculasEnCine[5]}></MoviePoster>
   </View>
  )
}
