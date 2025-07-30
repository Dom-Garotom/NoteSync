import { AuthContext } from '@/src/context/model/authContextModel'
import { Redirect, Stack } from 'expo-router'
import React, { useContext } from 'react'


const AuthRoot: React.FC = () => {
    const { isAuth } = useContext(AuthContext)

    if (isAuth) {
        return <Redirect href={'/(core)/Home'} />
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Login/index' />
            <Stack.Screen name='Register/index' />
            <Stack.Screen name='ForgotPassword/index' />
            <Stack.Screen name='ConfirmCode/index' />
            <Stack.Screen name='ResetPassword/index' />
        </Stack>
    )
}

export default AuthRoot