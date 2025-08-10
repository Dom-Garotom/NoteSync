import React from 'react'
import { Text } from 'react-native'

interface FavoritesProps {
  text: string
}

const Favorites: React.FC<FavoritesProps> = ({ text }) => {
  return <Text>{text}</Text>
}

export default Favorites
