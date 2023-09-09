import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { DetallesMovie } from '../interfaces/DetallesDb'
import { Cast } from '../interfaces/CreditsDb'
import { Icon } from 'react-native-vector-icons/Icon'

interface props {
    detalles?: DetallesMovie,
    cast?:Cast[]
}
export const MovieDetails = ({cast=[],detalles}:props) => {

  return (
    // detalles de la pelicula
    <View style={{ marginHorizontal: 15,
        flexDirection:'row',
        marginTop: 20,}}>
       <Icon name='star-outline' size={16}></Icon>
       <Text>{detalles?.vote_average}</Text>
    </View>
  )
}
