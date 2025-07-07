import { Stack, useRouter } from 'expo-router'
import React, { useState } from 'react'



const RootLayout: React.FC = () => {
    const { navigate } = useRouter()
    const [isAuth, _] = useState(false)

    if (isAuth === true) {
        navigate('/(notes)/home')
        return
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='(auth)' />
            <Stack.Screen name='(notes)' />
        </Stack>
    )
}

export default RootLayout