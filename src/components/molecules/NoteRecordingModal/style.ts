import { StyleSheet } from 'react-native';
import { themeColors } from '@/src/styles/colors';

export const styles = StyleSheet.create({
	modal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00000039',
		padding: 20,
	},

	container: {
		width: '100%',
		gap: 16,
		padding: 15,
		borderRadius: 16,
		backgroundColor: '#fff',

		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#dce0ea',

		alignItems: 'center',
	},

	recording: {
		width: 70,
		height: 70,
		borderRadius: 100,
		backgroundColor: themeColors.accent.icons,
		justifyContent: 'center',
		alignItems: 'center',
	},

	stopRecording: {
		width: 70,
		height: 70,
		borderRadius: 100,
		backgroundColor: '#f73030',
		justifyContent: 'center',
		alignItems: 'center',
	},

	title: {
		color: themeColors.text.title,
		fontWeight: 'semibold',
		fontSize: 20,
		marginBottom: 20,
	},

	text: {
		color: themeColors.text.title,
		fontWeight: 'semibold',
		fontSize: 18,
		marginTop: 20,
	},

	path: {
		fontSize: 12,
		color: '#666',
		marginBottom: 10,
	},
});
