import React, { ReactNode, useEffect, useState } from 'react'
import { AuthContext } from '../model/authContextModel'
import { useAuthStorage } from '@/src/hooks/useAuthStorage'

interface AuthContextProviderProps {
    children: ReactNode
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [id, setId] = useState<string>('')
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { getAuthData, saveAuthData, clearAuthData } = useAuthStorage()

    useEffect(() => {

        const getAuthSection = async () => {
            const userId = getAuthData()

            if (userId === null) {
                setIsAuth(false)
                setIsLoading(false)
                return
            }

            setIsAuth(true)
            setIsLoading(false)
        }

        getAuthSection()

    }, [getAuthData, saveAuthData])

    const setAuth = (id: string) => {
        setIsAuth(true)
        saveAuthData(id)
        setId(id)
    }

    const logout = () => {
        setIsAuth(false)
        clearAuthData()
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