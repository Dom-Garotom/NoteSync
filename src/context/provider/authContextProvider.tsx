import React, { ReactNode, useEffect, useState } from 'react'
import { AuthContext } from '../model/authContextModel'
import { useAuthStorage } from '@/src/hooks/useAuthStorage'

interface AuthContextProviderProps {
    children: ReactNode
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [id, setId] = useState<string>('')
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { getAuthData, saveAuthData, clearAuthData } = useAuthStorage()

    useEffect(() => {
        const getAuthSection = async () => {
            const { userId } = await getAuthData()

            if (userId === null) {
                setIsAuth(false)
                setIsLoading(false)
                return
            }

            setIsAuth(true)
            setId(userId)
            setIsLoading(false)
        }

        getAuthSection()

    }, [getAuthData, saveAuthData, id, isAuth])

    const setAuth = async (id: string) => {
        setIsAuth(true)
        await saveAuthData(id)
        setId(id)
    }

    const logout = async () => {
        setIsAuth(false)
        setId('')
        await clearAuthData()
    }

    return (
        <AuthContext.Provider value={{
            id: id,
            isAuth,
            isLoading,
            setAuth,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider