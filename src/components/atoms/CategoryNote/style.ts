import { StyleSheet } from 'react-native';
import { themeColors } from '@/src/styles/colors';

export const StyledCategory = StyleSheet.create({
	categoryButton: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 12,
		paddingTop: 8,
		paddingBottom: 4,
		backgroundColor: '#f5f5f5',
		borderRadius: 4,
	},

	categoryButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	categoryName: {
		color: themeColors.accent.links,
		fontWeight: '600',
		fontSize: 16,
	},

	notesContainer: {
		paddingLeft: 30,
		gap: 6,
	},

	noteItem: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
		marginVertical: 3,
	},
});
