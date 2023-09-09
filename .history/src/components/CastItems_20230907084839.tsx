import React from 'react'
import { Cast } from '../interfaces/CreditsDb'
import { Text } from 'react-native'

interface props {
    actor: Cast
}
export const CastItems = ({actor}:props) => {
  return (
    <Text>{actor.name}</Text>
  )
}
