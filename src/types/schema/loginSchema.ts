import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).regex(passwordRegex,
    "A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial."
  )
})


type LoginSchemaType = z.infer<typeof LoginSchema>

export {
    LoginSchema,
    type LoginSchemaType,
}