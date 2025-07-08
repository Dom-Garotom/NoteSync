import React from 'react'
import { Text, TextInput, View, TextInputProps } from 'react-native'
import { StyledTextField } from './style'
import { Controller, UseControllerProps } from 'react-hook-form'

interface TextFieldProps {
    formProps: UseControllerProps
    textFieldAttributes: TextInputProps
    label: string
}

const TextField: React.FC<TextFieldProps> = ({
    textFieldAttributes,
    formProps,
    label
}) => {
    return (
        <Controller
            {...formProps}
            render={({ field }) => (
                <View style={StyledTextField.wrapper}>
                    <Text style={StyledTextField.label}>{label}</Text>
                    <TextInput
                        ref={field.ref}
                        value={field.value}
                        onChangeText={field.onChange}
                        style={StyledTextField.input}
                        {...textFieldAttributes}
                    />
                </View>
            )}

        />
    )
}

export default TextField
