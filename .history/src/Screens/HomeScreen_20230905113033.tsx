import React from 'react'
import { ActivityIndicator, Text, View, FlatList } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MoviePoster } from '../components/MoviePoster'

import { useWindowDimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';



export const HomeScreen = () => {

  const { peliculasEnCine, loading } = useMovies()
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions()
  if (loading) {
    return (
      <View
        style={{
          flex: 1, justifyContent: 'center', alignItems: 'center'
        }}
      ><ActivityIndicator size={100} color={'green'}></ActivityIndicator></View>
    )
  }
  return (
    <View style={{ marginTop: top + 20 }}>
      {/* Carousel de peliculas en cine */}
      <View style={{ height: 440 }}>
        <Carousel
          data={peliculasEnCine}
          renderItem={({ item }) => { return <MoviePoster movie={item}></MoviePoster> }}
          sliderWidth={width}
          itemWidth={300}
          firstItem={1}
        ></Carousel>
      </View>
      {/* flatlist de peliculas */}
      <View style={{ height: 250 }}>
        <Text style={{fontSize:25, fontWeight:'bold'}}>CINE</Text>
        <FlatList
          data={peliculasEnCine}
          renderItem={({ item }) => { return <MoviePoster movie={item} height={200} width={200}></MoviePoster> }}
          keyExtractor={(item) => { return item.id.toString() }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}

        
        ></FlatList>

      </View>

    </View>
  )
}
