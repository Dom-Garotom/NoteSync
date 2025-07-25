import { z } from 'zod'
import Constants from 'expo-constants'

const EnvSchema = z.object({
    EXPO_PUBLIC_BASE_URL : z.string()
})

export const env = EnvSchema.parse(Constants.expoConfig?.extra ?? {})