import { AuthContext } from '@/src/context/model/authContextModel'
import AuthContextProvider from '@/src/context/provider/authContextProvider'
import { Redirect, Stack } from 'expo-router'
import React, { useContext } from 'react'


const AuthRoot: React.FC = () => {
    const { isAuth } = useContext(AuthContext)

    if (isAuth) {
        return <Redirect href={'/home'} />
    }

    return (
        <AuthContextProvider>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Login/index' />
                <Stack.Screen name='Register/index' />
                <Stack.Screen name='ConfirmCode/index' />
                <Stack.Screen name='ResetPassword/index' />
            </Stack>
        </AuthContextProvider>
    )
}

export default AuthRoot