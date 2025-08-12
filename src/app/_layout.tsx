import { Stack } from 'expo-router'
import React from 'react'
import AuthContextProvider from '../context/provider/authContextProvider'
import { DatabaseProvider } from '../context/provider/databaseProvider'
import Toast from 'react-native-toast-message'

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
                    <Stack.Screen
                        name="(modal)/CreateAudioNote"
                        options={{ presentation: 'modal' }}
                    />
                </Stack>
                <Toast />
            </AuthContextProvider>
        </DatabaseProvider>

    )
}

export default RootLayout