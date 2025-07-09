import React from 'react'
import { Link, useRouter } from 'expo-router'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useForm } from "react-hook-form"

import { ArrowLeftFromLine } from 'lucide-react-native'
import ButtonNotes from '@/src/components/atoms/ButtonNotes'
import SectionTitle from '@/src/components/atoms/SectionTitle'
import PageTemplate from '@/src/components/template/PageTemplate'
import TextField from '@/src/components/atoms/TextField'



const Register: React.FC = () => {
  const { navigate, back } = useRouter()
  const { control, handleSubmit } = useForm()

  const onSubmit = (fieldValues: any) => {
    console.log(fieldValues)
    // navigate('/(notes)/home')
  }


  return (
    <PageTemplate
      style={{ gap: 48 }}
    >

      <TouchableOpacity style={s.arrowLeft} onPress={() => back()}>
        <ArrowLeftFromLine color={'#000'} size={22} />
      </TouchableOpacity>


      <Image
        source={require('../../assets/login-cover2.png')}
        width={300}
        height={230}
      />

      <View style={s.wrapper}>
        <SectionTitle text='Criar conta' />

        <TextField
          label='Nome'
          formProps={{
            name: 'name',
            control: control
          }}
          textFieldAttributes={{
            placeholder: 'Nome do usuário'
          }}
        />

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

        <TextField
          label='Confirmar senha'
          formProps={{
            name: 'confrim-password',
            control: control
          }}
          textFieldAttributes={{
            placeholder: 'Confirme a senha do usuário'
          }}
        />
        <ButtonNotes
          text='Criar conta'
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <Text>
        Já tem uma conta cadastrada ?{" "}
        <Link
          href={'/(auth)/register'}
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

  arrowLeft: {
    position: 'absolute',
    left: 20,
    top: 20,
    padding: 10,
    borderColor: '#D1D1D1',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 8,
  },
})