import { createContext } from "react"

interface AuthContextInterface {
    id : string
    isAuth : boolean
    isLoading : boolean
    setAuth : ( id : string ) => void
    setLogout : () => void
}

const AuthContextDefaultValue : AuthContextInterface = {
    id: '',
    isAuth: false ,
    isLoading: true,
    setLogout: () => '',
    setAuth : () => ''
}


export const AuthContext = createContext<AuthContextInterface>(AuthContextDefaultValue)