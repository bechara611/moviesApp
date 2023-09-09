import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { PropsStack } from '../Navigation/StackAppPeliculas'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions } from '@react-navigation/routers'
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails'



interface propsScreenDetail extends StackScreenProps<PropsStack, 'Detail'> { }
const { height } = Dimensions.get('screen')

export const DetailScreen = ({ route, navigation }: propsScreenDetail) => {
  const { width, height } = useWindowDimensions()
  const { movie } = route.params
  const { loading, detallesPelicula } = useMovieDetails(movie.id);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (

    <ScrollView>
      <StatusBar translucent backgroundColor={'transparent'}></StatusBar>
      <View style={styles.padreImagen} >
        <Image source={{ uri }} style={styles.posterImage} ></Image>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>

      </View>
      <View style={styles.marginContainer}>
        <Icon name='star-outline' size={30} color={"#fff"}></Icon>
      </View>
      {loading ? <ActivityIndicator color={"green"} size={300}></ActivityIndicator>

        :
        <></>

      }
    </ScrollView>

  )

}

const styles = StyleSheet.create({
  padreImagen: {
    height: height * 0.7,
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.24,
    shadowRadius: 2,
    borderRadius: 18,
    elevation: 9,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    overflow: 'hidden'
  },

  posterImage: {
    flex: 1,

  },
  marginContainer: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: .8,
    color: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
})