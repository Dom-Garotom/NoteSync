import { StyleSheet } from 'react-native';
import { themeColors } from '@/src/styles/colors';

export const StyledFavorite = StyleSheet.create({
	notesContainer: {
		gap: 20,
		alignItems: 'flex-start'
	},

	noteItem: {
		width: '120%',
		flexDirection: 'row',
		gap: 6,
		alignItems: 'center',
	},

	noteName: {
		width: '100%',
		color: themeColors.text.title,
		fontWeight: '500',
		fontSize: 16,
	},
});
