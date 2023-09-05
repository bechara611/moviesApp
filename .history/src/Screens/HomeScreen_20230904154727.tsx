import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import movieDB from '../API/movieDB'

export const HomeScreen = () => {
    useEffect(() => {
        movieDB.get('/now_playing')
        .then((res)=>{})
        .catch((err)=>{console.log(err)})
    
    }, [])
    
  return (
   <View>
    <Text>Homeee</Text>
   </View>
  )
}
