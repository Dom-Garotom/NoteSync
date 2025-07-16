import type { LoginSchemaType } from "@/src/types/schema/loginSchema";
import type { RegisterUserType } from "@/src/types/schema/registerSchema";
import type { AuthPromise } from "@/src/types/types/responseTypes";
import { NoteSyncApi } from "../api/config";


export const authenticateUser = async ( userData : LoginSchemaType) => {
    try {
        const { data , status } = await NoteSyncApi.post('/auth', userData)
        
        if(status === 200 && data){
            return  data as AuthPromise
        }

        return null
    } catch (error) {
        console.log(`Erro na autenticação : ${error}`)
        return null
    }   
}


export const registerUser = async ( userData : RegisterUserType ) => {
    try {
        const { data , status } = await NoteSyncApi.post('/register' , userData)

        if(status === 200){
            return data as AuthPromise
        }

        return null
    } catch (error) {
        console.log(`Erro no registro de usuário : ${error}`)
        return null
    }
}