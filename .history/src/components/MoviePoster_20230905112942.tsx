import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Movie } from '../interfaces/MovieDb'


interface Props {
    movie: Movie,
    height?:number
    width?:number
}
export const MoviePoster = ({ movie,height=420,width=300 }: Props) => {
 
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <View style={{ height, width, marginHorizontal:5 }}>
            <View style={styles.padreImagen}>
                <Image
                    style={styles.image}
                    source={{ uri }}></Image>
            </View>
        </View>
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