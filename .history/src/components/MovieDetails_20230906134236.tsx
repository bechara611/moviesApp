import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { DetallesMovie } from '../interfaces/DetallesDb'
import { Cast } from '../interfaces/CreditsDb'

interface props {
    detalles?: DetallesMovie,
    cast?:Cast[]
}
export const MovieDetails = (props:props) => {
  return (
    <View style={{marginTop:20}}>
        <Text></Text>
    </View>
  )
}
