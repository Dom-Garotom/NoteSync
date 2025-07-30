import { z } from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const ResetPasswordSchema = z
	.object({
		password: z
			.string()
			.min(8, 'Sua senha deve ter no mínimo 8 caracteres')
			.regex(
				passwordRegex,
				'A senha deve ter incluido uma letra maiúscula, uma minúscula, um número e um caractere especial.',
			),
		confirmPassword: z
			.string()
			.min(8, 'Sua senha deve ter no mínimo 8 caracteres')
			.regex(
				passwordRegex,
				'A senha deve ter incluido uma letra maiúscula, uma minúscula, um número e um caractere especial.',
			),
	})
	.refine(
		(schemaFields) => schemaFields.password === schemaFields.confirmPassword,
		{
			message: 'As duas senhas devem ser iguais.',
			path: ['confirmPassword'],
		},
	);

type ResetPasswordType = z.infer<typeof ResetPasswordSchema>;

type ResetPasswordPayloadType = {
	userId: string;
	resetPassword: string;
};

export {
	ResetPasswordSchema,
	type ResetPasswordPayloadType,
	type ResetPasswordType,
};
