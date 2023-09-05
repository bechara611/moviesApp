import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { Movie } from '../interfaces/MovieDb'


interface Props {
    movie:Movie
}
export const MoviePoster = ({movie}:Props) => {
console.log(movie.poster_path)
const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
   <View>
    <Image
    style={styles.image}
     source={{uri}}></Image>
   </View>
  )
}

const styles = StyleSheet.create({
    padreImagen:{
        width:200,
        height:200
    },
    image:{
      flex:1
    }
})