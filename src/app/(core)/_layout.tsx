import { AuthContext } from '@/src/context/model/authContextModel'
import { themeColors } from '@/src/styles/colors'
import { Redirect, Tabs } from 'expo-router'
import { Bell, LucideHome, SearchIcon, UploadCloud } from 'lucide-react-native'
import React, { useContext } from 'react'


const CoreRoot: React.FC = () => {
    const { isAuth } = useContext(AuthContext)

    if (!isAuth) {
        return <Redirect href={'/(auth)/Login'} />
    }

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: themeColors.accent.primary,
                tabBarInactiveTintColor: "#484C52",
                animation: 'fade',
            }}

        >
            <Tabs.Screen
                name='Home/index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => <LucideHome color={focused ? themeColors.accent.primary : "#484C52"} />,
                }}
            />
            <Tabs.Screen
                name='Search/index'
                options={{
                    title: 'Pesquisa',
                    tabBarIcon: ({ focused }) => <SearchIcon color={focused ? themeColors.accent.primary : "#484C52"} />,
                }}
            />
            <Tabs.Screen
                name='Create/index'
                options={{
                    title: 'Adicionar',
                    tabBarIcon: ({ focused }) => <LucideHome color={focused ? themeColors.accent.primary : "#484C52"} />,
                }}
            />
            <Tabs.Screen
                name='Upload/index'
                options={{
                    title: 'Upload',
                    tabBarIcon: ({ focused }) => <UploadCloud color={focused ? themeColors.accent.primary : "#484C52"} />,
                }}
            />
            <Tabs.Screen
                name='Notifications/index'
                options={{
                    title: 'Notificações',
                    tabBarIcon: ({ focused }) => <Bell color={focused ? themeColors.accent.primary : "#484C52"} />,
                }}
            />
        </Tabs>
    )
}

export default CoreRoot