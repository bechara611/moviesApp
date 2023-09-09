import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { DetallesMovie } from '../interfaces/DetallesDb'
import { Cast } from '../interfaces/CreditsDb'

interface props {
    detalles?: DetallesMovie,
    cast?:Cast[]
}
export const MovieDetails = ({cast,detalles}:props) => {
    console.log({cast})
  return (
    <View style={{marginTop:20}}>
         {/* <Text style={{color:"#fff"}}>{cast[0].adult}</Text>  */}
        <Text style={{color:"#fff"}}>HOLAAAA</Text>
    </View>
  )
}
