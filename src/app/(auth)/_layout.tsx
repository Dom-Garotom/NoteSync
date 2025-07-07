import { Stack } from 'expo-router'
import React from 'react'



const AuthRoot: React.FC = () => {

    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='index' />
            <Stack.Screen name='register' />
            <Stack.Screen name='confirmCode' />
            <Stack.Screen name='resetPassword' />
        </Stack>
    )
}

export default AuthRoot