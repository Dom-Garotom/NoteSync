import { z } from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const RegisterUserSchema = z
	.object({
		name: z.string().min(4).max(255),
		email: z.string().email(),
		password: z
			.string()
			.min(4)
			.regex(
				passwordRegex,
				'A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial.',
			),
		confirmPassword: z.string().min(4).regex(passwordRegex),
	})
	.refine(
		(schemaFields) => schemaFields.password === schemaFields.confirmPassword,
		{
			message: 'As duas senhas devem ser iguais.',
			path: ['confirmPassword'],
		},
	);

type RegisterUserType = z.infer<typeof RegisterUserSchema>;

export { RegisterUserSchema, type RegisterUserType };
