import React from 'react'
import { Text } from 'react-native'

interface WorkSpaceProps {
  text: string
}

const WorkSpace: React.FC<WorkSpaceProps> = ({ text }) => {
  return <Text>{text}</Text>
}

export default WorkSpace