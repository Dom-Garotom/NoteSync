import React from 'react'
import { Link } from 'expo-router'
import { Image, SafeAreaView, Text, View } from 'react-native'

import ButtonNotes from '@/src/components/atoms/ButtonNotes'

const Login: React.FC = () => {


  return (
    <SafeAreaView style={{ flex: 1, padding: 20, paddingTop: 40, gap: 48, alignItems: 'center' }}>

      <Image
        source={require('../../assets/login-cover.png')}
        width={300}
        height={230}
      />

      <View>


      </View>


      <ButtonNotes
        text='Logar na sua conta'
      />


      <View />
      <Text>Ou</Text>
      <View />

      <View>
        {/* Botões de login alternativo */}
      </View>

      <Text>
        Não tem uma conta?
        <Link href={'/(auth)/register'}>Faça login.</Link>
      </Text>


    </SafeAreaView>
  )
}

export default Login