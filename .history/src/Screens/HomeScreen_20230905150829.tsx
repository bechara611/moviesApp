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

  const { nowPlaying,popular,topRated,upcoming ,loading } = useMovies()
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
          data={nowPlaying}
          renderItem={({ item }) => { return <MoviePoster movie={item}></MoviePoster> }}
          sliderWidth={width}
          itemWidth={300}
          firstItem={1}
          inactiveSlideOpacity={.8}
        ></Carousel>
      </View>
      {/* flatlist de peliculas */}
    <HorizontalSlider movie={topRated} titulo='Top' ></HorizontalSlider>
    <HorizontalSlider movie={popular} titulo='Popular' ></HorizontalSlider>
    <HorizontalSlider movie={upcoming} titulo='Upcoming'  ></HorizontalSlider>
    </View>
    </ScrollView>
  )
}
