import { Stack } from 'expo-router'
import React from 'react'
import AuthContextProvider from '../context/provider/authContextProvider'

const RootLayout: React.FC = () => {
    return (
        <AuthContextProvider>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='(auth)' />
                <Stack.Screen name='(notes)' />
            </Stack>
        </AuthContextProvider>
    )
}

export default RootLayout