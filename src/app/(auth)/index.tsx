import React, { useContext, useEffect } from 'react'
import { Link, useRouter } from 'expo-router'
import { Image, Text, View, StyleSheet } from 'react-native'

import ButtonNotes from '@/src/components/atoms/ButtonNotes'
import SectionTitle from '@/src/components/atoms/SectionTitle'
import PageTemplate from '@/src/components/template/PageTemplate'
import TextField from '@/src/components/atoms/TextField'

import { useForm } from "react-hook-form"
import { AuthContext } from '@/src/context/model/authContextModel'


const Login: React.FC = () => {
  const { control, handleSubmit } = useForm()


  const onSubmit = (fieldValues: any) => {
    console.log(fieldValues)
    // navigate('/(notes)/home')
  }


  return (
    <PageTemplate
      style={{ gap: 48 }}
    >

      <Image
        source={require('../../assets/login-cover.png')}
        width={300}
        height={230}
      />

      <View style={s.wrapper}>
        <SectionTitle text='login' />

        <TextField
          label='Email'
          formProps={{
            name: 'email',
            control: control
          }}
          textFieldAttributes={{
            placeholder: 'Email do usuário'
          }}
        />

        <TextField
          label='Senha'
          formProps={{
            name: 'password',
            control: control
          }}
          textFieldAttributes={{
            placeholder: 'Senha do usuário'
          }}
        />
      </View>




      <ButtonNotes
        text='Logar na sua conta'
        onPress={handleSubmit(onSubmit)}
      />

      <View style={{ gap: 20, alignItems: 'center' }}>
        <Text>
          Não tem uma conta? {" "}
          <Link
            href={'/(auth)/register'}
            style={{ color: '#835ED6', fontWeight: '500' }}
          >
            Faça o seu cadastro.
          </Link>
        </Text>

        <Link
          href={'/(auth)/resetPassword'}
          style={{ color: '#835ED6', fontWeight: '500' }}
        >
          Esqueceu a senha ?
        </Link>
      </View>


    </PageTemplate>
  )
}

export default Login

const s = StyleSheet.create({
  wrapper: {
    width: '100%',
    gap: 19,
  },
})