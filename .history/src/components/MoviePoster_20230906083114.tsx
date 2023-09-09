import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Movie } from '../interfaces/MovieDb'
import { useNavigation } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native-gesture-handler'


interface Props {
    movie: Movie,
    height?:number
    width?:number
}
export const MoviePoster = ({ movie,height=420,width=300 }: Props) => {
 
    const navigation =useNavigation();
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate('Detail')}
        activeOpacity={0.8}
        style={{ height, width, marginHorizontal:5 }}>
            <View style={styles.padreImagen}>
                <Image
                    style={styles.image}
                    source={{ uri }}></Image>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    padreImagen: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.24,
        shadowRadius: 2,
        borderRadius:18,
        elevation: 9,
    },
    image: {
        flex: 1,
        borderRadius: 18
    }
})