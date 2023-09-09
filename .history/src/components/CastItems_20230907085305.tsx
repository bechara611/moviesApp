import React from 'react'
import { Cast } from '../interfaces/CreditsDb'
import { Text } from 'react-native'
import { View } from 'react-native'

interface props {
    actor: Cast
}
export const CastItems = ({ actor }: props) => {
    return (
        <View>
            <View>

                <Text style={{ fontSize: 18, color:"#fff" }}>{actor.name}</Text>
                <Text style={{ fontSize: 18, color:"grey" }}>{actor.character}</Text>
           
            </View>
        </View>
    )
}
