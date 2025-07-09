import { AuthContext } from '@/src/context/model/authContextModel'
import AuthContextProvider from '@/src/context/provider/authContextProvider'
import { Redirect, Stack } from 'expo-router'
import React, { useContext } from 'react'


const NotesRoot: React.FC = () => {
    const { isAuth } = useContext(AuthContext)

    if (!isAuth) {
        return <Redirect href={'/(auth)'} />
    }

    return (
        <AuthContextProvider>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='home' />
            </Stack>
        </AuthContextProvider>
    )
}

export default NotesRoot