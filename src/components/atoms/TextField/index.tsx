import React from 'react'
import { Text, TextInput, View, TextInputProps } from 'react-native'
import { StyledTextField } from './style'
import { Controller, UseControllerProps } from 'react-hook-form'

interface TextFieldProps {
    formProps: UseControllerProps
    textFieldAttributes: TextInputProps
    label: string
    errorMessage?: string
}

const TextField: React.FC<TextFieldProps> = ({
    textFieldAttributes,
    formProps,
    label,
    errorMessage
}) => {
    return (
        <Controller
            {...formProps}
            render={({ field, formState }) => (
                <View>
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
                    {errorMessage &&
                        <Text style={StyledTextField.errorMessage}>
                            *{errorMessage}
                        </Text>
                    }
                </View>
            )}

        />
    )
}

export default TextField
