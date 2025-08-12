import { StyleSheet } from 'react-native';
import { themeColors } from '@/src/styles/colors';

export const StyledModalWithInput = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00000057',
	},

	modalContainer: {
		width: '100%',
		borderRadius: 16,
		gap: 16,
		padding: 24,
		backgroundColor: '#fff',

		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: '#a0a4ad',
	},

	title: {
		color: themeColors.text.title,
		fontWeight: 'semibold',
		fontSize: 20,
	},

	subTitle: {
		color: themeColors.text.subTitle,
		fontWeight: 'medium',
		fontSize: 14,
	},

	input: {
		width: '100%',
		height: 40,
		borderWidth: 1,
		borderColor: '#d1d6e3',
		borderRadius: 8,
		paddingHorizontal: 12,
	},

	buttonContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	button: {
		display: 'flex',
		width: 140,
		alignItems: 'center',
		paddingHorizontal: 18,
		paddingVertical: 10,
		borderRadius: 8,
	},

	exitButton: {
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#d1d6e3',
	},

	concludeButton: {
		backgroundColor: '#7F56D9',
		color: '#fff',
	},

	textButton: {
		fontWeight: 'semibold',
		fontSize: 16,
		color: '#414651',
	},
});
