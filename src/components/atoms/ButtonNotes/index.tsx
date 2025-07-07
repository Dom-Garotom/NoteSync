import React from 'react'
import { s } from './style'

import { StyleProp, ViewStyle, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonNotesProps extends Omit<TouchableOpacityProps, "style"> {
    text: string,
    wrapperStyle?: StyleProp<ViewStyle>,
    iconName?: React.FC
}

const ButtonNotes: React.FC<ButtonNotesProps> = ({
    text,
    iconName,
    wrapperStyle,
    ...rest
}) => {
    const Icon = iconName

    return (
        <TouchableOpacity
            style={[s.Wrapper, wrapperStyle]}
            {...rest}
        >
            {Icon && <Icon />}
            <Text style={s.Text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ButtonNotes