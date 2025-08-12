import { AuthContext } from '@/src/context/model/authContextModel'
import { themeColors } from '@/src/styles/colors'
import { Redirect, Tabs, useRouter } from 'expo-router'
import { Bell, CirclePlusIcon,  LucideHome, SearchIcon, UploadCloud } from 'lucide-react-native'
import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'


const CoreRoot: React.FC = () => {
    const { isAuth } = useContext(AuthContext)
    const { navigate } = useRouter()

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
                lazy: true,
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
                name="Home/sections"
                options={{
                    href: null,
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
                    tabBarIcon: ({ focused }) => <CirclePlusIcon color={focused ? themeColors.accent.primary : "#484C52"} />,
                    tabBarButton: ({ children, style }) => (
                        <TouchableOpacity
                            style={style}
                            onPress={(e) => {
                                e.preventDefault()
                                console.log("Abrir modal");
                                navigate('(modal)/CreateAudioNote')
                            }}
                        >
                            {children}
                        </TouchableOpacity>
                    ),
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