import React from 'react'
import { Cast } from '../interfaces/CreditsDb'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { Image } from 'react-native'

interface props {
    actor: Cast
}
export const CastItems = ({ actor }: props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
    return (
        <View style={styles.container}>
        { actor.profile_path && <Image source={{ uri }} style={{ width: 50, height: 50, borderRadius: 10 }} /> }
            


            <View style={{marginLeft:10}}>

                <Text style={{ fontSize: 18, color: "#fff" }}>{actor.name}</Text>
                <Text style={{ fontSize: 18, color: "grey" }}>{actor.character}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft:5,
        backgroundColor:"#000",
        borderColor:'#fff',
        borderWidth:1,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.24,
        shadowRadius: 2,
        borderRadius: 10,
        elevation: 5,
    }
});
