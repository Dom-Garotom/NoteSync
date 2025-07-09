import React, { ReactNode, useEffect, useState } from 'react'
import { AuthContext } from '../model/authContextModel'

interface AuthContextProviderProps {
    children: ReactNode
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [id, setId] = useState<string>('')
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const setAuth = (id: string) => {
        setIsAuth(true)
        setId(id)
    }

    const setLogout = () => {
        setIsAuth(false)
    }

    return (
        <AuthContext.Provider value={{
            id: id,
            isAuth,
            isLoading,
            setAuth,
            setLogout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider