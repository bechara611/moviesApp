import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Movie } from '../interfaces/MovieDb'


interface Props {
    movie: Movie
}
export const MoviePoster = ({ movie }: Props) => {
    console.log(movie.poster_path)
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <View style={{ height: 420, width: 300 }}>
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
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },
    image: {
        flex: 1,
        borderRadius: 18
    }
})