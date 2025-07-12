import React, { useContext } from 'react'
import { Link, useRouter } from 'expo-router'
import { Image, Text, View, Alert } from 'react-native'

import ButtonNotes from '@/src/components/atoms/ButtonNotes'
import PageTemplate from '@/src/components/template/PageTemplate'

import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, LoginSchemaType } from '@/src/types/schema/loginSchema'
import { authenticateUser } from '@/src/services/models/userAuth'
import { AuthContext } from '@/src/context/model/authContextModel'
import FormSection from './section/formSection'



const Login: React.FC = () => {
  const { setAuth } = useContext(AuthContext)
  const { navigate } = useRouter()
  const methods = useForm({
    resolver: zodResolver(LoginSchema)
  })

  const onSubmit = async (fieldValues: LoginSchemaType) => {
    try {
      const response = await authenticateUser(fieldValues)
      console.log(response)

      if (response) {
        setAuth(response.userId)
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
    <PageTemplate
      style={{ gap: 48 }}
    >

      <Image
        source={require('../../../assets/login-cover.png')}
        width={300}
        height={230}
      />

      <FormProvider {...methods}>
        <FormSection />
      </FormProvider>

      <ButtonNotes
        text='Logar na sua conta'
        onPress={methods.handleSubmit(onSubmit)}
      />

      <View style={{ gap: 20, alignItems: 'center' }}>
        <Text>
          Não tem uma conta? {" "}
          <Link
            href={'/(auth)/Register'}
            style={{ color: '#835ED6', fontWeight: '500' }}
          >
            Faça o seu cadastro.
          </Link>
        </Text>

        <Link
          href={'/(auth)/ressetPassword'}
          style={{ color: '#835ED6', fontWeight: '500' }}
        >
          Esqueceu a senha ?
        </Link>
      </View>

    </PageTemplate>
  )
}

export default Login

