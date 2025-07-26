import React from 'react'
import { Text, View } from 'react-native'
import { useFormContext } from 'react-hook-form'

import SectionTitle from '@/src/components/atoms/SectionTitle'
import TextField from '@/src/components/atoms/TextField'
import StyledFormSection from './style'


const FormSection: React.FC = () => {
    const { control, formState } = useFormContext()
    const { errors } = formState
    return (
        <View style={StyledFormSection.Wrapper}>
            <View>
                <SectionTitle text='login' />

                <Text style={StyledFormSection.text}>
                    Acesse sua conta para continuar aproveitando todos os recursos.
                    Basta inserir seu endereço de e-mail e senha cadastrados.
                </Text>
            </View>

            <TextField
                label='Email'
                formProps={{
                    name: 'email',
                    control: control
                }}
                textFieldAttributes={{
                    placeholder: 'Email do usuário'
                }}
                errorMessage={errors.email?.message?.toString()}
            />

            <TextField
                label='Senha'
                formProps={{
                    name: 'password',
                    control: control,
                }}
                textFieldAttributes={{
                    placeholder: 'Senha do usuário'
                }}
                errorMessage={errors.password?.message?.toString()}
            />
        </View>
    )
}

export default FormSection
