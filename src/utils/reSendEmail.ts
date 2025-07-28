import { Alert } from 'react-native';
import { sendRecoveryEmail } from '../services/models/userAuth';

const reSendEmail = async (recoveryEmail: string) => {
	const confirmMessage = await sendRecoveryEmail({
		recoveryEmail,
	});

	if (confirmMessage === null) {
		return Alert.alert(
			'Não foi possível solicitar o envio do código de verificação. ',
		);
	}

	return Alert.alert('O seu código foi enviado para seu email');
};

export { reSendEmail };
