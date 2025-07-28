import ButtonNotes from '@/src/components/atoms/ButtonNotes'
import SectionTitle from '@/src/components/atoms/SectionTitle'
import TextField from '@/src/components/atoms/TextField'
import PageTemplate from '@/src/components/template/PageTemplate'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { StyledForgotPassword } from './style'
import { MoveLeftIcon } from 'lucide-react-native'
import { useRouter } from 'expo-router'
import { sendRecoveryEmail } from '@/src/services/models/userAuth'
import { ForgotPasswordSchema, ForgotPasswordType } from '@/src/types/schema/forgotPassowrdSchema'
import { zodResolver } from '@hookform/resolvers/zod'

const ForgotPassword: React.FC = () => {
    const { back, push } = useRouter()
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: zodResolver(ForgotPasswordSchema),
    })

    const onSubmit = async (recoveryEmail: ForgotPasswordType) => {
        const confirmMessage = await sendRecoveryEmail(recoveryEmail)

        if (confirmMessage === null) {
            return
        }

        push(`/(auth)/ConfirmCode/${recoveryEmail.recoveryEmail}`)
    }

    return (
        <PageTemplate
            style={{ gap: 22 }}
        >

            <TouchableOpacity style={StyledForgotPassword.arrowLeft} onPress={() => back()}>
                <MoveLeftIcon color={'#000'} size={22} />
            </TouchableOpacity>

            <Image
                source={require('../../../assets/images/auth/ForgotPassword-image.png')}
                style={{ marginTop: 34 }}
                width={272}
                height={272}
            />


            <View style={{ gap: 19, width: '100%' }}>
                <View>
                    <SectionTitle text='Esqueceu a sua senha ?' />

                    <Text >
                        Insira seu endereço de e-mail registrado para receber o código de recuperação.
                    </Text>
                </View>

                <TextField
                    label='Email de recuperação'
                    formProps={{
                        name: 'recoveryEmail',
                        control: control
                    }}
                    textFieldAttributes={{
                        placeholder: 'Email de recuperação do usuário'
                    }}
                    errorMessage={errors.recoveryEmail?.message?.toString()}
                />

                <ButtonNotes
                    text='Próximo'
                    onPress={handleSubmit(onSubmit)}
                />
            </View>

        </PageTemplate>
    )
}

export default ForgotPassword