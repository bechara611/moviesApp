import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Movie } from '../interfaces/MovieDb'
import { CommonActions, useNavigation } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { PropsStack } from '../Navigation/StackAppPeliculas'


interface Props {
    movie: Movie,
    height?:number
    width?:number,
    navigation?:StackNavigationProp<PropsStack>
}

export const MoviePoster = ({ movie,height=420,width=300,navigation }: Props) => {
 
   // const navigation =useNavigation();
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <TouchableOpacity
        // onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Detail'}))}
        onPress={()=>{navigation!.navigate('Detail')}}
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