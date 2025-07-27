import { StyleSheet } from 'react-native';
import { themeColors } from '@/src/styles/colors';

export const StyledTextField = StyleSheet.create({
	wrapper: {
		position: 'relative',
		width: '100%',
		height: 54,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#D1D1D1',
	},

	label: {
		position: 'absolute',
		top: -10,
		left: 20,
		paddingHorizontal: 5,
		backgroundColor: themeColors.background.base,

		fontSize: 12,
		fontWeight: '500',
		color: '#757575',
	},

	input: {
		width: '100%',
		height: '100%',
		padding: 10,
	},

	errorMessage: {
		color: '#EF5350',
	},
});
