import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { MoviePoster } from './MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { Movie } from '../interfaces/MovieDb';

interface props {
    movie:Movie[],
    titulo?:string,
    height?:number
}

export const HorizontalSlider = ({movie,titulo,height=260}:props) => {
   
  return (
    <View style={{ height }}>
        {
            titulo &&  <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>{titulo}</Text>
        }
   
    <FlatList
      data={movie}
      renderItem={({ item }) => { return <MoviePoster movie={item} height={200} width={200}></MoviePoster> }}
      keyExtractor={(item) => { return item.id.toString() }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}


    ></FlatList>

  </View>
  )
}
