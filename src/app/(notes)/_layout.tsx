import { AuthContext } from '@/src/context/model/authContextModel'
import { Redirect, Stack } from 'expo-router'
import React, { useContext } from 'react'


const NotesRoot: React.FC = () => {
    const { isAuth } = useContext(AuthContext)

    if (!isAuth) {
        return <Redirect href={'/(auth)/Login'} />
    }

    return (
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Home/index' />
            </Stack>
    )
}

export default NotesRoot