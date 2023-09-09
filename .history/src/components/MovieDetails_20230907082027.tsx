import React from 'react'
import { Platform, View } from 'react-native'
import { Text } from 'react-native'
import { DetallesMovie } from '../interfaces/DetallesDb'
import { Cast } from '../interfaces/CreditsDb'
import Icon from 'react-native-vector-icons/Ionicons'
import { platform } from 'os'

interface props {
    detalles?: DetallesMovie,
    cast?: Cast[]
}
export const MovieDetails = ({ cast = [], detalles }: props) => {

    return (
        // detalles de la pelicula
        <View style={{ marginHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Icon name='star-outline' size={16} color={"yellow"}></Icon>

                <Text style={{ color: "grey" }}> {detalles?.vote_average}</Text>
                <Text style={{ color: "grey" }}>  {detalles?.genres.map((elemento) => { return elemento.name }).join(',')}</Text>
            </View>
            {/* historia */}
            <Text style={{fontSize:23, marginTop:10, fontWeight:'bold', color:'#fff'}}>
                Description
            </Text>
            <Text style={{color:"#fff"}}>{detalles?.overview}</Text>
            <Text style={{fontSize:23, marginTop:10, fontWeight:'bold', color:'#fff'}}>
                Budget
            </Text>
            <Text style={{color:"#fff"}}>{detalles?.budget}</Text>
        </View>
    )
}

