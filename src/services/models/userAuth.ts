import type { LoginSchemaType } from "@/src/types/schema/loginSchema";
import { NoteSyncApi } from "../api/config";


export const authenticateUser = async ( userData : LoginSchemaType) => {
    try {
        const { data , status } = await NoteSyncApi.post('/auth', userData)

        if(status === 200 && data){
            return data 
        }

        return null
    } catch (error) {
        console.log(`Erro na autenticação : ${error}`)
        return null
    }   
}