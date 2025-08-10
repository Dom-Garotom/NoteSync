import { StyleSheet } from 'react-native';
import { themeColors } from '@/src/styles/colors';

export const StyledSectionSwap = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		position: 'relative',
		paddingBottom: 6,
	},

	button: {
		width: 90,
		paddingVertical: 4,
	},

	text: {
		width: 90,
		fontSize: 16,
	},

	activeText: {
		fontWeight: 'bold',
		color: themeColors.text.title,
	},

	inactiveText: {
		color: themeColors.text.contrast,
	},

	underline: {
		position: 'absolute',
		bottom: 0,
		height: 3,
		width: 45,
		backgroundColor: '#8b5cf6',
		borderRadius: 2,
	},
});
