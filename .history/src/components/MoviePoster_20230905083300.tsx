import React from 'react'
import { Text, View } from 'react-native'
import { Movie } from '../interfaces/MovieDb'

interface Props {
    movie:Movie
}
export const MoviePoster = ({movie}:Props) => {
 
 console.log(movie)
    return (
   <View>
    <Text>MoviePoster</Text>
   </View>
  )
}
