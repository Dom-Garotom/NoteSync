import ButtonNotes from '@/src/components/atoms/ButtonNotes'
import SectionTitle from '@/src/components/atoms/SectionTitle'
import React from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { StyledConfirmCode } from '../ConfirmCode/styles'
import { MoveLeftIcon } from 'lucide-react-native'
import PageTemplate from '@/src/components/template/PageTemplate'
import { useLocalSearchParams, useRouter } from 'expo-router'
import TextField from '@/src/components/atoms/TextField'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ResetPasswordSchema, ResetPasswordType } from '@/src/types/schema/resetPassword'
import { sendResetPassword } from '@/src/services/models/userAuth'


const ResetPassword: React.FC = () => {
    const { userId } = useLocalSearchParams<{ userId: string }>();
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: zodResolver(ResetPasswordSchema)
    })
    const { back, navigate } = useRouter()

    if (!userId) back();

    const onSubmit = async ({ password }: ResetPasswordType) => {
        const payload = {
            userId,
            resetPassword: password
        }

        const response = await sendResetPassword(payload)

        if(response === null){
            Alert.alert('Não foi possível alterar a sua senha, tente novamente mais tarde')
            navigate('/(auth)/Login')
            return 
        }
        
        Alert.alert(response.message)
        navigate('/(notes)/Home')
    }


    return (
        <PageTemplate
            style={{ gap: 22 }}
        >

            <TouchableOpacity style={StyledConfirmCode.arrowLeft} onPress={() => back()}>
                <MoveLeftIcon color={'#000'} size={22} />
            </TouchableOpacity>

            <Image
                source={require('../../../assets/images/auth/resetPassword-image.png')}
                style={{ marginTop: 34 }}
                width={350}
                height={272}
            />


            <View style={{ gap: 19, width: '100%' }}>
                <View>
                    <SectionTitle text='Adicione a nova senha de segurança' />

                    <Text >
                        Crie uma nova senha. Certifique-se de que ela seja diferente das anteriores por motivos de segurança.
                    </Text>
                </View>

                <TextField
                    label='Nova senha'
                    textFieldAttributes={{
                        placeholder: 'Escreva a sua nova senha'
                    }}
                    formProps={{
                        name: 'password',
                        control,
                    }}
                    errorMessage={errors.password?.message}
                />

                <TextField
                    label='Confirme a nova senha'
                    textFieldAttributes={{
                        placeholder: 'Escreva novamente a senha'
                    }}
                    formProps={{
                        name: 'confirmPassword',
                        control,
                    }}
                    errorMessage={errors.confirmPassword?.message}
                />


                <ButtonNotes
                    text='Verificar'
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </PageTemplate>
    )
}

export default ResetPassword