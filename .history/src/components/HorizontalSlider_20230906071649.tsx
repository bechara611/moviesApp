import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { MoviePoster } from './MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { Movie } from '../interfaces/MovieDb';

interface props {
  movie: Movie[],
  titulo?: string,
  height?: number
}

export const HorizontalSlider = ({ movie, titulo, height = 260 }: props) => {

  return (
    <View style={{ height }}>
      {
        titulo && <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'left', marginLeft: 10 }}>{titulo}</Text>
      }

      <FlatList
        data={movie}
        renderItem={({ item }) => <MoviePoster movie={item} height={200} width={200} ></MoviePoster>}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}


      />

    </View>
  )
}
