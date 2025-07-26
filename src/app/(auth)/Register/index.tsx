import React, { useContext } from 'react'
import { Link, useRouter } from 'expo-router'
import { FormProvider, useForm } from "react-hook-form"
import { Image, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { RegisterUserSchema, RegisterUserType } from '@/src/types/schema/registerSchema'
import { registerUser } from '@/src/services/models/userAuth'

import { MoveLeftIcon } from 'lucide-react-native'
import ButtonNotes from '@/src/components/atoms/ButtonNotes'
import PageTemplate from '@/src/components/template/PageTemplate'
import { zodResolver } from '@hookform/resolvers/zod'
import RegisterFormSection from './section/registerFormSection'
import { AuthContext } from '@/src/context/model/authContextModel'


const Register: React.FC = () => {
    const { setAuth } = useContext(AuthContext)
    const { navigate, back } = useRouter()
    const methods = useForm({
        resolver: zodResolver(RegisterUserSchema)
    })

    const onSubmit = async (fieldValues: RegisterUserType) => {
        try {
            const response = await registerUser(fieldValues)
            const registerResponse = response ? response : null

            if (registerResponse?.userId) {
                setAuth(registerResponse.userId)
                navigate('/(notes)/Home')
                return
            }

            Alert.alert('Credenciais inválidas. Tente novamente.')
            return

        } catch (error) {
            console.error('Login error:', error)
            Alert.alert('error', 'Erro ao autenticar. Tente novamente.')
        }
    }

    return (
        <PageTemplate>

            <TouchableOpacity style={s.arrowLeft} onPress={() => back()}>
                <MoveLeftIcon color={'#000'} size={22} />
            </TouchableOpacity>


            <Image
                source={require('../../../assets/images/auth/signIn-image.png')}
                width={272}
                height={272}
            />

            <View style={s.wrapper}>
                <FormProvider {...methods}>
                    <RegisterFormSection />
                </FormProvider>

                <ButtonNotes
                    text='Criar conta'
                    onPress={methods.handleSubmit(onSubmit)}
                />
            </View>


            <Text style={s.bottomText}>
                Já tem uma conta cadastrada ?{" "}
                <Link
                    href={'/(auth)/Login'}
                    style={{ color: '#835ED6', fontWeight: '500' }}
                >
                    Faça login.
                </Link>
            </Text>

        </PageTemplate>
    )
}

export default Register

const s = StyleSheet.create({
    wrapper: {
        width: '100%',
        gap: 19,
    },

    bottomText: {
        width: 220,
        textAlign: 'center',
    },

    arrowLeft: {
        position: 'absolute',
        left: 15,
        top: 30,
        padding: 10,
    },
})