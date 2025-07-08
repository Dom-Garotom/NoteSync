import React from 'react'
import { Text } from 'react-native'
import { StyledSectionTitle } from './style'

interface SectionTitleProps {
    text: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
    return (
        <Text style={StyledSectionTitle.title}>Login</Text>
    )
}

export default SectionTitle

