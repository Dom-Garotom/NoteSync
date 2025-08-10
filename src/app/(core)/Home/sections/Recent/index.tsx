import React from 'react'
import { Text } from 'react-native'

interface RecentProps {
  text: string
}

const Recent: React.FC<RecentProps> = ({ text }) => {
  return <Text>{text}</Text>
}

export default Recent
