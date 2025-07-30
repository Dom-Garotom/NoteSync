import type { ForgotPasswordType } from '@/src/types/schema/forgotPassowrdSchema';
import type { LoginSchemaType } from '@/src/types/schema/loginSchema';
import type { RegisterUserType } from '@/src/types/schema/registerSchema';
import type {
	ConfirmationCodeResponse,
	ConfirmationCodeType,
} from '@/src/types/types/confirmationCode';
import type {
	AuthPromise,
	DefaultResponse,
} from '@/src/types/types/responseTypes';
import { NoteSyncApi } from '../api/config';

export const authenticateUser = async (
	userData: LoginSchemaType,
): Promise<AuthPromise | null> => {
	try {
		const { data, status } = await NoteSyncApi.post('/auth', userData);

		if (status === 200 && data) {
			return data as AuthPromise;
		}

		return null;
	} catch (error) {
		console.log(`Erro na autenticação : ${error}`);
		return null;
	}
};

export const registerUser = async (
	userData: RegisterUserType,
): Promise<AuthPromise | null> => {
	try {
		const { data, status } = await NoteSyncApi.post('/register', userData);

		if (status >= 200 || status < 300) {
			return data as AuthPromise;
		}

		return null;
	} catch (error) {
		console.log(`Erro no registro de usuário : ${error}`);
		return null;
	}
};

export const sendRecoveryEmail = async (userData: ForgotPasswordType) => {
	try {
		const payload = {
			email: userData.recoveryEmail,
		};

		const { data, status } = await NoteSyncApi.post('/reset/sendCode', payload);

		if (status >= 200 || status < 300) {
			return data as { message: string };
		}

		return null;
	} catch (error) {
		console.log('Não foi possível enviar o email de recuperação. \nError : ');
		console.log(error);
		return null;
	}
};

export const validateConfirmationCode = async (
	userData: ConfirmationCodeType,
) => {
	try {
		const { data, status } = await NoteSyncApi.post(
			'/reset/validateCode',
			userData,
		);

		if (status >= 200 || status < 300) {
			return data as ConfirmationCodeResponse;
		}

		return null;
	} catch (error) {
		console.log('O código de validação é inválido. \nError : ');
		console.log(error);
		return null;
	}
};

export const sendResetPassword = async (userData: ResetPasswordPayloadType) => {
	try {
		const { data, status } = await NoteSyncApi.post(
			'/reset/resetPassword',
			userData,
		);

		if (status >= 200 || status < 300) {
			return data as DefaultResponse;
		}

		return null;
	} catch (error) {
		console.log('Não foi possível atualizar a sua senha. \nError : ');
		console.log(error);
		return null;
	}
};
