import { StyleSheet } from 'react-native';
import { themeColors } from '@/src/styles/colors';

export const s = StyleSheet.create({
	Wrapper: {
		height: 54,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		borderRadius: 6,
		gap: 10,
		padding: 12,
		backgroundColor: themeColors.accent.primary,
	},

	Text: {
		lineHeight: 24,
		fontWeight: '600',
		color: '#fff',
		fontSize: 18,
	},
});
