import { z } from 'zod';

const ForgotPasswordSchema = z.object({
	recoveryEmail: z
		.string()
		.email('Digite um email válido')
		.nonempty('Esse campo é obrigatório'),
});

type ForgotPasswordType = z.infer<typeof ForgotPasswordSchema>;

export { ForgotPasswordSchema, type ForgotPasswordType };
