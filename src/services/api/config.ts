import axios from 'axios'
import { env } from '@/src/env/env'

export const NoteSyncApi = axios.create({
    baseURL: env.EXPO_PUBLIC_BASE_URL,
})