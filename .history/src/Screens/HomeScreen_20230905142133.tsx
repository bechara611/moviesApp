import React from 'react'
import { ActivityIndicator, Text, View, FlatList } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MoviePoster } from '../components/MoviePoster'

import { useWindowDimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider'
import { ScrollView } from 'react-native-gesture-handler'



export const HomeScreen = () => {

  const { peliculasEnCine, loading,peliculasPopulares } = useMovies()
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
    <ScrollView>
    <View style={{ marginTop: top + 20 }}>
      {/* Carousel de peliculas en cine */}
      <View style={{ height: 440 }}>
        <Carousel
          data={peliculasEnCine}
          renderItem={({ item }) => { return <MoviePoster movie={item}></MoviePoster> }}
          sliderWidth={width}
          itemWidth={300}
          firstItem={1}
          inactiveSlideOpacity={.8}
        ></Carousel>
      </View>
      {/* flatlist de peliculas */}
    <HorizontalSlider movie={peliculasEnCine} titulo='EN CINE' ></HorizontalSlider>
    <HorizontalSlider movie={peliculasPopulares} titulo='POPULARES' ></HorizontalSlider>
    <HorizontalSlider movie={peliculasEnCine}  ></HorizontalSlider>
    </View>
    </ScrollView>
  )
}
