import { z } from 'zod'

const EnvSchema = z.object({
    EXPO_PUBLIC_BASE_URL : z.string()
})

export const env = EnvSchema.parse(process.env)