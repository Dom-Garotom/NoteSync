export type ConfirmationCodeType = {
	code: string;
	email: string;
};

export type ConfirmationCodeResponse = {
	userId: string;
	message: string;
};
