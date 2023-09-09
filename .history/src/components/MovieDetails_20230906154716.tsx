import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { DetallesMovie } from '../interfaces/DetallesDb'
import { Cast } from '../interfaces/CreditsDb'
import Icon from 'react-native-vector-icons/Ionicons'

interface props {
    detalles?: DetallesMovie,
    cast?: Cast[]
}
export const MovieDetails = ({ cast = [], detalles }: props) => {

    return (
        // detalles de la pelicula
        <View style={{ marginHorizontal: 15, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Icon name='star-outline' size={16} color={"#fff"}></Icon>

                <Text style={{ color: "#fff" }}> {detalles?.vote_average }</Text>
                <Text style={{color:"#fff"}}> -{detalles?.genres.map((elemento)=>{return elemento.name}).join(',')}</Text>
            </View>
            <View style={{  }}>
                
            </View>
        </View>
    )
}
