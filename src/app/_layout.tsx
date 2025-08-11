import { Stack } from 'expo-router'
import React from 'react'
import AuthContextProvider from '../context/provider/authContextProvider'
import { DatabaseProvider } from '../context/provider/databaseProvider'

const RootLayout: React.FC = () => {
    return (
        <DatabaseProvider>
            <AuthContextProvider>
                <Stack
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name='(auth)' />
                    <Stack.Screen name='(core)' />
                    <Stack.Screen name='(notes)' />
                </Stack>
            </AuthContextProvider>
        </DatabaseProvider>

    )
}

export default RootLayout