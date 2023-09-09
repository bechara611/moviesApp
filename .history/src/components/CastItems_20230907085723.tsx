import React from 'react'
import { Cast } from '../interfaces/CreditsDb'
import { Text } from 'react-native'
import { View } from 'react-native'
import { Image } from 'react-native'

interface props {
    actor: Cast
}
export const CastItems = ({ actor }: props) => {
 
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
    return (
        <View style={{flexDirection:'row'}}>
            <Image source={{uri}} style={{width:50,height:50,borderRadius:10}}/>

      
            <View>

                <Text style={{ fontSize: 18, color:"#fff" }}>{actor.name}</Text>
                <Text style={{ fontSize: 18, color:"grey" }}>{actor.character}</Text>
           
            </View>
        </View>
    )
}
