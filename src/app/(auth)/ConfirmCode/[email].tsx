import ButtonNotes from '@/src/components/atoms/ButtonNotes'
import SectionTitle from '@/src/components/atoms/SectionTitle'
import PageTemplate from '@/src/components/template/PageTemplate'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { MoveLeftIcon } from 'lucide-react-native'
import React, { useState } from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { StyledConfirmCode } from './styles'
import VerificationCodeInput from '@/src/components/atoms/VerificationCodeInput'
import { themeColors } from '@/src/styles/colors'
import { validateConfirmationCode } from '@/src/services/models/userAuth'
import { reSendEmail } from '@/src/utils/reSendEmail'

const ConfirmCode: React.FC = () => {
    const { email } = useLocalSearchParams();
    const [confirmationCode, setConfirmationCode] = useState<string>('')
    const { back, push } = useRouter()

    if (!email) back();

    const onSubmit = async () => {
        const payload = {
            email : email as string,
            code : confirmationCode,
        }

        const response = await validateConfirmationCode(payload)

        if (response === null){
            Alert.alert('Código de verificação inválido!')
        }

        console.log(response?.userId)

        push(`/(auth)/ResetPassword/${response?.userId}`)
    }

    return (
        <PageTemplate
            style={{ gap: 22 }}
        >

            <TouchableOpacity style={StyledConfirmCode.arrowLeft} onPress={() => back()}>
                <MoveLeftIcon color={'#000'} size={22} />
            </TouchableOpacity>

            <Image
                source={require('../../../assets/images/auth/confirmationCode-image.png')}
                style={{ marginTop: 34 }}
                width={272}
                height={272}
            />


            <View style={{ gap: 19, width: '100%' }}>
                <View>
                    <SectionTitle text='Código de verificação' />

                    <Text >
                        Por favor, confirme o código de segurança recebido no seu e-mail registrado.
                    </Text>
                </View>

                <VerificationCodeInput 
                    onCodeFilled={setConfirmationCode}
                    codeLength={6}
                />

                <ButtonNotes
                    text='Verificar'
                    onPress={onSubmit}
                />
            </View>

            <Text 
                style={StyledConfirmCode.bottomText}
                onPress={() => reSendEmail(email as string)}
            >
                Ainda não recebeu o código? {" "}
                <Text
                    style={{ color: `${themeColors.accent.links}`, fontWeight: '500' }}
                >
                    Enviar novamente.
                </Text>
            </Text>

        </PageTemplate>
    )
}

export default ConfirmCode